import * as firebase from 'react-native-firebase';
import React, {Component} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../api/stylesApi';
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
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('Login Failed');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => (console.log(error), Alert.alert('Login Failed')));
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.screenBackground}>
        <View style={styles.addInfoScreenHeader}>
          <Icons icon={'signIn'} size={'medium'} />
          <Text style={styles.addInfoScreenTitle}>Login</Text>
        </View>
        <View style={styles.addInfoContainer}>
          <View style={styles.infoChildContainer}>
            <Icons icon={'email'} size={17} style={styles.icons} />
            <TextInput
              style={styles.infoText}
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={text =>
                this.setState(prevState => ({
                  email: (prevState.email = text),
                }))
              }
            />
          </View>
          <View style={styles.addTextFieldDivider} />
          <View style={styles.infoChildContainer}>
            <Icons icon={'password'} size={17} style={styles.icons} />
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
  }
}
export default LoginScreen;
