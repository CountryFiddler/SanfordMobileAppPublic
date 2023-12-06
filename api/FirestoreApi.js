
import firebase, {firestore} from 'react-native-firebase';

export function addCustomer(
  customer, addComplete
) {
  const docRef = firebase
    .firestore()
    .collection('Customers')
    .doc();

  docRef
    .set({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      phoneNumber: customer.phoneNumber,
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
  // Need to use firestore(). firebase().firestore() only read the docs
  firestore()
    .collection('Customers')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        customers.push({
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          address: doc.data().address,
          phoneNumber: doc.data().phoneNumber,
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
  console.log(customer.id);
  console.log(customer.firstName);
  console.log(customer.lastName);
  console.log(customer.address);
  console.log(customer.phoneNumber);
  firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id)
    .update({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      phoneNumber: customer.phoneNumber,
      addressHistory: firebase.firestore.FieldValue.arrayUnion(
        customer.address,
      ),
      nameHistory: firebase.firestore.FieldValue.arrayUnion(
        customer.firstName + ' ' + customer.lastName,
      ),
    })
    // This updates the database quicker
    .then(snapshot => snapshot.get())
    .catch(error => console.log(error));
}
