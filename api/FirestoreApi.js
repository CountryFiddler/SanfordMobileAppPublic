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
          name: doc.data().name,
          address: doc.data().address,
          searchText: doc.data().name + '\n' + doc.data().address,
        });
      });
    });
  customersRetrieved(customers);
}
