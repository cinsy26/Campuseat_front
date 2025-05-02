import React from 'react';
//import {useState} from 'react';
import {View, /*Text,*/ StyleSheet} from 'react-native';
import SafeContainer from './SafeContainer';
//import ChoosePlace from '../components/reservation/ChoosePlace';
import ReservationLayout from '../components/reservation/Layout';
import MultiflexMap from '../components/reservation/seatMap/Multiflex';
import SwunimaruMap from '../components/reservation/seatMap/Swunimaru';

export default function Reservation() {
  return (
    <SafeContainer>
      <ReservationLayout title="예약하기">
        <View style={styles.content}>
          <View style={styles.mapbox}>
            {/*<MultiflexMap />*/}
            <SwunimaruMap />
          </View>
          <View style={styles.seatListBox} />
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
    //gap: 10,
    width: '100%',
    //borderWidth: 1, // 테두리 두께
  },
  mapbox: {
    width: '100%',
    height: '40%',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden', // 이거 빼면 모서리 둥근부분 안보이게 됨!
  },
  seatListBox: {
    width: '100%',
    height: '60%',
    gap: 10,
    flexDirection: 'column', // 세로 정렬 유지
    //alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    //borderColor: '#C86462', // 테두리 색상
    //borderWidth: 1, // 테두리 두께
    backgroundColor: '#fff',
    //backgroundColor: '#C86462',
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
