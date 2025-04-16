import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  status: string;
  borderColor: string;
  textColor: string;
};

const StatusTag = ({status, borderColor, textColor}: Props) => {
  return (
    <View style={[styles.tag, {borderColor}]}>
      <Text style={[styles.tagtext, {color: textColor}]}>{status}</Text>
    </View>
  );
};

export default StatusTag;

const styles = StyleSheet.create({
  tag: {
    width: 80,
    height: 27,
    borderRadius: 30,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tagtext: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
