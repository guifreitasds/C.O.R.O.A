import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFC9AB',
      alignItems: 'center',
    },
    appButtonContainer:{
      background: '#0099FF',
      border: 2,
      borderRadius: 3,
      color: '#FDFDFD',
      marginLeft: 50 
    },
    containerBox: {
      marginTop: '6%',
      marginRight:'11%',
      width: 200,
      height: 130,
      backgroundColor: '#FFC9AB',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerBox2: {
      marginTop: '6%',
      marginRight:'11%',
      width: 200,
      height: 130,
      backgroundColor: '#FFC9AB',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    containerList:{
      backgroundColor:'#911746',
      justifyContent:'flex-start',
    },
    textos:{
        flexDirection:'column',
    },
    
    paragraph: {
      fontSize: 37.5,
      fontWeight: '500',
      fontFamily: 'serif',
      color: '#911746'
    },
    subparag: {
      fontSize: 11,
      fontWeight: '400',
      fontFamily: 'serif',
      color: '#911746'
    },
    paragraph2: {
      fontSize: 18.75,
      fontWeight: '500',
      fontFamily: 'serif',
      color: '#911746'
    },
    subparag2: {
      fontSize: 5.5,
      fontWeight: '400',
      fontFamily: 'serif',
      color: '#911746'
    },
    paragraph3: {
      fontSize: 25.5,
      marginTop: 20,
      marginBottom: 10,
      padding: 10,
      fontWeight: '500',
      fontFamily: 'serif',
      color: '#FFC9AB',
      backgroundColor: '#911746',
      borderRadius: 10,
      justifyContent: 'center',
      textAlign: 'center',
      width: 400,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      },
    shadowOpacity: 0.35,
    elevation: 3,
    },
  
    imgPrin: {
      width: 125,
      height: 125
    },
    imgPrin2:{
      width: 62.5,
      height: 62.5
    },
    welcome:{
      fontSize: 25,
      fontWeight: '500',
      fontFamily: 'serif',
      color: '#911746',
      padding: 10
    }
  });

export default styles;