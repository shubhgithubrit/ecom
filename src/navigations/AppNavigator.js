import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/LoginScreen';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="SplashScreen"  options={{headerShown:false}} component={SplashScreen} />
    <Stack.Screen name="LoginScreen"  options={{headerShown:false}} component={LoginScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})