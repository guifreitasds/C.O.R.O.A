import {Text, View, ScrollView, TextInput } from 'react-native';
import { CoroaImgText } from '../components/CoroaImgText/CoroaImgText';
import { HelpButton } from '../components/HelpButton/HelpButton';
import styles from '../styles/styleHelp';

export function HelpScreen({ navigation }) {
  return(
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CoroaImgText></CoroaImgText>
      </View>
      <View style={styles.containerTextMain}>
        <Text style={styles.titleHelp}>Página de Ajuda</Text>
        <Text style={styles.titleSupport}>Como podemos lhe ajudar?</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput placeholder='Qual a sua dúvida?' style={styles.inputHelp}></TextInput>
      </View>
      <View style={styles.containerHelpButtons}>
        <HelpButton title='Fazer Login' source={require('../assets/login.png')} func={()=>navigation.navigate('Login')}/>
      </View>
      <View style={styles.containerHelpButtons}>
        <HelpButton title='Segurança' source={require('../assets/security.png')}/>
        <HelpButton title='Assinatura' source={require('../assets/coin.png')}/>
      </View>
      <View style={styles.containerHelpButtons}>
        <HelpButton title='Perguntas Frequentes' source={require('../assets/conversation.png')}/>
        <HelpButton title='Resolução Problemas' source={require('../assets/search.png')}/>
      </View>
      <View style={styles.containerHelpButtons}>
        <HelpButton title='Dados da Conta' source={require('../assets/badge.png')} func={()=>navigation.navigate('Profile')}/>
        <HelpButton title='Sobre o C.O.R.O.A' source={require('../assets/crown.png')} func={()=>navigation.navigate('About')}/>
      </View>
    </ScrollView>
  );
}
