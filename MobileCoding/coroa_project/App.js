import * as React from 'react';
import { Text, View, StyleSheet,Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import Constants from 'expo-constants';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Image style={styles.imgPrin} source={require('./assets/COROA-nofill.png')} />
        <Text style={styles.paragraph}>
          C.O.R.O.A
        </Text>
        <Text style={styles.subparag}>O aplicativo que cuida de você!</Text>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.inputcpf}>
          <FontAwesome name='user' size={20} color="#505050"></FontAwesome>
          <TextInput style={styles.cpfTextInp} placeholder='Digite seu CPF'></TextInput>
        </View>
        <View style={styles.inputpassw}>
          <FontAwesome name='lock' size={20} color="#505050"></FontAwesome>
          <TextInput style={styles.passTextInp} placeholder='Digite sua senha'></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.logButton}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC9AB',
    alignItems: 'center',
  },
  containerBox: {
    marginTop: 200,
    width: 500,
    height: 130,
    backgroundColor: '#FFC9AB',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
    marginTop: 100,
    flexDirection: 'column',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 45,
    fontWeight: '500',
    fontFamily: 'serif',
    color: '#911746'
  },
  subparag: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'serif',
    color: '#911746'
  },
  imgPrin: {
    width: 150,
    height: 150
  },
  inputcpf: {
    flexDirection: 'row',
    borderRadius: 5,
    padding: 13,
    backgroundColor: '#f0f0f0',
    width: 290,
    height: 50,
    borderWidth:1,
    borderColor: '#777'
  },
  inputpassw: {
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 5,
    padding: 14,
    backgroundColor: '#f0f0f0',
    width: 290,
    height: 50,
    borderWidth:1,
    borderColor: '#777'
  },
  cpfTextInp: {
    marginLeft: 10,
    fontSize: 17,
  },
  passTextInp: {
    marginLeft: 10,
    fontSize: 17,
  },
  logButton: {
    borderRadius: 7,
    display: 'flex',
    marginTop: 30,
    backgroundColor: '#741B47',
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fafafa',
    textAlign: 'center',
  },
});
