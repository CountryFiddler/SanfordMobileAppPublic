//TODO Add comments to FirestoreApi
import firebase, {firestore} from 'react-native-firebase';

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

  docRef
    .collection('Timer')
    .doc()
    .set({
      timerType: null,
      numPrograms: null,
      numZones: null,
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
    });
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

// Start of Timer adding and getting functions
export function addTimer(customer, timer, addComplete) {
  const docRef = firebase
    .firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id);

  docRef
    .collection('Timer')
    .doc()
    .set({
      timerType: timer.timerType,
      numPrograms: timer.numPrograms,
      numZones: timer.numZones,
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export function getTimers(customer) {
  var timersList = [];
  var counter = 0;
  const docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id);
  //console.log(customer.id);
  //console.log(docRef);
  docRef
    .collection('Timer')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        timersList.push({
          timerType: doc.data().timerType,
          numPrograms: doc.data().numPrograms,
          numZones: doc.data().numZones,
          id: doc.id,
        });
        //alert(timersList.length);
        //counter++;
      });
    });
  // alert(timersList.length);
 // timersRetrieved(timersList);
  return timersList;
  // alert(timersList.length);
}
