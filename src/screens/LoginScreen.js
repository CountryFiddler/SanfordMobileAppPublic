import * as firebase from 'react-native-firebase';
//import FireAuth from 'react-native-firebase-auth';
import React, {Component, useEffect, useState} from 'react';
import {BackHandler, Button, SafeAreaView, TextInput, View} from 'react-native';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };
  static navigationOptions = {
    headerLeft: null,
  };
  SignIn = () => {
    //console.log(email + ' ' + password);
    //try {
    //firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => console.log(error));
    //firebase.auth().onAuthStateChanged(user => {
    //props.navigation.navigate('Home');
    //});
    // } catch (error) {
    //  console.log(error.toString(error));
    //}
  };

  render() {
    return (
      // Start of the display for adding or editing a customer
      <SafeAreaView>
        <View>
          <TextInput
            // Text Input Box for the customer's first name
            placeholder={'Email'}
            value={this.state.email}
            // Displays the value that the user is entering into the text input
            // For example, if the typed 'Bob', then 'Bob' is displayed in the
            // Text Input Box
            onChangeText={text =>
              this.setState(prevState => ({
                email: (prevState.email = text),
              }))
            }
          />
          <TextInput
            // Text Input Box for the customer's last name
            placeholder={'Password'}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={text =>
              this.setState(prevState => ({
                password: (prevState.password = text),
              }))
            }
          />
          <Button
            // Submit button, when clicked submits the info entered by
            // the user to the database
            title="Login"
            onPress={this.SignIn}
          />
        </View>
      </SafeAreaView>
    );
    // End of the display for adding or editing a customer
  }
}
export default LoginScreen;
