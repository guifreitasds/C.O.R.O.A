import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput } from 'react-native';
import { CoroaImgText } from '../components/CoroaImgText/CoroaImgText';
import { TextAndSubText } from '../components/TextAndSubText/TextAndSubText';
import { ButtonOpt } from '../components/ButtonOpt/ButtonOpt'

export function TestScreen({ navigation }) {
  return(
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CoroaImgText></CoroaImgText>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.chatWithCaregiver}>
          <View style={styles.containerInput}>
            <TextInput placeholder='Digite uma mensagem'/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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
    marginTop: '5%',
  },
  subContainer:{
    alignItems: 'center',
    marginBottom: '5%'
  },
  chatWithCaregiver: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#741B47',
    alignItems: 'center',
    width: '90%',
    height: 800,
  },
  containerInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: '80%',
    marginRight: '15%'
  }
})