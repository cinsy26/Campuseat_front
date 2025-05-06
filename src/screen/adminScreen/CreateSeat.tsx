import React from 'react';
import {useState} from 'react';
import {
  View,
  //Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import AdminLayout from './AdminLayout';
import LabeledItem from '../../components/createQr/LabeledItem';

import UserInput from '../../components/share/UserInput';
import VerifyButton from '../../components/user/VerifyButton';

import {createSeatInformation} from '../../api/admin';

export default function CreateSeat() {
  const [buildingName, setBuildingName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [seatCount, setSeatCount] = useState('');

  return (
    <AdminLayout title="좌석 정보 생성">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <View style={styles.box} />
            <View style={styles.labelContainer}>
              <LabeledItem label="1. 건물 이름" />
              <UserInput
                width={'100%'}
                value={buildingName}
                onChangeText={setBuildingName}
                placeholder="건물 이름을 입력하세요 ex) 도서관"
              />
            </View>
            <View style={styles.labelContainer}>
              <LabeledItem label="2. 장소 이름" />
              <UserInput
                width={'100%'}
                value={locationName}
                onChangeText={setLocationName}
                placeholder="장소 이름을 입력하세요 ex) 슈니마루"
              />
            </View>
            <View style={styles.labelContainer}>
              <LabeledItem label="3. 총 좌석 개수" />
              <UserInput
                width={'100%'}
                value={seatCount}
                onChangeText={setSeatCount}
                placeholder="총 좌석 개수를 입력하세요 ex) 20"
              />
            </View>
            <VerifyButton
              label="좌석 정보 생성"
              onPress={async () => {
                try {
                  await createSeatInformation({
                    // 함수명 변경
                    buildingName,
                    locationName,
                    seatCount: parseInt(seatCount),
                  });
                  Alert.alert('성공', '좌석 정보가 생성되었습니다.');
                  // 입력값 초기화
                  setBuildingName('');
                  setLocationName('');
                  setSeatCount('');
                } catch (err: any) {
                  console.error('❌ 좌석 생성 실패:', err);

                  Alert.alert(
                    '오류',
                    err.message || '좌석 생성 중 오류가 발생했습니다.',
                  );
                }
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  //wrapper: {
  //flex: 1,
  //justifyContent: 'space-between', // 상단 내용과 하단 바 사이 공간 분배
  //backgroundColor: '#fff',
  //},
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    //borderWidth: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  labelContainer: {
    width: '90%',
    backgroundColor: '#fff',
    //borderWidth: 1,
    gap: 10,
  },
  box: {
    width: '100%',
    height: '3%',
    backgroundColor: '#fff',
    //borderWidth: 1,
  },
});
