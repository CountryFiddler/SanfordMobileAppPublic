import firebase, {firestore} from 'react-native-firebase';

export function addCustomer(customer, addComplete) {
  firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id)
    .set({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
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
    });
  customersRetrieved(customers);
}

export function updateCustomer(customer, updateComplete) {
  firebase
    .firestore()
    .collection('Customers')
    .set(customer)
    .doc(customer.id)
    //.then(snapshot => snapshot.get())
    .then(() => updateComplete(customer))
    .catch(error => console.log(error));
}
