import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type LabeledItemProps = {
  label: string;
};

export default function LabeledItem({label}: LabeledItemProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    //flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    //marginBottom: 12,
    //paddingLeft: 20,
  },
});
