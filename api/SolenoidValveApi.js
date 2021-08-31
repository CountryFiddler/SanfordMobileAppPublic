import firebase, {firestore} from 'react-native-firebase';

export function submitSolenoidValvesInfo(
  customer,
  solenoidValveLocation,
  solenoidValveType,
  size,
  numValves,
  zoneNumbers,
  yearInstalled,
  navigation,
) {
  addSolenoidValves(customer, {
    location: solenoidValveLocation,
    type: solenoidValveType,
    size: size,
    numValves: numValves,
    zoneNumbers: zoneNumbers,
    yearInstalled: yearInstalled,
  });
  navigation.navigate('Customer', {
    customer: customer,
  });
}

export function submitSolenoidValvesChanges(
  customer,
  solenoidValves,
  currentSolenoidValveLocation,
  currentSolenoidValveType,
  currentSize,
  currentNumValves,
  currentZoneNumbers,
  currentYearInstalled,
  navigation,
) {
  if (currentSolenoidValveLocation.length > 0) {
    solenoidValves.location = currentSolenoidValveLocation;
  }
  if (currentSolenoidValveType.length > 0) {
    solenoidValves.type = currentSolenoidValveType;
  }
  if (currentNumValves.length > 0) {
    solenoidValves.numValves = currentNumValves;
  }
  if (currentZoneNumbers.length > 0) {
    solenoidValves.zoneNumbers = currentZoneNumbers;
  }
  if (currentSize.length > 0) {
    solenoidValves.size = currentSize;
  }
  if (currentYearInstalled.length > 0) {
    solenoidValves.yearInstalled = currentYearInstalled;
  }
  updateSolenoidValves(customer, solenoidValves);
  navigation.navigate('SolenoidValvesInfo', {
    customer: customer,
    solenoidValves: solenoidValves,
    navigation: navigation,
  });
}

// Start of Timer adding and getting functions
export function addSolenoidValves(customer, solenoidValves, addComplete) {
  const docRef = firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id);
  console.log(customer.id);
  docRef
    .collection('SolenoidValves')
    .doc()
    .set({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      location: solenoidValves.location,
      type: solenoidValves.type,
      size: solenoidValves.size,
      numValves: solenoidValves.numValves,
      zoneNumbers: solenoidValves.zoneNumbers,
      yearInstalled: solenoidValves.yearInstalled,
    })
    .then(snapshot => snapshot.get())
    .then(customerData => addComplete(customerData.data()))
    .catch(error => console.log(error));
}

export function updateSolenoidValves(customer, solenoidValves) {
  firebase
    .firestore()
    .collection('Customers')
    .doc(customer.id)
    .collection('SolenoidValves')
    .doc(solenoidValves.id)
    .update({
      location: solenoidValves.location,
      type: solenoidValves.type,
      size: solenoidValves.size,
      numValves: solenoidValves.numValves,
      zoneNumbers: solenoidValves.zoneNumbers,
      yearInstalled: solenoidValves.yearInstalled,
    })
    // I think this updates the database quicker???
    .then(snapshot => snapshot.get())
    .catch(error => console.log(error));
}

export function getSolenoidValves(customer) {
  var solenoidValvesList = [];
  const docRef = firestore()
    .collection('Customers')
    .doc(customer.id);
  docRef
    .collection('SolenoidValves')
    .orderBy('createdAt')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        solenoidValvesList.push({
          location: doc.data().location,
          type: doc.data().type,
          size: doc.data().size,
          numValves: doc.data().numValves,
          zoneNumbers: doc.data().zoneNumbers,
          yearInstalled: doc.data().yearInstalled,
          id: doc.id,
          customerID: customer.id,
          utilityType: 'SolenoidValves',
        });
      });
    });
  return solenoidValvesList;
}

export function getSolenoidValvesNotes(customer, solenoidValves) {
  var notesList = [];
  const docRef = firestore()
    .collection('Customers')
    .doc(customer.id)
    .collection('SolenoidValves')
    .doc(solenoidValves.id);
  docRef
    .collection('SolenoidValveNotes')
    .orderBy('createdAt', 'desc')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        notesList.push({
          title: doc.data().title,
          noteText: doc.data().noteText,
          utilityID: solenoidValves.id,
          customerID: customer.id,
          noteID: doc.id,
          numImages: doc.data().numImages,
          imageRefs: doc.data().imageRefs,
          noteType: 'SolenoidValveNotes',
        });
      });
    });
  return notesList;
}
