import { StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import React from 'react'
import CustomTextInput from '../components/CustomTextInput'
import logo from '../assets/playstore.png'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Image 
        source={logo}
        style={styles.loginlogo}
        />
        <Text style={styles.loginText}>Login</Text>
       <CustomTextInput
       placeholder={"Enter your Email"}
       icon={logo}
       />
        <CustomTextInput
       placeholder={"Enter your Password"}
       icon={logo}
       />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    loginlogo:{
        height:100,
        width:200,
        borderRadius:60,
        marginTop:50,
        alignSelf:'center'
    },
    loginText:{
        fontSize:25,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'black',
        alignSelf:'center'
    }
})