import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

type Props = {
  label1: string;
  label2: string;

  onPress1: () => void;
  onPress2: () => void;
};

const HomeButton = ({label1, label2, onPress1, onPress2}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress1}>
        <Text style={styles.text}>{label1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPress2}>
        <Text style={styles.text}>{label2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // ← 가로 배치
    gap: 30, // RN 0.71 이상에서 지원. 안 되면 아래 marginRight 참고
    justifyContent: 'center', // 가운데 정렬

    //borderWidth: 1, // 테두리 두께
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeButton;
