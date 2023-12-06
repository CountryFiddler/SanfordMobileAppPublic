import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import * as firebase from 'react-native-firebase';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
class HomeScreen extends Component {
  SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(function (error) {
      });
  };
  static navigationOptions = {
    headerLeft: null,
  };

  render() {
    return (
      <View style={styles.homePageContainer}>
        <CustomerSearchBar navigation={this.props.navigation} />
        <View style={styles.homePageButtonContainer}>
          <TouchableOpacity
            style={styles.addCustomerButton}
            onPress={() => this.props.navigation.navigate('AddCustomer')}>
            <FontAwesomeIcon icon={faUserPlus} size={33}/>
            <Text style={styles.textStyle}>Add Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signOutButton} onPress={this.SignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} size={33} />
            <Text style={styles.textStyle}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
// End of Home Screen Display

// Start of StylingSheet
const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  homePageContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  homePageButtonContainer: {
    marginBottom: '10%',
    borderTopWidth: 3,
    borderTopColor: '#26660b',
    flexDirection: 'row',
    width: '100%',
  },
  testContainer: {
    flexDirection: 'row',
    width: 300,
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
  },
  signOutButton: {
    marginTop: '5%',
    alignItems: 'center',
    marginLeft: '47%',
  },
  addCustomerButton: {
    marginTop: '5%',
    alignItems: 'center',
    marginLeft: '5%',
    color: '#26660b',
  },
  footerStyles: {
    marginTop: '50%',
    borderColor: 'black',
    borderWidth: 3,
    height: 100,
    width: '100%',
    backgroundColor: 'green',
  },
});

export default HomeScreen;
