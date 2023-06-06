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
        <TouchableOpacity style={styles.containerTextButton}>
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
        backgroundColor: '#f0f0f0',
        marginLeft: 20,
        marginTop: 20,
        width: '20%',
        height: '15%',
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: '3%'
    },
    textButton: {
        color: '#741B47',
        fontSize: 23,
    },
    })