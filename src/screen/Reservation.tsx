import React, {useState, useEffect, useCallback} from 'react';
import {View, /*Text,*/ StyleSheet, ScrollView} from 'react-native';
import SafeContainer from './SafeContainer';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import type {RootStackParamList} from '../navigator/types';
//import ChoosePlace from '../components/reservation/ChoosePlace';
import ReservationLayout from '../components/reservation/Layout';
import MultiflexMap from '../components/reservation/seatMap/Multiflex';
import SwunimaruMap from '../components/reservation/seatMap/Swunimaru';
import ChooseSeat from '../components/reservation/ChooseSeat';
import {fetchSeatByPlace, SeatInfo} from '../api/reservation';
export default function Reservation() {
  const route = useRoute<RouteProp<RootStackParamList, 'Reservation'>>();
  const {placeId} = route.params;

  const [seatList, setSeatList] = useState<SeatInfo[]>([]);

  /*
  useEffect(() => {
    const loadSeats = async () => {
      try {
        const data = await fetchSeatByPlace(placeId);
        setSeatList(data);
      } catch (error) {
        console.error('좌석 정보 불러오기 실패:', error);
      }
    };
    loadSeats();
  }, [placeId]);
  */

  const loadSeats = useCallback(async () => {
    try {
      const data = await fetchSeatByPlace(placeId);
      setSeatList(data);
    } catch (error) {
      console.error('좌석 정보 불러오기 실패:', error);
    }
  }, [placeId]); // 👈 placeId가 바뀔 때만 새 함수 생성

  useEffect(() => {
    loadSeats();
  }, [loadSeats]); // ✅ 이제 ESLint 에러 안남

  return (
    <SafeContainer>
      <ReservationLayout title="좌석 예약하기 - 슈니마루">
        <View style={styles.content}>
          <View style={styles.mapbox}>
            {placeId === 1 && <SwunimaruMap />}
            {placeId === 3 && <MultiflexMap />}
          </View>
          <ScrollView
            style={styles.seatListBox}
            contentContainerStyle={styles.seatListContent}>
            {seatList.map(seat => (
              <ChooseSeat
                key={seat.id}
                place={seat.placeName}
                location={seat.buildingName}
                seatName={seat.name}
                seatStatus={seat.status}
                seatId={seat.id}
                refreshSeats={loadSeats} // 👈 추가
              />
            ))}
          </ScrollView>
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
  mapbox: {
    width: '100%',
    height: '40%',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden', // 이거 빼면 모서리 둥근부분 안보이게 됨!
  },
  seatListBox: {
    /*
    //paddingTop: 20, // ✅ 위쪽 간격
    flexDirection: 'column', // 세로 정렬 유지
    //alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#fff',*/

    width: '100%',
    height: '60%',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  seatListContent: {
    padding: 10,
    paddingTop: 10,
    gap: 10,
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
