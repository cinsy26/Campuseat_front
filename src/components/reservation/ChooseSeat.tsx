import React from 'react';
//import {useState} from 'react';
import {View, Text, StyleSheet, Alert, Pressable} from 'react-native';
//import {SeatTypeColor} from '../../util/color';
import {reserveSeat} from '../../api/reservation';

type ChoosePlaceProps = {
  place: string;
  location: string;
  seatName: string;
  seatStatus: 'AVAILABLE' | 'OCCUPIED' | 'SELECTED' | 'OTHER';
  seatId: number;
  refreshSeats: () => void; // 👈 추가
};

const ChooseSeat = ({
  place,
  location,
  seatName,
  seatStatus,
  seatId,
  refreshSeats,
}: ChoosePlaceProps) => {
  const isAvailable = seatStatus === 'AVAILABLE';

  const handlePress = () => {
    if (isAvailable) {
      Alert.alert('예약하시겠습니까?', `${seatName} 좌석을 예약하시겠습니까?`, [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: async () => {
            try {
              await reserveSeat(seatId);
              Alert.alert('예약 성공', `${seatName} 좌석이 예약되었습니다.`);
              refreshSeats();
            } catch (error) {
              Alert.alert('예약 실패', '잠시 후 다시 시도해주세요.');
            }
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.placeContainer}>
          {/*<View style={[styles.circle, {backgroundColor: circleColor}]} />*/}
          {/*<Text style={styles.place}>{place}</Text>*/}
          <Text style={styles.text}>{location}</Text>
        </View>
        <Text style={styles.place}>{seatName} 좌석</Text>
      </View>
      <Pressable
        style={styles.reservationStatus}
        onPress={handlePress}
        disabled={!isAvailable}>
        <Text
          style={[
            styles.statusText,
            {color: isAvailable ? '#6B8E4E' : '#C86462'}, // 초록 or 회색
          ]}>
          {isAvailable ? '예약 하기' : '예약 불가'}
        </Text>
      </Pressable>
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
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
