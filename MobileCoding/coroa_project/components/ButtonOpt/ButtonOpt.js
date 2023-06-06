
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export function ButtonOpt(props) {
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
        shadowColor: '#101010',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.12,
        shadowRadius: 2,
        width: '58.5%'
    },
    img:{
        width: 38,
        height: 38,
        marginRight: 5,
    },
    medicineTouchable:{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20%',
        backgroundColor: '#F6F6F6',
        padding: 15,
        borderRadius: 5,

    },
    text:{
        textAlign:'center',
        color: '#741B47', 
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginTop: '4%',
        marginLeft: '1%',
    },
})