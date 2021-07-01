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

import {addCustomer, updateCustomer} from '../../api/FirestoreApi';

class AddOrEditCustomer extends Component {
  submitCustomerInfo(navigation, AddScreen, EditScreen) {
    this.state.currentCustomerID =
      this.state.currentCustomerFirstName +
      ' ' +
      this.state.currentCustomerLastName +
      ' ' +
      this.state.currentCustomerAddress;
    if (AddScreen) {
      addCustomer({
        firstName: this.state.currentCustomerFirstName,
        lastName: this.state.currentCustomerLastName,
        address: this.state.currentCustomerAddress,
        id: this.state.currentCustomerID,
      });
      navigation.navigate('Home');
    }
    if (EditScreen) {
      updateCustomer({
        //firstName: this.state.currentCustomerFirstName,
        //lastName: this.state.currentCustomerLastName,
        //address: this.state.currentCustomerAddress,
      });
    }
  }

  findCustomerFirstNamePlaceholder(AddScreen, EditScreen, customerFirstName) {
    if (AddScreen) {
      this.state.customerFirstNamePlaceholder = 'Customer First Name';
    }
    if (EditScreen) {
      this.state.customerFirstNamePlaceholder = customerFirstName;
    }
  }

  findCustomerLastNamePlaceholder(AddScreen, EditScreen, customerLastName) {
    if (AddScreen) {
      this.state.customerLastNamePlaceholder = 'Customer Last Name';
    }
    if (EditScreen) {
      this.state.customerLastNamePlaceholder = customerLastName;
    }
  }

  findCustomerAddressPlaceholder(AddScreen, EditScreen, customerAddress) {
    if (AddScreen) {
      this.state.customerAddressPlaceholder = 'Customer Address';
    }
    if (EditScreen) {
      this.state.customerAddressPlaceholder = customerAddress;
    }
  }

  state = {
    currentCustomerFirstName: null,
    currentCustomerLastName: null,
    currentCustomerAddress: null,
    currentCustomerID: null,
    customerFirstNamePlaceholder: '',
    customerLastNamePlaceholder: '',
    customerAddressPlaceholder: '',
  };

  render() {
    const customerFirstName = this.props.navigation.getParam(
      'customerFirstName',
    );
    const customerLastName = this.props.navigation.getParam('customerLastName');
    const customerAddress = this.props.navigation.getParam('customerAddress');
    const {navigation} = this.props;
    this.findCustomerFirstNamePlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customerFirstName,
    );

    this.findCustomerLastNamePlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customerLastName,
    );

    this.findCustomerAddressPlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customerAddress,
    );
    return (
      <SafeAreaView>
        <View>
          <TextInput
            placeholder={this.state.customerFirstNamePlaceholder}
            value={this.state.currentCustomerFirstName}
            onChangeText={text =>
              this.setState(prevState => ({
                currentCustomerFirstName: (prevState.currentCustomerFirstName = text),
              }))
            }
          />
          <TextInput
            placeholder={this.state.customerLastNamePlaceholder}
            value={this.state.currentCustomerLastName}
            onChangeText={text =>
              this.setState(prevState => ({
                currentCustomerLastName: (prevState.currentCustomerLastName = text),
              }))
            }
          />
          <TextInput
            placeholder={this.state.customerAddressPlaceholder}
            value={this.state.currentCustomerAddress}
            onChangeText={text =>
              this.setState(prevState => ({
                currentCustomerAddress: (prevState.currentCustomerAddress = text),
              }))
            }
          />
          <Button
            title="Submit"
            onPress={() =>
              this.submitCustomerInfo(
                navigation,
                this.props.AddScreen,
                this.props.EditScreen,
              )
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default AddOrEditCustomer;
