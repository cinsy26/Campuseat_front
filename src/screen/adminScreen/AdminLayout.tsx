// AdminLayout.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeContainer from '../SafeContainer';

export default function AdminLayout({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <SafeContainer>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.topcontainer} />
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line} />
          </View>
          {children}
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    //padding: 16,
    //borderWidth: 1,
  },
  topcontainer: {
    width: '100%',
    height: '5%',
  },
  titlecontainer: {
    width: '100%',

    //height: '100%',
    //borderWidth: 1,
    //borderColor: 'black',
  },
  line: {
    width: '90%',
    height: 2,
    backgroundColor: '#C86462',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    //marginBottom: 12,
    paddingLeft: 20,
  },
});
