import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import logo from '../assets/playstore.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.jpg';
import phone from '../assets/phone.png';
import CustomButton from '../components/CustomButton';
import user from '../assets/user.jpg';
const Signin = ({navigation}) => {
  const [name, setName] = useState('');
  const [badname, setBadName] = useState('');
  const [email, setEmail] = useState('');
  const [bademail, setBadEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [badmobile, setBadMobile] = useState('');
  const [password, setPassword] = useState('');
  const [badpassword, setBadPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badconfirmPassword, setBadConfirmPassword] = useState('');
  const validation = () => {
    if (name == '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (mobile == '') {
      setBadMobile(true);
    } else {
      setBadMobile(false);
    }
    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    if (password !== confirmPassword) {
      setBadConfirmPassword(true);
    } else {
      setBadConfirmPassword(false);
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={logo} style={styles.loginlogo} />
      <Text style={styles.loginText}>Sign-In</Text>
      <CustomTextInput
        placeholder={'Enter your Name'}
        icon={user}
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
      />
      {badname === true && (
        <Text style={{color: 'red', marginTop: 10, alignSelf: 'center'}}>
          Please Enter your name
        </Text>
      )}
      <CustomTextInput
        placeholder={'Enter your Email'}
        icon={mail}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {bademail === true && (
        <Text style={{color: 'red', marginTop: 10, alignSelf: 'center'}}>
          Please Enter Email id
        </Text>
      )}

      <CustomTextInput
        placeholder={'Enter your Phone number'}
        icon={phone}
        value={mobile}
        keyboardType={'number-pad'}
        onChangeText={txt => {
          setMobile(txt);
        }}
      />
      {badmobile === true && (
        <Text style={{color: 'red', marginTop: 10, alignSelf: 'center'}}>
          Please Enter Mobile Number
        </Text>
      )}

      <CustomTextInput
        placeholder={'Enter your Password'}
        icon={lock}
        value={password}
        type={'password'}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badpassword === true && (
        <Text style={{color: 'red', marginTop: 10, alignSelf: 'center'}}>
          Please Enter Password
        </Text>
      )}

      <CustomTextInput
        placeholder={'Confirm Password'}
        icon={lock}
        value={confirmPassword}
        type={'password'}
        onChangeText={txt => {
          setConfirmPassword(txt);
        }}
      />
      {badconfirmPassword === true && (
        <Text style={{color: 'red', marginTop: 10, alignSelf: 'center'}}>
          Dear user your password didnt match
        </Text>
      )}

      <CustomButton
        onPress={() => validation()}
        textColor={'black'}
        title={'Signin'}
        bgColor={'#F7BC12'}
      />
      <Text
        style={styles.txtColor}
        onPress={() => navigation.navigate('LoginScreen')}>
        Already Exsisted
      </Text>
    </ScrollView>
  );
};

export default Signin;

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
