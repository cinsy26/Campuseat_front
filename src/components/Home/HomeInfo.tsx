import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import HomeInfoCase1 from './Case1';
import HomeInfoCase2 from './Case2';
import HomeInfoCase3 from './Case3';
import HomeInfoCase4 from './Case4';

const HomeInfo = () => {
  return (
    <View style={styles.container}>
      <HomeInfoCase4 />
    </View>
  );
};

export default HomeInfo;

const styles = StyleSheet.create({
  textbox: {
    width: '100%',
    paddingHorizontal: 24, // 왼쪽 여백
    alignItems: 'flex-start', // 내부 요소들 왼쪽 정렬
    gap: 20,
    paddingTop: 50,
    paddingBottom: 40,

    borderWidth: 1, // 테두리 두께
  },
  container: {
    //height: '40%',
    flex: 1,
    width: '100%',
    gap: 20,
    alignItems: 'center',
    borderWidth: 1, // 테두리 두께

    backgroundColor: '#C86462',
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
