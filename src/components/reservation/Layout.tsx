import React, {Children} from 'react';
//import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getSeatColor} from '../../util/color';
import PreviousIcon from '../../assets/icon/User/Left';
const ReservationLayout = ({title, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        {/* <PreviousIcon width={24} height={24} /> */}

        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default ReservationLayout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 10,
    backgroundColor: '#C86462',
    // borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderWidth: 1, // 테두리 두께
  },
});
