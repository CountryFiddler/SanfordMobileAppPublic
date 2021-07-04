/**
 * Home Screen
 * 7-1-21
 * The page contains a search bar to search for customers and a link
 * to go to the Add Customers Page. */

// Import Statements
import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {getTimerInfo} from '../../api/TimerApi';
import {getTimers} from '../../api/FirestoreApi';
import TimerSelection from '../components/TimerSelection';

// Start of Home Screen Display
const TimerSelectionScreen = props => {
  /*state = {
    timerList: [],
    bob: [],
  };

  timersRetrieved = retrievedTimerList => {
    /*this.setState(prevState => ({
      timerList: (prevState.timerList = retrievedTimerList),
    }));*/ /*
    this.setState({timerList: retrievedTimerList});
  };
  componentDidMount() {
    getTimers(this.props.navigation.getParam('customer'), this.timersRetrieved);
  }

  //console.log(this.state.timerList.length);
  render() {
    //getTimers(this.props.navigation.getParam('customer'), this.timersRetrieved);
    //console.log(this.state.timerList.length);
    const customer = this.props.navigation.getParam('customer');
    //alert(this.state.timerList[0]);
  */
  const customer = props.navigation.getParam('customer');
  const timers = props.navigation.getParam('timers');
  return (
    <View style={styles.homePageContainer}>
      <TimerSelection
        customer={customer}
        timerList={timers}
        navigation={props.navigation}
      />
      <Button
        onPress={() =>
          props.navigation.navigate('AddTimer', {
            customer: customer,
            navigation: props.navigation,
          })
        }
        title={'Add Timer'}
      />
    </View>
  );
};
// End of Home Screen Display

// Start of StylingSheet
const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  homePageContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    //alignSelf: 'center',
  },
  addCustomerButton: {
    //position: 'absolute',
    marginTop: 50,
  },
});

export default TimerSelectionScreen;
