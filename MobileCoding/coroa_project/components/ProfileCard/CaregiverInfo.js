import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export function CaregiverInfo(props) {
    return(
        <View style={styles.container}>
            <View style={styles.containerHead}>
                <View style={styles.containerTitleImg}>
                    <Text style={styles.textSupport}>Informações do cuidador</Text>
                    <Image source={require('../../assets/medico.png')} style={styles.image}></Image>
                </View>
                <View style={styles.containerCareInfo}>
                    <Text style={styles.textName}>Dr. Paulo Silva</Text>
                    <Text style={styles.textAge}>38 Anos - CRM: 000000-1</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonContact}>
                        <Text>Entrar em Contato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text>Novo Cuidador</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: '#741B47',
        width: '80%',
        padding: '5%',
        borderRadius: 10,
    },
    containerHead:{
        alignItems: 'center',
    },
    containerTitleImg:{
        alignItems: 'center',
    },
    containerCareInfo: {
        alignItems: 'center',
    },
    textSupport:{
        fontSize: 23,
        fontFamily:'serif',
        fontWeight: 'bold',
        color: '#f0f0f0'
    },
    image:{
        marginTop: '5%',
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textName: {
        color: '#f0f0f0',
        marginTop: '3%',
        fontSize: 28,
        fontFamily: 'serif',
    },
    textAge:{
        color: '#f0f0f0',
        marginTop: '3%'
    },
    buttonContainer:{
        marginTop: '3%',
        padding: '5%',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonContact:{
        padding: '5%',
        backgroundColor: '#e1e1e1',
        borderRadius: 5,
        marginRight: '2%'
    },
    buttonRegister:{
        alignItems: 'center',
        width: '50%',
        padding: '5%',
        backgroundColor: '#e1e1e1',
        borderRadius: 5,
        marginLeft: '2%'
    },
})