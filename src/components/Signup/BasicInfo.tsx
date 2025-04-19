import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInput from '../share/UserInput';
import VerifyButton from '../user/VerifyButton';

type BasicInfoProps = {
  onSubmit: (nickname: string) => void;
};

const BasicInfo = ({onSubmit}: BasicInfoProps) => {
  const [nickname, setNickname] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        앱에서 사용할 <Text style={styles.bold}>닉네임</Text>을 입력해주세요
      </Text>
      <UserInput
        value={nickname}
        onChangeText={setNickname}
        placeholder="닉네임 입력"
      />
      <VerifyButton
        label="회원가입"
        onPress={() => onSubmit(nickname)}
        disabled={nickname.length < 2}
      />
    </View>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상 지원. 아니면 marginLeft로
  },
  container: {
    //height: '40%',
    width: '100%',
    gap: 20,
    alignItems: 'center',

    //backgroundColor: '#C86462',
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
