import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckIcon from '../../assets/icon/User/Check';
import UserInput from '../share/UserInput';
import VerifyButton from '../user/VerifyButton';

console.log('CheckIcon 👉', CheckIcon);

type PasswordProps = {
  onSubmit: (password: string) => void;
};

const Password = ({onSubmit}: PasswordProps) => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 조건 확인
  const isLengthValid = password.length >= 6;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordMatch =
    passwordConfirm !== '' && password === passwordConfirm;
  const isFormValid = isLengthValid && hasSpecialChar && isPasswordMatch;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        로그인에 사용할 <Text style={styles.bold}>비밀번호</Text>를 입력해주세요
      </Text>
      <View style={styles.boxtop}>
        <UserInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="비밀번호 입력"
        />
        <View style={styles.messagebox}>
          <View style={styles.rule}>
            <Text style={[styles.message, isLengthValid && styles.valid]}>
              여섯글자 이상
            </Text>
            <CheckIcon
              width={16}
              height={16}
              color={isLengthValid ? '#3AAF85' : '#000'}
            />
          </View>

          <View style={styles.rule}>
            <Text style={[styles.message, hasSpecialChar && styles.valid]}>
              특수문자 포함
            </Text>
            <CheckIcon
              width={16}
              height={16}
              color={hasSpecialChar ? '#3AAF85' : '#000'}
            />
          </View>
        </View>
      </View>

      <View style={styles.boxtop}>
        <UserInput
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry={true}
          placeholder="비밀번호 확인"
        />
        <View style={styles.rule}>
          <Text style={[styles.message, isPasswordMatch && styles.valid]}>
            비밀번호 확인
          </Text>
          <CheckIcon
            width={16}
            height={16}
            color={isPasswordMatch ? '#3AAF85' : '#000'}
          />
        </View>
      </View>
      <VerifyButton
        label="확인"
        onPress={() => onSubmit(password)}
        disabled={!isFormValid}
      />
    </View>
  );
};

export default Password;

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
    //borderColor: '#C86462', // 테두리 색상
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
  boxtop: {
    gap: 2,
  },
  messagebox: {
    alignSelf: 'flex-start', // 왼쪽 정렬
    gap: 20, // RN 0.71 이상에서만 지원됨
    //marginLeft: 20,
    flexDirection: 'row',
    //borderWidth: 1, // 테두리 두께
    alignItems: 'center', // ← 추가!
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상 지원
  },
  valid: {
    color: '#3AAF85', // 초록색
  },
});
