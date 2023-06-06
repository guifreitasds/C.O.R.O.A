import * as React from 'react';
import { Text, View, StyleSheet,Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import Constants from 'expo-constants';
import styles from '../styles/styleLogin';
import { HeaderLogin } from '../components/HeaderLogin/HeaderLogin';
import { ContainerInputLogin } from '../components/ContainerInputLogin/ContainerInputLogin';
import { LoginFooter } from '../components/LoginFooter/LoginFooter';



export function LoginScreen() {

  return (
    <View style={styles.container}>
      <HeaderLogin/>
      <ContainerInputLogin/>
      <LoginFooter/>
    </View>
  );
}
