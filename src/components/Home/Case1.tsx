import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import UserInput from '../share/UserInput';
import VerifyButton from '../user/VerifyButton';
import HomeButton from './HomeButton';

const HomeInfoCase1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.title}>안녕하세요</Text>
        <View style={styles.row}>
          <Text style={styles.titlebold}>김슈니</Text>
          <Text style={styles.title}>님</Text>
        </View>
      </View>
      <View style={styles.buttoncontainer}>
        <HomeButton
          label1="좌석 예약"
          label2="신고하기"
          onPress1={() => {}}
          onPress2={() => {}}
        />
      </View>
    </View>
  );
};

export default HomeInfoCase1;

const styles = StyleSheet.create({
  textbox: {
    width: '100%',
    height: '60%',
    paddingHorizontal: 24, // 왼쪽 여백
    alignItems: 'flex-start', // 내부 요소들 왼쪽 정렬
    justifyContent: 'center', // 세로 방향 가운데 정렬

    gap: 20,
    //paddingTop: 20,
    //paddingBottom: 20,

    borderWidth: 1, // 테두리 두께
  },
  buttoncontainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center', // 세로 방향 가운데 정렬
    borderWidth: 1,
  },

  container: {
    //height: '40%',
    flex: 1,
    width: '100%',
    //gap: 20,
    alignItems: 'center',
    borderWidth: 1, // 테두리 두께
    backgroundColor: '#C86462',
    paddingBottom: 20, // 버튼이 눌릴 공간 확보
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  titlebold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end', // 또는 'baseline'도 가능
    gap: 4, // RN 0.71 이상에서만 동작, 아니면 marginRight 사용
  },
});
