import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInput from '../share/UserInput';
import VerifyButton from '../user/VerifyButton';

import {verifyEmail, checkVerificationCode} from '../../api/SignupApi';

type Props = {
  email: string;
  setEmail: (email: string) => void;
};

const EmailVerify = ({email, setEmail}: Props) => {
  const [verifycode, setVerifyCode] = useState(''); //인증번호 상태 저장
  const [status, setStatus] = useState(''); //현재 진행 상황
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
  const [isCodeSent, setIsCodeSent] = useState(false); //인증번호 전송 여부

  // 이메일 인증번호 요청
  const handleVerify = async () => {
    try {
      const result = await verifyEmail(email);
      setStatus(result.message);
      setIsCodeSent(true); // 버튼 전환
      setStatusType('success');
      console.log('인증번호 발송 성공:', result);
    } catch (err: any) {
      setStatus(err.message || '이메일 인증 실패');
      setStatusType('error'); // 에러
      console.error('이메일 인증 실패:', err);
    }
  };

  // 인증번호 확인
  const handleCheckCode = async () => {
    try {
      const result = await checkVerificationCode(email, verifycode);
      setStatus(result.message);
      setStatusType('success'); // 성공

      console.log('인증번호 확인 성공:', result);
    } catch (err: any) {
      setStatus(err.message || '인증번호 확인 실패');
      console.error('인증번호 확인 실패:', err);
      setStatusType('error'); // 에러
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
      {!isCodeSent && <VerifyButton label="확인" onPress={handleVerify} />}

      {isCodeSent && (
        <>
          <UserInput
            value={verifycode}
            onChangeText={setVerifyCode}
            keyboardType="numeric"
            placeholder="인증번호를 입력해주세요"
          />
          <VerifyButton label="인증번호 확인" onPress={handleCheckCode} />
        </>
      )}

      <Text
        style={[
          styles.message,
          statusType === 'error' && styles.error,
          statusType === 'success' && styles.success,
        ]}>
        {status}
      </Text>
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
  error: {
    color: '#FA7C79',
  },
  success: {
    color: '#3AAF85', // 초록색 계열
  },
});
