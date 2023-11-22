import { Text, View, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export function DetailsScreen({ navigation, props }) {

    const data = props.route.params.data;

    const deleteData = (data) => {
        fetch("http://192.168.1.104:5000/delete/${data.id}", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            props.navigation.navigate('Medicines')
        })
        .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.Main}>
                <Text style={{ fontSize: 25 }}>
                    {data.title}
                </Text >

                <Text
                    style={{ fontSize: 20, marginTop: 10 }}>
                    {data.description}
                </Text>
            </View>
            <View style={styles.buttons}>
                <Button
                    style={{ margin: 10 }}
                    title='Editar'
                    mode='contained'
                    onPress={() => props.navigation.navigate("Editar")}
                ></Button>

                <Button
                    style={{ margin: 10 }}
                    title='Exlcuir'
                    mode='contained'
                    onPress={() => deleteData(data)}
                ></Button>



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#FFC9AB',
        display: 'flex',
        alignItems: 'center',

    },
    Main: {
        margin: 10,
        padding: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: "space-around",
        margin: 15,
        padding: 10
    },
})