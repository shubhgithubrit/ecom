import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/LoginScreen';
import Signin from '../screens/Signin';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="SplashScreen"  options={{headerShown:false}} component={SplashScreen} />
    <Stack.Screen name="LoginScreen"  options={{headerShown:false}} component={LoginScreen} />
    <Stack.Screen name="Signin"  options={{headerShown:false}} component={Signin} />
   
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})