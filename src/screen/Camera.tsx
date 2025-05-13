import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {confirmSeat} from '../api/reservation';

const QRScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  useEffect(() => {
    if (barcodes.length > 0 && !scanned) {
      const code = barcodes[0]?.displayValue;
      if (code) {
        setScanned(true);
        const url = new URL(code);
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
              setScanned(false); // 실패 시 재시도 허용
            });
        } else {
          Alert.alert(
            'QR 코드 형식 오류',
            'building/location/seat 정보가 부족합니다.',
          );
          setScanned(false);
        }
      }
    }
  }, [barcodes, scanned]);

  if (!device || !hasPermission) {
    return <Text style={styles.loading}>카메라 로딩 중...</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
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
    flex: 1,
    textAlign: 'center',
    marginTop: 200,
    fontSize: 16,
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
