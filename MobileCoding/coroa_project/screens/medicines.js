import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { CoroaImgText } from '../components/CoroaImgText/CoroaImgText';
import styles from '../styles/styleMedicines';
import React, { useState, useEffect } from 'react'
import { MedicinesHeader } from '../components/MedicinesHeader/MedicinesHeader';

// const data = [
//   {key: 1, name: 'Dipirona', hour: '11:00', source: require('../assets/dipirona.jpg')},
//   {key: 2, name: 'Paracetamol', hour: '14:00', source: require('../assets/paracetamol.webp')},
//   {key: 3, name: 'Amoxicilina', hour: '13:00', source: require('../assets/amoxicilina.jpg')},
//   {key: 4, name: 'Genérico 4', hour: '12:00', source: require('../assets/generico.jpeg')}
// ]

export function MedicinesScreen({ route, navigation, props }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const LoadData = () => {
    fetch('http://0.0.0.0:5000/get', {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(medicine => {
        setData(medicine)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    LoadData()
  }, [])

  const clickedItem = (data) => {
    navigation.navigate('Details', { data: data })
  }

  return (
    <View style={styles.container}>
      <View style={styles.alignItemsCenter}>
        <CoroaImgText />
      </View>
      <MedicinesHeader func={() => {
        navigation.navigate('Create')
      }} />
      <View style={styles.containerMedicines}>
        <View style={styles.titletoMedicines}>
          <Text style={{ color: '#f0f0f0', fontSize: 22, fontFamily: 'serif', fontWeight: 'bold' }}>Remédios Cadastrados</Text>
        </View>
        <FlatList
          data={data}
          onRefresh={() => LoadData()}
          refreshing={loading}
          renderItem={({ item }) => (
            <View style={styles.containerMed}>
              <Text style={styles.name} onPress={() => clickedItem(item)}>{item.title}</Text>
              <Text style={styles.hour}>Descrição: {item.description}</Text>
            </View>
          )}
          keyExtractor={item => `${item.id}`}
          style={styles.containerFlat} />
      </View>
    </View>
  );
}


