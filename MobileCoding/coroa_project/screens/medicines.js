import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { CoroaImgText } from '../components/CoroaImgText/CoroaImgText';
import styles from '../styles/styleMedicines';
import React, {useState, useEffect} from 'react'
import { MedicinesList } from '../components/MedicineList/MedicinesList';
import { MedicinesHeader } from '../components/MedicinesHeader/MedicinesHeader';

// const data = [
//   {key: 1, name: 'Dipirona', hour: '11:00', source: require('../assets/dipirona.jpg')},
//   {key: 2, name: 'Paracetamol', hour: '14:00', source: require('../assets/paracetamol.webp')},
//   {key: 3, name: 'Amoxicilina', hour: '13:00', source: require('../assets/amoxicilina.jpg')},
//   {key: 4, name: 'Genérico 4', hour: '12:00', source: require('../assets/generico.jpeg')}
// ]

export function MedicinesScreen({route, navigation}) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.104:5000/get', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(medicine => {
      setData(medicine)
    })
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.alignItemsCenter}> 
        <CoroaImgText/>
      </View>   
      <MedicinesHeader func={()=>{
        navigation.navigate('Remédio')
      }}/>
      <View style={styles.containerMedicines}>
        <View style={styles.titletoMedicines}>
          <Text style={{color: '#f0f0f0', fontSize: 22, fontFamily: 'serif', fontWeight: 'bold'}}>Remédios Cadastrados</Text>
        </View>
        <FlatList 
        data={data}
        renderItem={({item} ) =>(
          <View style={styles.containerMed}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.hour}>Descrição: {item.description}</Text>
          </View>
        )}
        keyExtractor={item => `${item.id}`}
        style={styles.containerFlat}/>
      </View>
    </View>
  );
}


