import {
  StyleSheet,
  Button,
  View,
  Text,
  SafeAreaView,
  TextInput,
  render,
} from 'react-native';
import React, {Component} from 'react';

import {addCustomer} from '../../api/FirestoreApi';

class AddCustomerScreen extends Component {
  submitCustomerInfo(navigation) {
    addCustomer({
      name: this.state.currentCustomerName,
      address: this.state.currentCustomerAddress,
    });
    navigation.navigate('Home');
  }

  state = {
    currentCustomerName: null,
    currentCustomerAddress: null,
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View>
          <TextInput
            placeholder="Customer Name"
            value={this.state.currentCustomerName}
            onChangeText={text =>
              this.setState(prevState => ({
                currentCustomerName: (prevState.currentCustomerName = text),
              }))
            }
          />
          <TextInput
            placeholder="Customer Address"
            value={this.state.currentCustomerAddress}
            onChangeText={text =>
              this.setState(prevState => ({
                currentCustomerAddress: (prevState.currentCustomerAddress = text),
              }))
            }
          />
          <Button
            title="Submit"
            onPress={() => this.submitCustomerInfo(navigation)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default AddCustomerScreen;
