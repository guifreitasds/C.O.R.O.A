import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';


export function LoginFooter(props) {
    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.logButton}>
            <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems:'center', marginTop: '5%'}}>
            <Text>Não possui uma conta? 
                <Text style={styles.textRegisterinForm}> Registre-se clicando aqui</Text>
            </Text>
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
    logButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 7,
        display: 'flex',
        marginTop: '7%',
        backgroundColor: '#741B47',
        width: 285,
        height: 50,
      },
    textButton:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fafafa',
        textAlign: 'center',
      },
    textRegisterinForm: {
        color: '#741B36',
      },
});