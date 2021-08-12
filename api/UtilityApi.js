import firebase, {firestore} from 'react-native-firebase';
import storage from '@react-native-firebase/storage';

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
    for (var j = 0; j < utilityNote.videoRefs.length; j++) {
      if (imagesToBeDeleted[i] === utilityNote.videoRefs[j].videoRef) {
        utilityNote.numVideos = utilityNote.numVideos - 1;
        utilityNote.videoRefs.splice(j, 1);
        deleteImage(imagesToBeDeleted[i]);
        console.log('image deleted');
        console.log(utilityNote.title);
      }
    }
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
      //utilityNotes: getTimerNotes(customer, utility),
      //timers: timers,
    });
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
    .doc(utility.id)
    .collection(utilityNote.noteType)
    .doc();

  docRef
    .set({
      title: utilityNote.title,
      noteText: utilityNote.noteText,
      numImages: numImages,
      imageRefs: imageRefs,
      numVideos: numVideos,
      videoRefs: videoRefs,
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
  videoRefs,
  numVideos,
  addComplete,
) {
  console.log(imageRefs);
  const docRef = firebase
    .firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection(utilityType)
    .doc(utility.id);

  docRef
    .collection(utilityNote.noteType)
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
    .collection(utility.utilityType)
    .doc(utility.id)
    .collection(utilityNote.noteType)
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

export function getNotes(customer, utility, noteType) {
  var notes = [];
  var counter = 0;
  const docRef = firestore()
    .collection('Customers')
    // Is customer.id needed here?
    .doc(customer.id)
    .collection(utility.utilityType)
    .doc(utility.id);
  //console.log(customer.id);
  //console.log(docRef);
  //const notes = firestore.collection('TimerNotes').doc();
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
          numVideos: doc.data().numVideos,
          videoRefs: doc.data().videoRefs,
          noteType: noteType,
        });
        //console.log(notesList.images.imageRef);
        //alert(timersList.length);
        //counter++;
      });
    });
  // alert(timersList.length);
  // timersRetrieved(timersList);
  return notes;
}
