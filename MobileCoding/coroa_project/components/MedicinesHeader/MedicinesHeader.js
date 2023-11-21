import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


export function MedicinesHeader(props) {
    return(
    <View style={styles.container}>
        <View style={styles.alignItemsCenter}>
            <Text style={styles.text}>Vamos agendar os horários de todos os seus remédios?</Text>
        </View>     
        <View style={styles.alignItemsCenter}>
            <Text style={styles.subText}>É para não se esquecer!</Text>
        </View>
        <TouchableOpacity style={styles.containerTextButton} onPress={props.func}>
            <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    alignItemsCenter:{
        alignItems: 'center'
    },
    text: {
        marginTop: '5%',
        fontSize: 24,
        textAlign: 'center',
        width: '70%',
        fontFamily: 'serif',
        fontWeight: '700'
    },
    subText: {
        fontSize: 18,
        fontFamily: 'serif',
        marginTop: '3%'
    },
    containerTextButton: {
        display: 'flex',
        backgroundColor: '#f0f0f0',
        marginLeft: 20,
        marginTop: 30,
        width: '13%',
        height: '20%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems:'center',
    },
    textButton: {
        color: '#741B47',
        fontSize: 23,
    },
    })