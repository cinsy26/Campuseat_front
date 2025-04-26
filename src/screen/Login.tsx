import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator/types';

import SafeContainer from './SafeContainer';
import UserInput from '../components/share/UserInput';
import VerifyButton from '../components/user/VerifyButton';

import CampuSeat from '../assets/logo/CampuSeat.svg';

import {login} from '../api/Login';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); //로그인 에러 메시지

  type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Login'
  >;

  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <SafeContainer>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <CampuSeat />
        </View>
        <View style={styles.content}>
          <View style={styles.inputwrapper}>
            <UserInput
              value={email}
              onChangeText={setEmail}
              placeholder="이메일을 입력하세요"
              keyboardType="email-address"
            />
            <UserInput
              value={password}
              onChangeText={setPassword}
              placeholder="비밀번호를 입력하세요"
              secureTextEntry={true}
            />
            <Text style={styles.message}>{errorMessage}</Text>{' '}
          </View>
          <View style={styles.buttonwrapper}>
            <VerifyButton
              label="로그인"
              onPress={async () => {
                try {
                  setErrorMessage(''); // 이전 에러 초기화
                  const result = await login(email, password);
                  console.log('로그인 성공:', result);
                  navigation.navigate('Home');
                } catch (err: any) {
                  console.error('로그인 실패:', err.message);
                  setErrorMessage(err.message);
                }
              }}
            />

            <Text onPress={() => navigation.navigate('Signup')}>회원가입</Text>
          </View>
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    //borderWidth: 1,
    gap: 50,
  },
  content: {
    //flex: 1,
    //borderWidth: 1,
    gap: 30,
  },

  logo: {},

  inputwrapper: {
    gap: 20,
    width: '100%',
  },
  buttonwrapper: {
    gap: 10,
    alignItems: 'center', // 가로 중앙 정렬
    //borderWidth: 1,
  },
  message: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#FA7C79',
  },
});
