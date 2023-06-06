
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export function HelpButton(props) {
  return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.medicineTouchable} onPress={props.func}>
            <Image style={styles.img} source={props.source}></Image>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        shadowColor: '#101010',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.12,
        shadowRadius: 2,
    },
    img:{
        width: 38,
        height: 38,
        marginRight: 5,
    },
    medicineTouchable:{
        margin: 20,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '15%',
        backgroundColor: '#741B47',
        padding: 15,
        borderRadius: 5,

    },
    text:{
        textAlign:'center',
        color: '#f0f0f0', 
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginTop: '4%',
        marginLeft: '1%',
    },
})