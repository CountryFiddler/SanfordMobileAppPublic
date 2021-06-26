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

export async function getCustomers(
  customerNamesRetrieved,
  customerAddressesRetrieved,
) {
  var listCustomerNames = [];
  var listCustomerAddresses = [];
  // Need to use firestore(). firebase().firestore() only read the docs,
  // it did not store them in customerList
  firestore()
    .collection('Customers')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log('doc added');
        const customerName = doc.data().name + '\n' + doc.data().address;
        const customerAddress = doc.data().address;
        listCustomerNames.push(customerName);
        listCustomerAddresses.push(customerAddress);
        console.log(customerAddress);
      });
    });
  customerNamesRetrieved(listCustomerNames);
  customerAddressesRetrieved(listCustomerAddresses);
}
