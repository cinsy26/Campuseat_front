import React from 'react';
//import {useState} from 'react';
import {View, /*Text,*/ StyleSheet} from 'react-native';
import SafeContainer from './SafeContainer';
import ChoosePlace from '../components/reservation/ChoosePlace';
import ReservationLayout from '../components/reservation/Layout';

export default function ReservationHome() {
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
          <ChoosePlace
            place="멀티플렉스"
            location="도서관 1층"
            availableSeats={3}
            placeStatus={1}
          />
          <ChoosePlace
            place="슈니마루"
            location="도서관 1층"
            availableSeats={0}
            placeStatus={2}
          />
          <ChoosePlace
            place="슈니나래"
            location="도서관 5층"
            availableSeats={2}
            placeStatus={1}
          />
          <ChoosePlace
            place="멀티미디어 라운지"
            location="도서관 1층"
            availableSeats={5}
            placeStatus={0}
          />
          <ChoosePlace
            place="소셜러닝 라운지"
            location="도서관 1층"
            availableSeats={8}
            placeStatus={0}
          />
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
