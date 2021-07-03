import firebase from 'react-native-firebase';
import {addTimer} from './FirestoreApi';

export function submitTimerInfo(
  customer,
  timerType,
  numPrograms,
  numZones,
  navigation,
) {
  addTimer(customer, {
    timerType: timerType,
    numPrograms: numPrograms,
    numZones: numZones,
  });
  navigation.navigate('TimerSelection');
  /*const docRef = firebase
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

  docRef
    .collection('Timer')
    .doc()
    .set({
      type: null,
      numPrograms: null,
      numZones: null,
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));*/
}
