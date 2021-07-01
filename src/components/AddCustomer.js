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
  submitCustomerInfo(navigation, AddScreen, EditScreen, customer) {
    this.checkForNullTextEntries(customer);
    if (AddScreen) {
      addCustomer({
        firstName: this.state.currentCustomerFirstName,
        lastName: this.state.currentCustomerLastName,
        address: this.state.currentCustomerAddress,
        //id: this.state.currentCustomerID,
      });
      navigation.navigate('Home');
    }
    if (EditScreen) {
      this.state.currentCustomerID = customer.id;
      console.log(customer.id);
      customer.firstName = this.state.currentCustomerFirstName;
      customer.lastName = this.state.currentCustomerLastName;
      customer.address = this.state.currentCustomerAddress;
      customer.searchText =
        this.state.currentCustomerFirstName +
        ' ' +
        this.state.currentCustomerLastName +
        '\n' +
        this.state.currentCustomerAddress;
      updateCustomer(
        customer,
        navigation.navigate('Customer',{customer: customer}),
      );
    }
  }

  checkForNullTextEntries(customer) {
    if (this.state.currentCustomerFirstName == null) {
      this.state.currentCustomerFirstName = customer.firstName;
    }
    if (this.state.currentCustomerLastName == null) {
      this.state.currentCustomerLastName = customer.lastName;
    }
    if (this.state.currentCustomerAddress == null) {
      this.state.currentCustomerAddress = customer.address;
    }
  }
  findCustomerFirstNamePlaceholder(AddScreen, EditScreen, customer) {
    if (AddScreen) {
      this.state.customerFirstNamePlaceholder = 'Customer First Name';
    }
    if (EditScreen) {
      this.state.customerFirstNamePlaceholder = customer.firstName;
    }
  }

  findCustomerLastNamePlaceholder(AddScreen, EditScreen, customer) {
    if (AddScreen) {
      this.state.customerLastNamePlaceholder = 'Customer Last Name';
    }
    if (EditScreen) {
      this.state.customerLastNamePlaceholder = customer.lastName;
    }
  }

  findCustomerAddressPlaceholder(AddScreen, EditScreen, customer) {
    if (AddScreen) {
      this.state.customerAddressPlaceholder = 'Customer Address';
    }
    if (EditScreen) {
      this.state.customerAddressPlaceholder = customer.address;
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
    const customer = this.props.navigation.getParam('customer');
    /*this.state.currentCustomerFirstName = customer.firstName;
    this.state.currentCustomerLastName = customer.lastName;
    this.state.currentCustomerAddress = customer.address;*/
    const {navigation} = this.props;
    this.findCustomerFirstNamePlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customer,
    );

    this.findCustomerLastNamePlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customer,
    );

    this.findCustomerAddressPlaceholder(
      this.props.AddScreen,
      this.props.EditScreen,
      customer,
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
                customer,
              )
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default AddOrEditCustomer;
