//TODO Add comments to FirestoreApi
import firebase, {firestore} from 'react-native-firebase';
import {Alert, Platform} from 'react-native';
import storage from '@react-native-firebase/storage';
import {useState} from 'react';

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
  console.log(customer.id);
  docRef
    .collection('Timers')
    .doc()
    .set({
      timerType: timer.timerType,
      numPrograms: timer.numPrograms,
      numZones: timer.numZones,
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
  console.log(timer.timerType);
}

export function updateTimers(customer, timer) {
  firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id)
    .collection('Timers')
    .doc(timer.id)
    .update({
      timerType: timer.timerType,
      numPrograms: timer.numPrograms,
      numZones: timer.numZones,
      //searchText: customer.searchText,
      //addressHistory: firebase.firestore.FieldValue.arrayUnion(
      //customer.address,
      // ),
      //nameHistory: firebase.firestore.FieldValue.arrayUnion(
      // customer.firstName + ' ' + customer.lastName,
      //),
    })
    // I think this updates the database quicker???
    .then(snapshot => snapshot.get())
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
    .collection('Timers')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        timersList.push({
          timerType: doc.data().timerType,
          numPrograms: doc.data().numPrograms,
          numZones: doc.data().numZones,
          id: doc.id,
          customerID: customer.id,
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

// Start of Timer adding and getting functions
export function addNote(
  customer,
  utilityType,
  utility,
  utilityNote,
  imageRefs,
  numImages,
  videoRefs,
  numVideos,
  addComplete,
) {
  const docRef = firebase
    .firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection(utilityType)
    .doc(utility.id);

  docRef
    .collection('TimerNotes')
    .doc()
    .set({
      title: utilityNote.title,
      noteText: utilityNote.noteText,
      numImages: numImages,
      imageRefs: imageRefs,
      numVideos: numVideos,
      videoRefs: videoRefs,
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

// Start of Timer adding and getting functions
export function updateNote(
  customer,
  utilityType,
  utility,
  utilityNote,
  imageRefs,
  numImages,
  videoRefs,
  numVideos,
  addComplete,
) {
  const docRef = firebase
    .firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection(utilityType)
    .doc(utility.id);

  docRef
    .collection('TimerNotes')
    .doc(utilityNote.noteID)
    .update({
      title: utilityNote.title,
      noteText: utilityNote.noteText,
      numImages: numImages,
      imageRefs: imageRefs,
      numVideos: numVideos,
      videoRefs: videoRefs,
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export function getTimerNotes(customer, timer) {
  var notesList = [];
  var counter = 0;
  const docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection('Timers')
    .doc(timer.id);
  //console.log(customer.id);
  //console.log(docRef);
  //const notes = firestore.collection('TimerNotes').doc();
  docRef
    .collection('TimerNotes')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        notesList.push({
          title: doc.data().title,
          noteText: doc.data().noteText,
          utilityID: timer.id,
          customerID: customer.id,
          noteID: doc.id,
          numImages: doc.data().numImages,
          images: doc.data().imageRefs,
          numVideos: doc.data().numVideos,
          videos: doc.data().videoRefs,
        });
        //console.log(notesList.images.imageRef);
        //alert(timersList.length);
        //counter++;
      });
    });
  // alert(timersList.length);
  // timersRetrieved(timersList);
  return notesList;
  // alert(timersList.length);
}

export async function UploadMedia(media, customer) {
  //console.log(media[counter].source);
  var counter = 0;
  //const [image, setImage] = useState(null);
  //const [uploading, setUploading] = useState(false);
  // const [transferred, setTransferred] = useState(0);
  //console.log(images);
  while (counter < media.length) {
    const {uri} = media[counter].source;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const task = storage()
      .ref(customer.id + '/' + 'TimerNotes' + '/' + filename)
      .putFile(uploadUri);
    console.log(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {});
    try {
      await task;
    } catch (e) {
      console.log('Error: Upload failed');
      console.error(e);
    }
    counter++;
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!',
    );
  }
  console.log('Done Adding Photos');
  // setImage(null);
}

export function getImageURL(note) {
  var imageRef = storage().ref('/' + note.imageRef);
  imageRef.getDownloadURL().then(url => {
    return url;
    //setTestImage(url);
    //console.log(imageURL);
  });
}

export function deleteImage(imageName) {
  let imageRef = storage().ref('/' + imageName);
  imageRef
    .delete()
    .then(() => {
      console.log(`${imageName}has been deleted successfully.`);
    })
    .catch(e => console.log('error on image deletion => ', e));
}

export function deleteUtilityNote(customer, utility, utilityNote) {
  for (var i = 0; i < utilityNote.images.length; i++) {
    deleteImage(utilityNote.images[i].imageRef);
  }
  firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection('Timers')
    .doc(utility.id)
    .collection('TimerNotes')
    .doc(utilityNote.noteID)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
  console.log(utilityNote.id);
  console.log(utility.id);
}
