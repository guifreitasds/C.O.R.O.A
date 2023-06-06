
import { StyleSheet, Text, View} from 'react-native';

export function TextAndSubText(props) {
  return(
    <View>
        <Text style={styles.textMain}>{props.text}<Text style={{color: '#741B47'}}>{props.textSpan}</Text></Text>
        <Text style={styles.subTextMain}>{props.subText}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    textMain:{
        fontFamily: 'serif',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTextMain:{
        marginTop: '10%',
        fontSize: 16,
        marginLeft: '2%',
        textAlign: 'center',
    }
})