import { StyleSheet, Text, View,Image,TextInput} from 'react-native'
import React,{useState} from 'react'

const CustomTextInput = ({placeholder,icon,value,onChangeText,type,keyboardType}) => {
  return (
    <View style={{
        width:'85%',
        height:50,
        borderWidth:1.5,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        flexDirection:'row'
    }}>
        <Image
        source={icon}
        style={styles.style1}
        />
        <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={txt=>{onChangeText(txt)}}
        secureTextEntry={type=='password'?true:false}
        keyboardType={keyboardType?keyboardType:'default'}
        />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
style1:{
    height:30,
    width:50,
    borderRadius:60
}
})