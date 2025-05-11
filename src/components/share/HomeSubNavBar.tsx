import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../navigator/types.ts';

import StarIcon from '../../assets/icon/SubNavIcon/StarIcon.tsx';
import HistoryIcon from '../../assets/icon/SubNavIcon/HistoryIcon.tsx';

const SubNavBar = () => {
  type Navigation = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<Navigation>();

  const [selectedTab, setSelectedTab] = useState<'favorite' | 'history'>(
    'favorite',
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Pressable
          style={[styles.tab, selectedTab !== 'favorite' && styles.inactiveTab]}
          onPress={() => setSelectedTab('favorite')}>
          <Text style={styles.title}>즐겨찾기</Text>
          <StarIcon
            size={35}
            fillColor="#FFE100"
            strokeColor="#000"
            strokeWidth={1}
          />
        </Pressable>

        <Pressable
          style={[styles.tab, selectedTab !== 'history' && styles.inactiveTab]}
          onPress={() => setSelectedTab('history')}>
          <Text style={styles.title}>사용내역</Text>
          <HistoryIcon size={30} />
        </Pressable>
      </View>
      <View style={styles.border} />
    </View>
  );
};

export default SubNavBar;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 55,
    backgroundColor: '#fff', // 원한다면 배경색 지정
    justifyContent: 'center',
    flexDirection: 'column', //세로 배치
    alignItems: 'center', //자식 요소들을 가로 중앙 정렬

    //borderWidth: 1,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  tab: {
    width: '40%',
    height: 50,
    flexDirection: 'row',
    //borderWidth: 1, // 테두리 두께
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
  inactiveTab: {
    opacity: 0.6,
  },

  border: {
    width: '100%',
    height: 3,
    backgroundColor: '#4B4B4B', // 진회색
    borderRadius: 10,
  }, // 테두리 색상
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
    fontSize: 18,
    fontWeight: 'bold',
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
