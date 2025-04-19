import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInput from '../share/UserInput';
import VerifyButton from '../user/VerifyButton';

import {verifyEmail, checkVerificationCode} from '../../api/SignupApi';
const EmailVerify = () => {
  const [email, setEmail] = useState('');
  const [verifycode, setVerifyCode] = useState(''); //인증번호 상태 저장
  const [status, setStatus] = useState(''); //현재 진행 상황
  const [isCodeSent, setIsCodeSent] = useState(false);

  // 이메일 인증번호 요청
  const handleVerify = async () => {
    try {
      const result = await verifyEmail(email);
      setStatus(result.message);
      setIsCodeSent(true); // 버튼 전환
      console.log('인증번호 발송 성공:', result);
    } catch (err: any) {
      setStatus(err.message || '이메일 인증 실패');
      console.error('이메일 인증 실패:', err);
    }
  };

  // 인증번호 확인
  const handleCheckCode = async () => {
    try {
      const result = await checkVerificationCode(email, verifycode);
      setStatus(result.message);
      console.log('인증번호 확인 성공:', result);
    } catch (err: any) {
      setStatus(err.message || '인증번호 확인 실패');
      console.error('인증번호 확인 실패:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        로그인에 사용할 <Text style={styles.bold}>웹메일</Text>을 입력해주세요
      </Text>
      <UserInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="웹메일을 입력해주세요"
      />
      <UserInput
        value={verifycode}
        onChangeText={setVerifyCode}
        keyboardType="email-address"
        placeholder="인증번호를 입력해주세요"
      />
      <VerifyButton
        label={isCodeSent ? '인증번호 확인' : '확인'}
        onPress={() => {
          if (isCodeSent) {
            console.log('인증번호 확인 요청:', email, verifycode);
            handleCheckCode();
          } else {
            console.log('이메일 인증 요청 시작:', email);
            handleVerify();
          }
        }}
      />

      <Text style={styles.message}>{status}</Text>
    </View>
  );
};

export default EmailVerify;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상 지원. 아니면 marginLeft로
  },
  container: {
    gap: 20,
    alignItems: 'center',
    //borderWidth: 1, // 테두리 두께
    borderColor: '#C86462', // 테두리 색상
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
