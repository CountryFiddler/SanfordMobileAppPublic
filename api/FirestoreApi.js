//TODO Add comments to FirestoreApi
import firebase, {firestore} from 'react-native-firebase';
import {Alert, Platform} from 'react-native';
import storage from '@react-native-firebase/storage';
import {useState} from 'react';
import {err} from 'react-native-svg/lib/typescript/xml';

export function addCustomer(customer, addComplete) {
  const docRef = firebase
    .firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc();

  docRef
    .set({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      addressHistory: firebase.firestore.FieldValue.arrayUnion(
        customer.address,
      ),
      nameHistory: firebase.firestore.FieldValue.arrayUnion(
        customer.firstName + ' ' + customer.lastName,
      ),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export async function getCustomers(customersRetrieved) {
  var customers = [];
  //const customer = Customer;
  // Need to use firestore(). firebase().firestore() only read the docs,
  // it did not store them in customerList
  firestore()
    .collection('Customers')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        customers.push({
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          address: doc.data().address,
          id: doc.id,
          searchText:
            doc.data().firstName +
            ' ' +
            doc.data().lastName +
            '\n' +
            doc.data().address,
        });
      });
    })
    .catch(error => console.log(error));
  customersRetrieved(customers);
}

export function updateCustomer(customer) {
  firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id)
    .update({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      //searchText: customer.searchText,
      addressHistory: firebase.firestore.FieldValue.arrayUnion(
        customer.address,
      ),
      nameHistory: firebase.firestore.FieldValue.arrayUnion(
        customer.firstName + ' ' + customer.lastName,
      ),
    })
    // I think this updates the database quicker???
    .then(snapshot => snapshot.get())
    .catch(error => console.log(error));
}
