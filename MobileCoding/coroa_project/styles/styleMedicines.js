import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
      display: 'flex',
      backgroundColor: '#FFC9AB',
      justifyContent: 'center'
    },
    titletoMedicines:{
      alignItems: 'center',
      backgroundColor: '#521332',
      padding: 20,
      width: '89.9%',
      marginLeft: 20,
      borderTopStartRadius:5,
      borderTopEndRadius: 5,
    },
    containerMedicines:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    containerFlat: {
      marginLeft: '4%',
      height: 400,
    },
    containerMed:{
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      width: 450,
      backgroundColor: '#741B47',
      height: 180,
    },
    image: {
      backgroundColor: 'pink',
      height: 50,
      width: 50,
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    name: {
      fontSize: 24,
      fontWeight: "600",
      marginBottom: 3,
      color: '#f0f0f0'
    },
    hour: {
      fontSize: 16,
      color: '#e0e0e0',
    }
  });

export default styles;