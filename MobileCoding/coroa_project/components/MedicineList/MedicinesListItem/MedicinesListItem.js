import { StyleSheet, View, Text, Image } from "react-native";

export function MedicinesListItem(props) {

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: 450,
        backgroundColor: '#741B47',
        height: 180,
    },
    image: {
        backgroundColor: 'pink',
        height: 50,
        width: 50,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 3,
        color: '#f0f0f0'
    },
    hour: {
        fontSize: 16,
        color: '#e0e0e0',
    }
})