import firebase, {firestore} from 'react-native-firebase';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';

export function deleteNoteMedia(
  imagesToBeDeleted,
  customer,
  utilityNote,
  utilityType,
  utility,
  navigation,
) {
  console.log('Deleting Images ' + utilityNote.noteType);
  for (var i = 0; i < imagesToBeDeleted.length; i++) {
    for (var j = 0; j < utilityNote.imageRefs.length; j++) {
      if (imagesToBeDeleted[i] === utilityNote.imageRefs[j].imageRef) {
        utilityNote.numImages = utilityNote.numImages - 1;
        utilityNote.imageRefs.splice(j, 1);
        deleteImage(imagesToBeDeleted[i]);
        console.log('image deleted');
        console.log(utilityNote.title);
      }
    }
    //  console.log(utilityNote.videoRefs[0].videoRef);
    //console.log(imagesToBeDeleted[0]);
    /*for (var j = 0; j < utilityNote.videoRefs.length; j++) {
      if (imagesToBeDeleted[i] === utilityNote.videoRefs[j].videoRef) {
        utilityNote.numVideos = utilityNote.numVideos - 1;
        utilityNote.videoRefs.splice(j, 1);
        deleteImage(imagesToBeDeleted[i]);
        console.log('image deleted');
        console.log(utilityNote.title);
      }
    }*/
  }
  updateNote(
    customer,
    utilityType,
    utility,
    utilityNote,
    utilityNote.imageRefs,
    utilityNote.numImages,
    utilityNote.videoRefs,
    utilityNote.numVideos,
  );
  if (utilityType === 'Timers') {
    navigation.navigate('TimerInfo', {
      customer: customer,
      utility: utility,
    });
  } else if (utilityType === 'ShutOffValves') {
    navigation.navigate('ShutOffInfo', {
      customer: customer,
      utility: utility,
    });
  } else if (utilityType === 'SolenoidValves') {
    navigation.navigate('SolenoidValvesInfo', {
      customer: customer,
      utility: utility,
    });
  } else {
    navigation.navigate('Customer', {
      customer: customer,
    });
  }
}

export function deleteCustomer(
  customer,
  timerCollection,
  shutOffCollection,
  solenoidValveCollection,
  generalNotes,
  navigation,
) {
  //console.log('Deleting Timers');
  deleteUtilities(customer, timerCollection);
  //console.log('Deleting ShutOffs');
  deleteUtilities(customer, shutOffCollection);
  //console.log('Deleting SolenoidValves');
  deleteUtilities(customer, solenoidValveCollection);
  //console.log('Deleting General Notes');
  deleteGeneralNotes(customer, generalNotes);
  var docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
  navigation.navigate('Home');
}

export function deleteUtilities(customer, utilityCollection) {
  console.log('Deleting Utilities');
  // console.log('Delete Utilities: ' + utilityCollection[0].noteCollection.length);
  for (var i = 0; i < utilityCollection.length; i++) {
    //console.log(utilityCollection[i].noteCollection.length);
    deleteUtility(
      customer,
      utilityCollection[i].utility,
      utilityCollection[i].noteCollection,
      null,
    );
  }
}

export function deleteUtility(customer, utility, noteCollection, navigation) {
  console.log(noteCollection[0]);
  for (var i = 0; i < noteCollection.length; i++) {
    deleteUtilityNotes(customer, utility, noteCollection[i]);
  }
  var docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection(utility.utilityType)
    .doc(utility.id)
    .delete()
    .then(() => {
      console.log('DocumentB successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
  if (navigation !== null) {
    navigation.navigate('Customer', {
      customer: customer,
      navigation: navigation,
    });
  }
}

export function deleteUtilityNotes(customer, utility, notes) {
  for (var i = 0; i < notes.length; i++) {
    console.log('Deleting Notes');
    deleteUtilityNote(customer, utility, notes[i], null);
  }
}

export function deleteGeneralNotes(customer, notes) {
  for (var i = 0; i < notes.length; i++) {
    deleteGeneralNote(customer, notes[i], null);
  }
}

export function deleteGeneralNote(customer, note, navigation) {
  for (var i = 0; i < note.imageRefs.length; i++) {
    deleteImage(note.imageRefs[i].imageRef);
  }
  var docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection(note.noteType)
    .doc(note.noteID)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
  if (navigation !== null) {
    navigation.navigate('Customer', {
      customer: customer,
      navigation: navigation,
    });
  }
}

export function deleteUtilityNote(customer, utility, utilityNote, navigation) {
  for (var i = 0; i < utilityNote.imageRefs.length; i++) {
    deleteImage(utilityNote.imageRefs[i].imageRef);
  }
  var docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id);
  if (utilityNote.noteType !== 'GeneralNotes') {
    docRef = docRef.collection(utility.utilityType).doc(utility.id);
  }
  docRef
    .collection(utilityNote.noteType)
    .doc(utilityNote.noteID)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
  if (navigation !== null) {
    if (utility.utilityType === 'Timers') {
      navigation.navigate('TimerInfo', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    } else if (utility.utilityType === 'ShutOffValves') {
      navigation.navigate('ShutOffInfo', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    } else if (utility.utilityType === 'SolenoidValves') {
      navigation.navigate('SolenoidValvesInfo', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    } else {
      navigation.navigate('Customer', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    }
  }
}

export function deleteContent(
  isDeleteCustomer,
  isDeleteUtility,
  isDeleteUtilityNote,
  customer,
  utility,
  utilityNote,
  navigation,
  navigationScreen,
) {
  if (isDeleteCustomer) {
    // Call Delete Customer
  }
  if (isDeleteUtility) {
    // Call Delete Utility
  }
  if (isDeleteUtilityNote) {
    deleteUtilityNote(customer, utility, utilityNote);
    if (utility.utilityType === 'Timers') {
      navigation.navigate('TimerInfo', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    } else if (utility.utilityType === 'ShutOffValves') {
      navigation.navigate('ShutOffInfo', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    } else if (utility.utilityType === 'SolenoidValves') {
      navigation.navigate('SolenoidValvesInfo', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    } else {
      navigation.navigate('Customer', {
        customer: customer,
        utility: utility,
        noteType: utilityNote.noteType,
      });
    }
  }
}

// Start of Timer adding and getting functions
export function addNote(
  customer,
  utilityType,
  utility,
  utilityNote,
  imageRefs,
  numImages,
  employeeName,
  addComplete,
) {
  var today = new Date(),
    date =
      today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear();
  var docRef = firebase
    .firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id);
  console.log(utilityNote.noteType);
  if (utilityNote.noteType !== 'GeneralNotes') {
    docRef = docRef.collection(utilityType).doc(utility.id);
  }
  docRef = docRef.collection(utilityNote.noteType).doc();
  docRef
    .set({
      title: utilityNote.title,
      noteText: utilityNote.noteText,
      numImages: numImages,
      imageRefs: imageRefs,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
  console.log(docRef);
  return docRef.id;
}

// Start of Timer adding and getting functions
export function updateNote(
  customer,
  utilityType,
  utility,
  utilityNote,
  imageRefs,
  numImages,
  employeeName,
  addComplete,
) {
  console.log(customer.id);
  var meridiam;
  var currentHour;
  var today = new Date(),
    date =
      today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear();

  //console.log(imageRefs);
  if (today.getHours() >= 12) {
    meridiam = 'pm';
    if (today.getHours() === 12) {
      currentHour = (today.getHours());
    } else {
      currentHour = (today.getHours() % 12);
    }
  } else {
    meridiam = 'am';
    currentHour = today.getHours();
  }
  var docRef = firebase
    .firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id);
  if (utilityNote.noteType !== 'GeneralNotes') {
    docRef = docRef.collection(utilityType).doc(utility.id);
  }
  console.log('Joe' + utilityNote.noteType);
  docRef
    .collection(utilityNote.noteType)
    .doc(utilityNote.noteID)
    .update({
      title: utilityNote.title,
      noteText: utilityNote.noteText,
      numImages: numImages,
      imageRefs: imageRefs,
      dateHistory: firebase.firestore.FieldValue.arrayUnion({
        month: today.getMonth() + 1,
        day: today.getDate(),
        year: today.getFullYear(),
        time:
          currentHour + ':' + today.getMinutes() + ' ' + meridiam,
        timeWithSeconds:
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds(),
      }),
      nameHistory: firebase.firestore.FieldValue.arrayUnion({
        employeeName: employeeName,
      }),
      employeeNameAndTimeHistory: firebase.firestore.FieldValue.arrayUnion({
        employeeName: employeeName,
        month: today.getMonth() + 1,
        day: today.getDate(),
        year: today.getFullYear(),
        time:
          currentHour + ':' + today.getMinutes() + ' ' + meridiam,
        timeWithSeconds:
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds(),
      }),
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export function getImageURL(note) {
  var imageRef = storage().ref('/' + note.imageRef);
  imageRef.getDownloadURL().then(url => {
    return url;
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

export function getNotes(customer, utility, noteType) {
  var notes = [];
  var counter = 0;
  var docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id);
  if (noteType !== 'GeneralNotes') {
    docRef = docRef.collection(utility.utilityType).doc(utility.id);
  }
  docRef
    .collection(noteType)
    .orderBy('createdAt')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        notes.push({
          title: doc.data().title,
          noteText: doc.data().noteText,
          utilityID: utility.id,
          customerID: customer.id,
          noteID: doc.id,
          numImages: doc.data().numImages,
          imageRefs: doc.data().imageRefs,
          noteType: noteType,
          employeeNameAndTimeHistory: doc.data().employeeNameAndTimeHistory,
          createdAt: doc.data().createdAt,
        });
      });
    });
  return notes;
}
