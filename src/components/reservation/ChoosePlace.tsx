import React from 'react';
//import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SeatTypeColor} from '../../util/color';
import BookmarkIcon from '../../assets/icon/Reservation/BookmarkIcon';

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
      <View style={styles.textContainer}>
        <View style={styles.placeContainer}>
          <View style={[styles.circle, {backgroundColor: circleColor}]} />
          <Text style={styles.place}>{place}</Text>
          <Text style={styles.text}>{location}</Text>
        </View>
        <Text style={styles.text}>이용 가능한 좌석 수 : {availableSeats}</Text>
      </View>
      <View style={styles.iconContainer}>
        <BookmarkIcon
          width={30}
          height={30}
          color="#000"
          strokeWidth={1}
          fillColor="#FFE100"
        />
      </View>
    </View>
  );
};

export default ChoosePlace;

const styles = StyleSheet.create({
  container: {
    //height: '40%',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row', // 세로 정렬 유지
    //alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'center',
    padding: 10,
    borderColor: '#C86462', // 테두리 색상
    borderWidth: 1, // 테두리 두께

    backgroundColor: '#fff',
  },
  textContainer: {
    width: '80%',
    //borderWidth: 1,
    gap: 10,
  },
  iconContainer: {
    width: '20%',
    //borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
