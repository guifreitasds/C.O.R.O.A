import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen} from './screens/home'
import { MedicinesScreen } from './screens/medicines';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ProfileScreen } from './screens/profile';
import { HelpScreen } from './screens/help';
import { TestScreen } from './screens/test';
import { LoginScreen } from './screens/login'
import { AboutScreen } from './screens/about';
import { CreateScreen } from './screens/create';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return(
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Medicines') {
          iconName = focused ? 'medkit' : 'medkit-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'people' : 'people-outline';
        } else if (route.name === 'Help'){
          iconName = focused ? 'help' : 'help-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#741B47',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <Tab.Screen name='Home' component={HomeScreen}/>
    <Tab.Screen name='Medicines' component={MedicinesScreen}/>
    <Tab.Screen name='Profile' component={ProfileScreen}/>
    <Tab.Screen name='Help' component={HelpScreen}/>
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='C.O.R.O.A' component={TabNavigation}/>
        <Stack.Screen name='Chat' component={TestScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='About' component={AboutScreen}/>
        <Stack.Screen name='Remédio' component={CreateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
