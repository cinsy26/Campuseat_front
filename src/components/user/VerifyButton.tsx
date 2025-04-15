import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

const VerifyButton = ({label, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
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
});

export default VerifyButton;
