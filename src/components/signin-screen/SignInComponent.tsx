import React, {useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import { useNavigation, CommonActions } from '@react-navigation/native';
import SignInStyles from './SignInStyles';
import { sharedStyles } from '../../../utils/SharedStyles';




const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const clearFields = () => {
    // Clear input fields
    setEmail('');
    setPassword('');
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
  
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            })
          );
          clearFields();
    } catch(error){
        console.error('Error signing in:', error);
    }

  };

  return (
    
    <View style={SignInStyles.container}>
      <Text style={SignInStyles.headerText}>Who are you?</Text>
      <View style={SignInStyles.inputContainer}>
        <Text style={SignInStyles.inputTitle}>Email</Text>
        <TextInput
          style={sharedStyles.input}
          keyboardType='email-address'
          placeholder="Please enter your email address"
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
      </View>
      <View style={SignInStyles.inputContainer}>
        <Text style={SignInStyles.inputTitle}>Password</Text>
        <View style={SignInStyles.passwordInput}>
          <TextInput
            style={SignInStyles.passwordTextInput}
            placeholder="Please enter your password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="gray" style={SignInStyles.eye}/>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogin} style={SignInStyles.loginButton}>
        <Text style={SignInStyles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginScreen;
