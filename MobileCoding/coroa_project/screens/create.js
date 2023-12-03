import { Text, View, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export function CreateScreen({ navigation, props }) {

    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')

    const insertData = () => {
        fetch("http://192.168.1.104:5000/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description })
        })
            .then(resp => resp.json())
            .then(data => {
                navigation.navigate('Medicines')
            })
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicione seu remédio</Text>
            <TextInput style={styles.inputTitle}
                label="Titulo"
                value={title}
                placeholder='Remédio'
                onChangeText={text => setTitle(text)}
            />
            <TextInput style={styles.inputTitle}
                label="Descrição"
                value={description}
                multiline
                placeholder='Descrição'
                onChangeText={desc => setDesc(desc)}
            />
            <Button
                style={{ margin: 10 }}
                title='Adicionar'
                mode='contained'
                onPress={() => insertData()}
            ></Button>
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
    title: {
        fontSize: 26,
        fontWeight: "bold"
    },
    inputTitle: {
        backgroundColor: '#f0f0f0',
        width: 300,
        height: 50,
        margin: 20,
        padding: 10
    }
})
