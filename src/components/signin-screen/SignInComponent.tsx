import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import { createNavigationContainerRef, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack'
import HomeScreen from '../../screens/HomeScreen';
import AuthStackNavigator from '../navigation/AuthNavigator';
import InfoScreen from '../../screens/InfoScreen';




const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation<any>();
  const navigationRef = createNavigationContainerRef();
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  async function currentAuthenticatedUser(){
    try{
        const user = await Auth.currentAuthenticatedUser({
            bypassCache: false
        });
        console.log('Successful login! ', user.attributes);
    } catch (error){
        console.log(error);
    }
  }
 
  

  const handleLogin = async() => {
    try{
        await Auth.signIn(email, password);
        console.log('Login pressed:', { email, password });
        currentAuthenticatedUser();
        
          navigation.navigate('InfoScreen');

    } catch(error){
        console.error('Error signing in:', error);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Who are you?</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your email address"
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Password</Text>
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.passwordTextInput}
            placeholder="Please enter your password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  passwordTextInput: {
    flex: 1,
    height: 40,
  },
});

export default LoginScreen;
