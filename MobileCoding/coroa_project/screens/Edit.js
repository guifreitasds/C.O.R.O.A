import { Text, View, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export function EditScreen({ navigation, props, route }) {


    const data = route.params.data
    const [title, setTitle] = useState(data.title)
    const [description, setDesc] = useState(data.description)


    const updateData = () => {
        fetch(`http://192.168.1.104:5000/update/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description })
        })
            .then(resp => resp.json())
            .then(data => {
                navigation.navigate('Medicines', {data:data})
            })
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicione seu remédio</Text>
            <TextInput style={styles.inputTitle}
                label="Titulo"
                value={title}
                mode="outlined"
                onChangeText={text => setTitle(text)}
            />
            <TextInput style={styles.inputTitle}
                label="Descrição"
                value={description}
                mode="outlined"
                multiline
                numberOfLines={10}
                onChangeText={desc => setDesc(desc)}
            />
            <Button
                style={{ margin: 10 }}
                title='Editar'
                mode='contained'
                onPress={() => updateData()}
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
    }
})
