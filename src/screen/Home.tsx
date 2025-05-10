import React from 'react';
//import {useState} from 'react';
import {View, /*Text,*/ StyleSheet} from 'react-native';
import SafeContainer from './SafeContainer';

import HomeInfo from '../components/home/HomeInfo';
import HomeUsageHistory from '../components/home/UsageHistory';
import SubNavBar from '../components/share/HomeSubNavBar';

export default function Home() {
  return (
    <SafeContainer>
      <View style={styles.wrapper}>
        {/* 상단 배경 */}
        <View style={styles.topBackground}>
          <HomeInfo />
        </View>

        {/* 겹치는 content */}
        <View style={styles.overlappingContent}>
          <HomeUsageHistory />
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  //wrapper: {
  //flex: 1,
  //justifyContent: 'space-between', // 상단 내용과 하단 바 사이 공간 분배
  //backgroundColor: '#fff',
  //},
  content: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBackground: {
    height: '40%', // 적당히 상단 배경 높이
    backgroundColor: '#C86462',
  },
  overlappingContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // 상단 배경과 겹치게 하기 위해 음수 마진
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
