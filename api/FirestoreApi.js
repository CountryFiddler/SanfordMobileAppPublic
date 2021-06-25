import firebase, {firestore} from 'react-native-firebase';

export function addCustomer(customer, addComplete) {
  firebase
    .firestore()
    .collection('Customers')
    .add({
      name: customer.name,
      address: customer.address,
      //createdAt: firestore.FieldValue.serverTimestamp(),
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export async function getCustomers(customersRetrieved) {
  var customerList = [];
  // Need to use firestore(). firebase().firestore() only read the docs,
  // it did not store them in customerList
  firestore()
    .collection('Customers')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log('doc added');
        const customerName = doc.data().name;
        customerList.push(customerName);
      });
    });
  console.log('bob', customerList);
  customersRetrieved(customerList);
}
