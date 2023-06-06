import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';


export function HeaderLogin(props) {
    return(    
        <View style={styles.containerBox}>
            <Image style={styles.imgPrin} source={require('../../assets/COROA-nofill.png')} />
            <Text style={styles.paragraph}>
            C.O.R.O.A
            </Text>
            <Text style={styles.subparag}>O aplicativo que cuida de você!</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    containerBox: {
        marginTop: '40%',
        width: 500,
        height: 130,
        backgroundColor: '#FFC9AB',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
    imgPrin: {
        width: 150,
        height: 150
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
})