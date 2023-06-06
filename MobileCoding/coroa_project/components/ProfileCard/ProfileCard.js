import { StyleSheet, View, Text, Image } from "react-native";
import { CaregiverInfo } from "./CaregiverInfo";

export function ProfileCard(props) {
    return(
        <View style={styles.container}>
            <View style={styles.containerHead}>
                <View>
                    <Text style={styles.textSupport}>Seu perfil</Text>
                </View>
                <Image source={require('../../assets/val.png')} style={styles.image}></Image>
                <Text style={styles.textName}>Maria do Carmo</Text>
                <Text style={styles.textAge}>61 Anos</Text>
            </View>
            <CaregiverInfo/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginBottom: '5%'
    },
    containerHead:{
        alignItems: 'center',
        backgroundColor: '#FFC9B8',
        width: '100%',
        padding: '5%',
    },
    textSupport:{
        fontSize: 30,
        fontFamily:'serif',
        fontWeight: 'bold',
        padding: '3%',
        textDecorationLine: 'underline',
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textName: {
        marginTop: '3%',
        fontSize: 28,
        fontFamily: 'serif',
    },
    textAge:{
        marginTop: '3%'
    },
})