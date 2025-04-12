// SignupScreen.tsx
import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeContainer from './SafeContainer';
import UserInput from '../components/share/UserInput';
import VerifyButton from '../components/user/VerifyButton';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeContainer>
      <Text style={styles.text}>회원가입 화면입니다.</Text>

      <View style={styles.container}>
        <View style={styles.row}>
          <UserInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="이메일을 입력하세요"
          />
          <VerifyButton
            label="인증번호 전송"
            onPress={() => {
              console.log('이메일 인증 시도');
            }}
          />
        </View>
        <View style={styles.row}>
          <UserInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="비밀번호를 입력하세요"
          />
          <VerifyButton
            label="중복확인"
            onPress={() => {
              console.log('이메일 인증 시도');
            }}
          />
        </View>
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // 글씨를 검정색으로 지정
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상 지원. 아니면 marginLeft로
  },
  container: {
    gap: 10,
  },
});

export default SignupScreen;
