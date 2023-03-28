import { StyleSheet, Text, View,Image,TextInput} from 'react-native'
import React from 'react'

const CustomTextInput = ({placeholder,icon,value,onChangeText,type}) => {
  return (
    <View style={{
        width:'85%',
        height:50,
        borderWidth:1.5,
        borderRadius:10,
        alignSelf:'center',
        marginTop:10,
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
        onChangeText={onChangeText}
        />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
style1:{
    height:30,
    width:40,
    borderRadius:60
}
})