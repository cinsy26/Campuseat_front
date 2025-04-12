// SafeContainer.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // 원하는 배경색
  },
  content: {
    flex: 1,
    justifyContent: 'center', // 세로 가운데 정렬
    alignItems: 'center', // 가로 가운데 정렬
    paddingHorizontal: 16,
  },
});

export default SafeContainer;
