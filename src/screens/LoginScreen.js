import {StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity} from 'react-native';
import React ,{useState}from 'react';
import CustomTextInput from '../components/CustomTextInput';
import logo from '../assets/playstore.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.jpg';
import CustomButton from '../components/CustomButton';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bademail, setBademail] = useState(false);
  const [badpassword, setBadpassword] = useState(false);
  const validation = () => {
    console.log('EMpty Email')
    if (email == '') {
        console.log('EMpty Email')
      setBademail(true);
    }
    else{
      setBademail(false);
    }
      if (password == '') {
        console.log('EMpty password')
      setBadpassword(true);
    }
    else{
      setBadpassword(false);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.loginlogo} />
      <Text style={styles.loginText}>Login</Text>
      <CustomTextInput placeholder={'Enter your Email'} icon={mail}
      value={email}
      onChangeText={txt=>{setEmail(txt)}} />
      {
        bademail ===true &&(<Text style={{color:'red',marginTop:10,alignSelf:'center'}}>Please Enter Email id</Text>)
      }
      <CustomTextInput
        placeholder={'Enter your Password'}
        icon={lock}
        type={'password'}
        value={password}
        onChangeText={txt=>{setPassword(txt)}}
      />
       {
        badpassword === true &&(<Text style={{color:'red',marginTop:10,alignSelf:'center'}}>Please Enter Your Password</Text>
        )
      }
      <CustomButton
        onPress={() => validation()}
        textColor={'black'}
        title={'login'}
        bgColor={'#F7BC12'}
      />
     
          <Text
        style={styles.txtColor}
        onPress={() => navigation.navigate('Signin')}>
        Create New Account
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  loginlogo: {
    height: 100,
    width: 200,
    borderRadius: 60,
    marginTop: 50,
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  txtColor: {
    color: 'black',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});
