import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert,} from 'react-native';
import { addUser } from '../navigation/UserDBConnection';
import { CreateUserInput, UserType } from '../../API';

//REMOVE - once system is finished. It is only for our use 


const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const clearFields = () => {
    // Clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  const handleSignUp = async () => {
        try{
          const signUpResponse = await Auth.signUp({username: email, password, attributes: {
                'custom:firstName': firstName, 'custom:lastName': lastName, email: email}});

                console.log('Sign-up pressed:', { firstName, lastName, email, password });
                console.log('User signed up, verification needed!');

                const userId = signUpResponse.userSub;


                const userToAdd: CreateUserInput = {
                  id: userId,
                  firstname: firstName,
                  lastname: lastName,
                  userType: UserType.NORMAL, // Assuming UserType is an enum
                  email: email
                };
          
                await addUser(userToAdd);

                Alert.alert('Success', 'Sign-up successful, please verify account in Amplify', [{ text: 'OK', onPress: clearFields }]);
        } catch (error){
                console.error('Error signing up: ', error);
        }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creat an account for People House</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType='email-address'
        autoCapitalize='none'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default SignUpScreen;
