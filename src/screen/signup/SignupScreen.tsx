// SignupScreen.tsx
import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SafeContainer from '../SafeContainer';
import UserInput from '../../components/share/UserInput';
import VerifyButton from '../../components/user/VerifyButton';
import EmailVerify from '../../components/Signup/EmailVerify';
import BasicInfo from '../../components/Signup/BasicInfo';
import Password from '../../components/Signup/Password';
import PreviousIcon from '../../assets/User/Left';
import NextIcon from '../../assets/User/Right';

const SignupScreen = () => {
  const [step, setStep] = useState(1); // 현재 단계 (1~3)

  const renderStepComponent = () => {
    if (step === 1) return <EmailVerify />;
    if (step === 2) return <Password />;
    if (step === 3) return <BasicInfo />;
    return null;
  };

  return (
    <SafeContainer>
      <View style={styles.arrowcontainer}>
        <PreviousIcon
          width={24}
          height={24}
          onPress={() => setStep(prev => Math.max(1, prev - 1))}
        />
        <NextIcon
          width={24}
          height={24}
          onPress={() => setStep(prev => Math.min(3, prev + 1))}
        />
      </View>
      <View style={styles.barcontainer}>
        {step >= 1 && <View style={styles.bar} />}
        {step >= 2 && <View style={styles.bar} />}
        {step === 3 && <View style={styles.bar} />}
      </View>

      <View style={styles.container}>{renderStepComponent()}</View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  arrowcontainer: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingTop: 20,
  },
  bar: {
    width: '33.33%',
    height: 5,
    backgroundColor: '#C86462',
  },
  barcontainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start', // 왼쪽
    flexDirection: 'row', //가로
  },
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
    paddingTop: 20,
  },
});

export default SignupScreen;
