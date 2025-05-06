import React from 'react';
//import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SeatTypeColor} from '../../util/color';

type ChoosePlaceProps = {
  place: string;
  location: string;
  availableSeats: number;
  placeStatus: number;
};

const ChooseSeat = ({
  place,
  location,
  availableSeats,
  placeStatus,
}: ChoosePlaceProps) => {
  const circleColor = SeatTypeColor(placeStatus);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.placeContainer}>
          <View style={[styles.circle, {backgroundColor: circleColor}]} />
          <Text style={styles.place}>{place}</Text>
          <Text style={styles.text}>{location}</Text>
        </View>
        <Text style={styles.place}>N번 좌석</Text>
      </View>
      <View style={styles.reservationStatus}>
        <Text style={styles.place}>예약 불가</Text>
      </View>
    </View>
  );
};

export default ChooseSeat;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',

    alignSelf: 'center',
    borderColor: '#C86462', // 테두리 색상
    borderWidth: 1, // 테두리 두께

    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center', // 세로 중앙 정렬 (선택사항)
    //gap: 12, // RN 0.71 이상부터 지원됨. 아니면 marginRight 사용
  },
  container: {
    //height: '40%',
    width: '70%',
    gap: 10,
    //borderRadius: 10,
    flexDirection: 'column', // 세로 정렬 유지
    //alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'center',
    padding: 10,
    //borderColor: '#C86462', // 테두리 색상
    //borderWidth: 1, // 테두리 두께

    //backgroundColor: '#fff',
  },
  placeContainer: {
    //이 안 컴포넌트 가로배치
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    //borderWidth: 1,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#000', // 기본값, 실제는 위에서 override
  },
  place: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000',
  },
  titlebold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  reservationStatus: {
    borderWidth: 1,
    width: '30%',
    padding: 10,
    justifyContent: 'center', // 세로 가운데 정렬
    alignItems: 'center',
  },
});
