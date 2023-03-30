import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,bgColor,textColor,title}) => {
  return (
   <TouchableOpacity
   onPress={()=>onPress()
}
   style={{
    backgroundColor:bgColor,
    justifyContent:'center',
    alignSelf:'center',
    height:50,
    width:250,
    borderRadius:10,
    marginTop:20
   }}
   >
    <Text style={{color:textColor,alignSelf:'center',fontSize:30}}>{title}</Text>
   </TouchableOpacity>
   
   )
}

export default CustomButton

const styles = StyleSheet.create({})