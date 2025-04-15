// SignupScreen.tsx
import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeContainer from '../SafeContainer';
import UserInput from '../../components/share/UserInput';
import VerifyButton from '../../components/user/VerifyButton';
import EmailVerify from '../../components/Signup/EmailVerify';

const SignupScreen = () => {
  return (
    <SafeContainer>
      <Text style={styles.text}>회원가입 화면입니다.</Text>

      <View style={styles.container}>
        <EmailVerify />
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
