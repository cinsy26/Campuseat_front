import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import StatusTag from './StatusTag';
import HomeButton from './HomeButton';

const HomeInfoCase3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <View style={styles.row}>
          <Text style={styles.title}>건물이름</Text>
          <StatusTag
            status="사용중"
            borderColor="#3AAF85"
            textColor="#3AAF85"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.titlebold}>장소이름</Text>
        </View>
      </View>
      <View style={styles.buttoncontainer}>
        <HomeButton
          label1="외출하기"
          label2="좌석반납"
          onPress1={() => {}}
          onPress2={() => {}}
        />
      </View>
    </View>
  );
};

export default HomeInfoCase3;

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
    //borderWidth: 1, // 테두리 두께
  },
  buttoncontainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center', // 세로 방향 가운데 정렬
    //borderWidth: 1,
  },

  container: {
    //height: '40%',
    flex: 1,
    width: '100%',
    //gap: 20,
    alignItems: 'center',
    //borderWidth: 1, // 테두리 두께
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
    alignItems: 'center',
    gap: 10, // RN 0.71 이상에서만 동작, 아니면 marginRight 사용

    //borderWidth: 1, // 테두리 두께
  },
});
