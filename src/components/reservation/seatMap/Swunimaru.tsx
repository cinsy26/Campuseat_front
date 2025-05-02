import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SeatComponent from './SeatComponent';

const SwunimaruMap = () => {
  const seatIds = [1, 2, 3, 4];
  const [selectedSeatId, setSelectedSeatId] = useState<number | null>(null);

  return (
    <View style={styles.mapContainer}>
      <View style={styles.row}>
        {seatIds.map((seatId, index) => {
          const isEdge = index === 0 || index === seatIds.length - 1;
          const isSecond = index === 1;
          const isSelected = seatId === selectedSeatId;

          return (
            <View
              key={seatId}
              style={[
                styles.boxBase,
                isEdge ? styles.boxWithSideBorders : styles.boxMiddle,
                isSecond && styles.boxSecondWithRightBorder,
              ]}>
              <SeatComponent
                seatNumber={seatId}
                building="A관"
                location="1층"
                status={isSelected ? 'selected' : 'available'}
                width={60}
                height={40}
                onPress={() => setSelectedSeatId(seatId)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SwunimaruMap;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    //borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '60%',
    backgroundColor: '#fff',
    padding: 10,
    //borderWidth: 1,
  },
  boxBase: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxWithSideBorders: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#000',
  },
  boxMiddle: {
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#000',
  },
  boxSecondWithRightBorder: {
    borderRightWidth: 1,
    borderColor: '#000',
  },
});
