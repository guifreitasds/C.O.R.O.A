
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export function CoroaImgText({props}) {
  return(
    <View style={styles.containerImgText}>
        <Image style={styles.imageCoroa} source={require('../../assets/COROA-nofill.png')}></Image>
        <Text style={styles.titleHeader}>C.O.R.O.A</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    titleHeader:{
        marginLeft: -10,
        marginTop: '7.5%', 
        fontSize: 24,
        fontFamily: 'serif',
        color: '#741B47',
        fontWeight: '600'
      },
    containerImgText:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingRight: 20
    },
    imageCoroa:{
      width: 100,
      height: 100,
      marginLeft: -15,
    },
})