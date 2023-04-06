import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Image style={styles.imgPrin} />
        <Text style={styles.paragraph}>
          C.O.R.O.A
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#911746'
  },
  imgPrin: {
    width: 100,
    height: 100
  },
});
