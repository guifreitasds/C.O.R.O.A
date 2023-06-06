import { Text, View, StyleSheet, Image, ScrollView, FlatList, Button } from 'react-native';
import React, { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/styleAbout';

export function AboutScreen() {

  const [data, setData] = useState([
    {
      id: '1',
      text: 'Monitoramento de Saúde em tempo real',
      icon: 'heart-pulse',
    },
    {
      id: '2',
      text: 'Comunicação direta com cuidadores e família',
      icon: 'account-multiple-outline',
    },
    {
      id: '3',
      text: 'Dicas de alimentação personalizadas',
      icon: 'food-apple-outline',
    },
    {
      id: '4',
      text: 'Prontuário Online',
      icon: 'clipboard-outline',
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <MaterialCommunityIcons name={item.icon} size={30} color="#911746" style={{textAlign:'center'}} />
      <Text style={styles.paragraph3}>{item.text}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerBox}>
          <Image style={styles.imgPrin} source={require('../assets/COROA-nofill.png')} />
          <View style={styles.textos}>
            <Text style={styles.paragraph}>
              C.O.R.O.A
            </Text>
            <Text style={styles.subparag}>O aplicativo que cuida de você!</Text>
          </View>
        </View>
        <Text style={styles.welcome}>Seja bem vindo ao COROA!</Text>
        <View style={styles.textos}>
          <Text style={styles.paragraph3}>
            Aqui você cuida da sua saúde atráves de diversas funcionalidades!
          </Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.containerBox2}>
          <Image style={styles.imgPrin2} source={require('../assets/COROA-nofill.png')} />
          <View style={styles.textos}>
            <Text style={styles.paragraph2}>
              C.O.R.O.A
            </Text>
            <Text style={styles.subparag2}>O aplicativo que cuida de você!</Text>
          </View>
          <View style={styles.appButtonContainer}>
            <Button title="Faça seu login!!" />
          </View>
        </View>
        <Text style={styles.subparag}>Todos os direitos Reservados</Text>
      </View>
    </ScrollView>

  );
}
