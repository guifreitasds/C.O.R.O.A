import * as React from 'react';
import { Text, View, StyleSheet,Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import Constants from 'expo-constants';



export default function App() {
  const [textoInput, mudaTexto] = React.useState('')

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
          <TextInput style={styles.cpfTextInp} placeholder='Digite seu CPF' onChangeText={mudaTexto}></TextInput>
        </View>
        <View style={styles.inputpassw}>
          <FontAwesome name='lock' size={20} color="#505050"></FontAwesome>
          <TextInput style={styles.passTextInp} placeholder='Digite sua senha'></TextInput>
        </View>
        <TouchableOpacity style={styles.viewSubText}>
          <Text style={styles.subTextForm}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logButton}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems:'center', marginTop: '5%'}}>
        <Text>Não possui uma conta? 
          <Text style={styles.textRegisterinForm}> Registre-se clicando aqui</Text>
        </Text>
      </View>
      <View style={{marginTop: '5%'}}>
        <Text style={{color: '#a11a4d'}}>Confirme seu CPF: {textoInput}</Text>
      </View>
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
    marginTop: '50%',
    width: 500,
    height: 130,
    backgroundColor: '#FFC9AB',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
    marginTop: '20%',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 7,
    display: 'flex',
    marginTop: '7%',
    backgroundColor: '#741B47',
    width: '40%',
    height: 50,

  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fafafa',
    textAlign: 'center',
  },

  viewSubText: {
    // View do 'Esqueceu a senha?'
  },
  subTextForm: {
    // Text do 'Esqueceu a senha?'
    textAlign: 'right',
    alignItems: 'flex-end',
    color: '#741B47',

  },

  textRegisterinForm: {
    color: '#741B36',
  },
});
