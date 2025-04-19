import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean; // ✅ 추가
};

const VerifyButton = ({label, onPress, disabled = false}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]} // 비활성 시 스타일 변경
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#C86462',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'normal',
  },
  disabledButton: {
    backgroundColor: '#ccc', // 비활성화 시 연한 회색
  },
  disabledText: {
    color: '#888',
  },
});

export default VerifyButton;
