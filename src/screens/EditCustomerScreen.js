import React, {useState} from 'react';
import {View} from 'react-native';
import EditCustomer from '../components/EditCustomer';
import { styles } from "../../api/stylesApi";

const EditCustomerScreen = props => {

  return (
    <View style={styles.screenBackground}>
      <EditCustomer
        customer={props.customer}
        timers={props.timers}
        shutOffs={props.shutOffs}
        solenoidValvesList={props.solenoidValves}
        generalNotes={props.generalNotes}
        navigation={props.navigation}
      />
    </View>
  );
};

export default EditCustomerScreen;
