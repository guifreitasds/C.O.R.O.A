import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign: 'center',
        backgroundColor: '#FFC9AB'
    },
    header:{
        justifyContent: 'center',
        alignItems:'center',
        
    },
    containerTextMain:{
        alignItems: 'center',
    },
    titleHelp:{
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleSupport: {
        fontSize:16,
        marginTop: '3%'
    },
    containerInput:{
        marginTop: '3%',
        alignItems: 'center',
    },
    inputHelp:{
        backgroundColor: '#f0f0f0',
        paddingLeft: 10,
        width: 200,
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5
    },
    containerHelpButtons: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
}) 
export default styles;