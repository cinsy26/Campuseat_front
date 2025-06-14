import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {confirmSeat} from '../api/reservation';

const QRScannerScreen = () => {
  const [scanned, setScanned] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef<RNCamera | null>(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: '카메라 권한 요청',
              message: 'QR 코드를 스캔하려면 카메라 권한이 필요합니다.',
              buttonPositive: '허용',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setHasPermission(true);
          } else {
            Alert.alert('카메라 권한이 거부되었습니다.');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        setHasPermission(true); // iOS는 자동으로 권한 부여됨
      }
    };

    requestCameraPermission();
  }, []);

  // ✅ 여기 추가
  useEffect(() => {
    if (hasPermission) {
      const timer = setTimeout(() => {
        setCameraReady(true);
      }, 500); // 카메라 로딩 안정화를 위해 0.5초 지연
      return () => clearTimeout(timer);
    }
  }, [hasPermission]);

  const handleBarCodeRead = ({data}: {data: string}) => {
    if (!cameraReady || scanned) return;

    setScanned(true);

    try {
      const url = new URL(data);
      const building = url.searchParams.get('building');
      const location = url.searchParams.get('location');
      const seat = url.searchParams.get('seat');

      if (building && location && seat) {
        confirmSeat({building, location, seat})
          .then(() => {
            Alert.alert(
              '좌석 확정 성공',
              `${building} ${location} ${seat} 좌석이 확정되었습니다.`,
            );
          })
          .catch(() => {
            Alert.alert('좌석 확정 실패', '다시 시도해주세요.');
            setScanned(false);
          });
      } else {
        Alert.alert('QR 코드 형식 오류', 'building/location/seat 정보가 부족합니다.');
        setScanned(false);
      }
    } catch (e) {
      Alert.alert('QR 코드 파싱 실패', '올바른 QR 코드가 아닙니다.');
      setScanned(false);
    }
  };

  if (!hasPermission) {
    return (
      <View style={[styles.container, styles.loading]}>
        <Text style={styles.overlayText}>카메라 권한을 기다리는 중...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {hasPermission && (
        <RNCamera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          type={RNCamera.Constants.Type.back}
          onCameraReady={() => console.log('카메라 준비됨')}
          onBarCodeRead={cameraReady ? handleBarCodeRead : undefined}
          captureAudio={false}
        />
      )}

      {!cameraReady && (
        <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <Text style={styles.overlayText}>카메라 초기화 중...</Text>
        </View>
      )}
      <Text style={styles.overlayText}>QR 코드를 화면에 맞춰주세요</Text>
    </View>
  );
};

export default QRScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
