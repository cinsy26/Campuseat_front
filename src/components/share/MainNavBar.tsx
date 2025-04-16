import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import HomeIcon from '../../assets/MainNavBarIcon/home.tsx';
import MenuIcon from '../../assets/MainNavBarIcon/menu.tsx';
import ReportIcon from '../../assets/MainNavBarIcon/report.tsx';
import MypageIcon from '../../assets/MainNavBarIcon/mypage.tsx';

const MainNavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <HomeIcon width={30} height={30} />
      </View>
      <View style={styles.tab}>
        <MenuIcon width={30} height={30} />
      </View>
      <View style={styles.tab}>
        <ReportIcon width={26} height={26} />
      </View>

      <View style={styles.tab}>
        <MypageIcon width={30} height={30} />
      </View>
    </View>
  );
};

export default MainNavBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#FBE7E6', // 원한다면 배경색 지정
    justifyContent: 'center',
    flexDirection: 'row', // 가로 배치
    borderWidth: 1,
  },
  tab: {
    width: '25%',
    height: 60,
    //borderWidth: 1, // 테두리 두께
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상 지원. 아니면 marginLeft로
  },
  hcontainer: {
    gap: 20,
    alignItems: 'center',
    borderWidth: 1, // 테두리 두께
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
  boxtop: {
    gap: 2,
  },
  messagebox: {
    alignSelf: 'flex-start', // 왼쪽 정렬
    gap: 20, // RN 0.71 이상에서만 지원됨
    //marginLeft: 20,
    flexDirection: 'row',
    borderWidth: 1, // 테두리 두께
    alignItems: 'center', // ← 추가!
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // RN 0.71 이상 지원
  },
});
