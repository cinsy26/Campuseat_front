// MultiflexMap.tsx
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import SeatComponent from './SeatComponent';
const seatLayout = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const MultiflexMap = () => {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  // 좌석별 상태 지정 예시 (reserved 제거 → other로 통일)
  const getSeatStatus = (
    seatId: number,
  ): 'available' | 'occupied' | 'selected' | 'other' => {
    if (seatId === selectedSeat) {
      return 'selected';
    }
    if (seatId === 3 || seatId === 8) {
      return 'occupied';
    }
    if (seatId === 6 || seatId === 10) {
      return 'occupied';
    }
    return 'available';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {seatLayout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(seatId => (
            <SeatComponent
              key={seatId}
              seatNumber={seatId}
              building="멀티플렉스 A관"
              location="1층"
              status={getSeatStatus(seatId)}
              onPress={() => setSelectedSeat(seatId)}
              width={50}
              height={30}
            />
          ))}
        </View>
      ))}

      {/* 입구 */}
      <View style={styles.doorContainer}>
        <View style={styles.doorLabelWrapper}>
          <View style={styles.door} />
          <Text style={styles.doorLabel}>출입구</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MultiflexMap;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ddd',
    paddingVertical: 10,
    marginBottom: 4,
    width: '100%',
    borderWidth: 1,
  },
  doorContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  doorLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
  },
  door: {
    width: 10,
    height: 30,
    backgroundColor: 'black',
    marginRight: 6,
  },
  doorLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
});
