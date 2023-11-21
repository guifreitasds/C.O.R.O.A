import {Text, View, ScrollView, TextInput, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

export function CreateScreen({ navigation }) {
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicione seu remédio</Text>
            <TextInput style={styles.inputTitle}
                label="Titulo"
                value={title}
                mode="outlined"
                onChangeText={text => setTitle(text)}
            />
            <TextInput style={{margin: 10}}
                label="Descrição"
                value={description}
                mode="outlined"
                multiline
                numberOfLines={10}
                onChangeText={desc => setDesc(desc)}
            />
            <Button
                title='Adicionar'
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
        backgroundColor:'#f0f0f0', 
        width: 300,
        height: 50,
        margin: 20,
    }
})
