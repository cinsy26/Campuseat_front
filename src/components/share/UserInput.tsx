import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

type Props = {
  //UserInput 컴포넌트가 받는 값들은 이런 형태여야 한다.
  //?가 붙은 필드는 선택적임!
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  placeholder?: string;
};

const UserInput = ({
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  placeholder = '입력하세요',
}: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor="#00000080"
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#C86462',
    fontSize: 16,
    color: '#000000',
    borderRadius: 4,
  },
});

export default UserInput;
