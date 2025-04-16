import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInput from '../share/UserInput';
import VerifyButton from '../user/VerifyButton';

const HomeUsageHisotry = () => {
  const [nickname, setNickname] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        앱에서 사용할 <Text style={styles.bold}>닉네임</Text>을 입력해주세요
      </Text>
    </View>
  );
};

export default HomeUsageHisotry;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상 지원. 아니면 marginLeft로
  },
  container: {
    height: '100%',
    width: '100%',
    gap: 20,
    alignItems: 'center',
    borderWidth: 1, // 테두리 두께

    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
