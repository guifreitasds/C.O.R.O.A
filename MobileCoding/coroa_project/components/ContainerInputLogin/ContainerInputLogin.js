import * as React from 'react';
import { Text, View, StyleSheet,Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export function ContainerInputLogin(props) {

    const [textoLoginInput, mudaTextoLogin] = React.useState('')
    const [mostrarTexto, setMostrarTexto] = React.useState(false);
  
    const handleLoginPress = () => {
      setMostrarTexto(true);
    }
  
    const [textoInput, mudaTexto] = React.useState('')
    return(
    <View style={styles.containerInput}>
        <View style={styles.inputcpf}>
            <FontAwesome name='user' size={20} color="#505050"></FontAwesome>
            <TextInput style={styles.cpfTextInp} placeholder='Digite seu CPF'></TextInput>
        </View>
        <View style={styles.inputpassw}>
            <FontAwesome name='lock' size={20} color="#505050"></FontAwesome>
            <TextInput style={styles.passTextInp} placeholder='Digite sua senha'></TextInput>
        </View>
        <TouchableOpacity style={styles.viewSubText}>
            <Text style={styles.subTextForm}>Esqueceu a senha?</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        marginTop: '20%',
        flexDirection: 'column',
        alignItems: 'center'
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
    viewSubText: {
        // View do 'Esqueceu a senha?'
      },
    subTextForm: {
        // Text do 'Esqueceu a senha?'
        textAlign: 'right',
        alignItems: 'flex-end',
        color: '#741B47',
      },
});

