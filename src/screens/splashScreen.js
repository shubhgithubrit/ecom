import { StyleSheet,View ,Image,Platform} from 'react-native'
import React, { useEffect } from 'react'
import logo from '../assets/playstore.png'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
  setTimeout(()=>{
navigation.navigate("LoginScreen")
  },3000)
  },[])
  return (
    <View style={{flex:1}}>
    <Image
    source={logo}
    style={styles.splashStyle}
    />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    splashStyle:{
      marginTop: Platform.OS === 'android' ? 200 : 100,
        height:200,
        width:300,
        marginLeft:50
    }
})