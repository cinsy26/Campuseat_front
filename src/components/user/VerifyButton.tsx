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
    width: 80,
    height: 40,
    backgroundColor: '#C86462',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default VerifyButton;
