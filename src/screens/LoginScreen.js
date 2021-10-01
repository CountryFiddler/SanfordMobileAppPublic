import * as firebase from 'react-native-firebase';
//import FireAuth from 'react-native-firebase-auth';
import React, {Component, useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {styles} from '../../api/stylesApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheck,
  faIdBadge,
  faTimes,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import Icons from '../components/Icons';

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
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('Login Failed');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => (console.log(error), Alert.alert('Login Failed')));
    }
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
      <SafeAreaView style={styles.screenBackground}>
        <View style={styles.addInfoScreenHeader}>
          <Icons icon={'signIn'} size={'medium'}/>
          <Text style={styles.addInfoScreenTitle}>Login</Text>
        </View>
        <View style={styles.addInfoContainer}>
          <View style={styles.infoChildContainer}>
            <Icons icon={'email'} size={17} style={styles.icons}/>
            <TextInput
              style={styles.infoText}
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
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'password'} size={17} style={styles.icons}/>
            <TextInput
              style={styles.infoText}
              placeholder={'Password'}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text =>
                this.setState(prevState => ({
                  password: (prevState.password = text),
                }))
              }
            />
          </View>
          <View style={styles.addTextFieldDivider} />

          <View style={styles.submitDataButtonContainer}>
            <TouchableOpacity
              onPress={this.SignIn}
            style={styles.loginButtonContainer}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
    // End of the display for adding or editing a customer
  }
}
export default LoginScreen;
