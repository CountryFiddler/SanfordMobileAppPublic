import * as firebase from 'react-native-firebase';
//import FireAuth from 'react-native-firebase-auth';
import React, { useEffect, useState } from "react";
import {Button, SafeAreaView, TextInput, View} from 'react-native';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const SignIn = () => {
    console.log(email + ' ' + password);
    //try {
    //firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate('Home'))
      .catch(error => console.log(error));
    //firebase.auth().onAuthStateChanged(user => {
    //props.navigation.navigate('Home');
    //});
    // } catch (error) {
    //  console.log(error.toString(error));
    //}
  };

  return (
    // Start of the display for adding or editing a customer
    <SafeAreaView>
      <View>
        <TextInput
          // Text Input Box for the customer's first name
          placeholder={'Email'}
          value={email}
          // Displays the value that the user is entering into the text input
          // For example, if the typed 'Bob', then 'Bob' is displayed in the
          // Text Input Box
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          // Text Input Box for the customer's last name
          placeholder={'Password'}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button
          // Submit button, when clicked submits the info entered by
          // the user to the database
          title="Login"
          onPress={SignIn}
        />
      </View>
    </SafeAreaView>
  );
  // End of the display for adding or editing a customer
};
export default LoginScreen;
