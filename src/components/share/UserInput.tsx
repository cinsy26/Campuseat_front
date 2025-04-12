import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  placeholder?: string; // 👉 추가
};

const UserInput = ({
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  placeholder = '입력하세요', // 👉 기본값도 설정 가능
}: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor="#00000080"
      placeholder={placeholder} // 👉 여기도 반영
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 240,
    height: 40,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#C86462',
    fontSize: 16,
    color: '#000000',
    borderRadius: 4,
  },
});

export default UserInput;
