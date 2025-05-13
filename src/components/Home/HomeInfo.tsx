import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {MyInfo} from '../../api/home';

import HomeInfoCase1 from './Case1';
import HomeInfoCase2 from './Case2';
import HomeInfoCase3 from './Case3';
import HomeInfoCase4 from './Case4';

const HomeInfo = () => {
  const [nickname, setNickname] = useState('');
  const [userStatus, setUserStatus] = useState('');
  const [building, setBuilding] = useState('');
  const [place, setPlace] = useState('');
  const [seat, setSeat] = useState('');

  /*
  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const data = await MyInfo();

        setNickname(data.nickname);
        setUserStatus(data.userStatus);

        // DEFAULT가 아닌 경우 building/place/seat도 함께 저장
        if (data.userStatus !== 'DEFAULT') {
          setBuilding(data.building);
          setPlace(data.place);
          setSeat(data.seat);
        }
      } catch (error) {
        console.error('Failed to load myinfo:', error);
      }
    };

    fetchMyInfo();
  }, []);
*/

  useFocusEffect(
    useCallback(() => {
      const fetchMyInfo = async () => {
        try {
          const data = await MyInfo();
          setNickname(data.nickname);
          setUserStatus(data.userStatus);
          if (data.userStatus !== 'DEFAULT') {
            setBuilding(data.building);
            setPlace(data.place);
            setSeat(data.seat);
          }
        } catch (error) {
          console.error('Failed to load myinfo:', error);
        }
      };

      fetchMyInfo();
    }, []),
  );

  const renderContent = () => {
    switch (userStatus) {
      case 'DEFAULT':
        return <HomeInfoCase1 nickname={nickname} />;
      case 'RESERVED_SEAT':
        return <HomeInfoCase2 building={building} place={place} seat={seat} />;
      case 'USING_SEAT':
        return (
          <HomeInfoCase3
            building={building}
            place={place}
            seat={Number(seat)}
          />
        );
      case 'ON_BREAK':
        return (
          <HomeInfoCase4
            building={building}
            place={place}
            seat={Number(seat)}
          />
        );
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
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
