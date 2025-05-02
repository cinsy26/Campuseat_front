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

const ChoosePlace = ({
  place,
  location,
  availableSeats,
  placeStatus,
}: ChoosePlaceProps) => {
  const circleColor = SeatTypeColor(placeStatus);

  return (
    <View style={styles.container}>
      <View style={styles.placeContainer}>
        <View style={[styles.circle, {backgroundColor: circleColor}]} />
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.text}>{location}</Text>
      </View>
      <Text style={styles.text}>이용 가능한 좌석 수 : {availableSeats}</Text>
    </View>
  );
};

export default ChoosePlace;

const styles = StyleSheet.create({
  container: {
    //height: '40%',
    width: '100%',
    gap: 10,
    borderRadius: 10,
    flexDirection: 'column', // 세로 정렬 유지
    //alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'center',
    padding: 10,
    borderColor: '#C86462', // 테두리 색상
    borderWidth: 1, // 테두리 두께

    backgroundColor: '#fff',
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
    color: '#fff',
  },
});
