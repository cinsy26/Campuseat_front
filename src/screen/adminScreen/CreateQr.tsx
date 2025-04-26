import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import AdminLayout from './AdminLayout';
import LabeledItem from '../../components/CreateQr/LabeledItem';

import UserInput from '../../components/share/UserInput';
import VerifyButton from '../../components/user/VerifyButton';

export default function CreateQr() {
  const [buildingName, setBuildingName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [seatCount, setSeatCount] = useState('');
  const [email, setEmail] = useState('');

  return (
    <AdminLayout title="QR 코드 생성">
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
            <View style={styles.labelContainer}>
              <LabeledItem label="4. QR 이미지 pdf 전송 이메일" />
              <UserInput
                width={'100%'}
                value={email}
                onChangeText={setEmail}
                placeholder="이메일 주소를 입력해주세요"
              />
            </View>
            <VerifyButton
              label="QR 코드 생성"
              onPress={async () => {
                console.log('QR 코드 생성 버튼 클릭됨');
                // 여기에 QR 코드 생성 로직 추가
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
