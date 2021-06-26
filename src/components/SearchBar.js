import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  render,
  FlatList,
  ListRenderItem,
  Button,
} from "react-native";
import {getCustomers} from '../../api/FirestoreApi';
import DropDownSearch from './DropDownSearch';

class CustomerSearchBar extends Component {
  state = {
    customersList: [],
    customerAddressesList: [],
    filteredCustomers: [],
    searching: false,
  };

  customersRetrieved = customerNamesList => {
    this.setState(prevState => ({
      customersList: (prevState.customersList = customerNamesList),
    }));
  };

  componentDidMount() {
    getCustomers(this.customersRetrieved);
  }

  searchUser(textToSearch) {
    if (textToSearch) {
      this.setState({searching: true});
      this.setState({
        filteredCustomers: this.state.customersList.filter(customer =>
          customer.searchText
            .toLowerCase()
            .includes(textToSearch.toLowerCase()),
        ),
      });
    } else {
      this.setState({searching: false});
    }
  }
  render() {
    //const {navigation} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Search Customer"
          placeholderTextColor="white"
          onChangeText={text => {
            this.searchUser(text);
          }}
        />
        {this.state.searching && (
          <DropDownSearch
            customerList={this.state.filteredCustomers}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    //alignItems: 'center',
    marginTop: '20%',
    flex: 1,
  },
  textInput: {
    alignSelf: 'center',
    backgroundColor: '#BFBFBF',
    width: '85%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

export default CustomerSearchBar;
