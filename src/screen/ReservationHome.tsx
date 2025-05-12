import React, {useState, useEffect} from 'react';
//import {useState} from 'react';
import {View, /*Text,*/ StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../navigator/types';

import SafeContainer from './SafeContainer';
import ChoosePlace from '../components/reservation/ChoosePlace';
import ReservationLayout from '../components/reservation/Layout';
import {fetchPlace} from '../api/reservation';

interface PlaceInfo {
  placeId: number;
  building: string;
  place: string;
  availableSeats: number;
}

export default function ReservationHome() {
  const [placeList, setPlaceList] = useState<PlaceInfo[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleChoosePlace = (placeId: number) => {
    navigation.navigate('Reservation', {placeId});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlace();
        setPlaceList(data);
      } catch (error) {
        console.error('장소 정보 로딩 실패:', error);
      }
    };

    fetchData();
  }, []);

  const getPlaceStatus = (placeName: string): number => {
    if (placeName === '슈니나래') {
      return 1;
    }
    if (placeName === '슈니마루') {
      return 2;
    }
    if (placeName === '멀티플렉스존') {
      return 1;
    }
    return 0;
  };

  return (
    <SafeContainer>
      <ReservationLayout title="예약하기">
        <View style={styles.content}>
          <View style={styles.placeDiscriptionContainer}>
            {/*<View style={styles.placeDiscription}>
              <View style={[styles.circle, {backgroundColor: '#6B8E4E'}]} />
              <Text style={styles.text}>예약 가능한 좌석</Text>
            </View>*/}
          </View>

          {placeList.map((place, index) => (
            <ChoosePlace
              key={index}
              place={place.place}
              location={place.building}
              availableSeats={place.availableSeats}
              placeStatus={getPlaceStatus(place.place)}
              onPress={() => handleChoosePlace(place.placeId)} // placeId 넘기기
            />
          ))}
        </View>
      </ReservationLayout>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    //borderWidth: 1, // 테두리 두께
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    height: '40%', // 적당히 상단 배경 높이
    backgroundColor: '#C86462',
  },
  placeDiscriptionContainer: {
    gap: 10,
    flexDirection: 'row',
  },
  placeDiscription: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#000', // 기본값, 실제는 위에서 override
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
