import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

interface SeatProps {
  width?: number;
  height?: number;
  status: 'available' | 'occupied' | 'selected' | 'other';
  building: string;
  location: string;
  seatNumber: number;
  onPress?: () => void;
}

const SeatComponent = ({
  width = 50,
  height = 30,
  status,
  building,
  location,
  seatNumber,
  onPress,
}: SeatProps) => {
  const getBackgroundColor = () => {
    switch (status) {
      case 'available':
        return '#6B8E4E'; // 사용 가능
      case 'occupied':
        return '#C86462'; // 사용 중
      case 'selected':
        return '#7CAFC2'; // 내가 선택함
      case 'other':
        return '#AFAFAF'; // 기타 (예약 등)
      default:
        return '#AFAFAF';
    }
  };

  const isDisabled = status === 'occupied' || status === 'other';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1} // 터치 시 투명도 변화 제거
      disabled={isDisabled}
      style={[
        styles.seat,
        {
          width,
          height,
          backgroundColor: getBackgroundColor(),
          opacity: isDisabled ? 0.8 : 1,
        },
      ]}>
      <Text style={styles.seatNumberText}>{seatNumber}</Text>
    </TouchableOpacity>
  );
};

export default SeatComponent;

const styles = StyleSheet.create({
  seat: {
    borderWidth: 1,
    margin: 4,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
