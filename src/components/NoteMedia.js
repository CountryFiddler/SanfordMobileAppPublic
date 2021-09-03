/**
 * File Name: HomeScreen.js
 *
 * Author: Ethan Gordash
 * Date: July 1st, 2021
 * Sanford Irrigation Mobile App
 *
 * Description: This screen allows users to search for an existing customer
 * or navigate to the screen to add a new custoemr to the database.
 *
 * Purpose: Provides users with the ability to search for customers in the
 * database and navigate to the screen to add new customers.
 */
// Import Statements
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  ScrollView,
  render,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CustomerSearchBar from '../components/CustomerSearchBar';
import {firestore, storage} from 'react-native-firebase';
import {getImageURL, updateNote} from '../../api/FirestoreApi';
import EditNotePopup from '../components/EditNotePopup';
import {deleteNoteMedia} from '../../api/UtilityApi';
import Video from 'react-native-video';
import CheckBox from 'react-native-checkbox';
import {ReactNativeZoomableView} from '@dudigital/react-native-zoomable-view';
import {styles} from '../../api/stylesApi';
import Icons from './Icons';

// Start of Home Screen Display
const NoteMedia = props => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);
  const [image10, setImage10] = useState(null);
  const [image11, setImage11] = useState(null);
  const [image12, setImage12] = useState(null);
  const [image13, setImage13] = useState(null);
  const [image14, setImage14] = useState(null);
  const [image15, setImage15] = useState(null);
  const [image16, setImage16] = useState(null);
  const [image17, setImage17] = useState(null);
  const [image18, setImage18] = useState(null);
  const [image19, setImage19] = useState(null);
  const [image20, setImage20] = useState(null);
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  const [video3, setVideo3] = useState(null);
  const [video4, setVideo4] = useState(null);
  const [video5, setVideo5] = useState(null);
  const [video6, setVideo6] = useState(null);
  const [video7, setVideo7] = useState(null);
  const [video8, setVideo8] = useState(null);
  const [video9, setVideo9] = useState(null);
  const [video10, setVideo10] = useState(null);
  const [video11, setVideo11] = useState(null);
  const [video12, setVideo12] = useState(null);
  const [video13, setVideo13] = useState(null);
  const [video14, setVideo14] = useState(null);
  const [video15, setVideo15] = useState(null);
  const [video16, setVideo16] = useState(null);
  const [video17, setVideo17] = useState(null);
  const [video18, setVideo18] = useState(null);
  const [video19, setVideo19] = useState(null);
  const [video20, setVideo20] = useState(null);
  const [agree, setAgree] = useState(false);
  const [image1ZoomIn, setImage1ZoomIn] = useState(false);
  const [image2ZoomIn, setImage2ZoomIn] = useState(false);
  const [image3ZoomIn, setImage3ZoomIn] = useState(false);
  const [image4ZoomIn, setImage4ZoomIn] = useState(false);
  const [image5ZoomIn, setImage5ZoomIn] = useState(false);
  const [image6ZoomIn, setImage6ZoomIn] = useState(false);
  const [image7ZoomIn, setImage7ZoomIn] = useState(false);
  const [image8ZoomIn, setImage8ZoomIn] = useState(false);
  const [image9ZoomIn, setImage9ZoomIn] = useState(false);
  const [image10ZoomIn, setImage10ZoomIn] = useState(false);
  const [image11ZoomIn, setImage11ZoomIn] = useState(false);
  const [image12ZoomIn, setImage12ZoomIn] = useState(false);
  const [image13ZoomIn, setImage13ZoomIn] = useState(false);
  const [image14ZoomIn, setImage14ZoomIn] = useState(false);
  const [image15ZoomIn, setImage15ZoomIn] = useState(false);
  const [image16ZoomIn, setImage16ZoomIn] = useState(false);
  const [image17ZoomIn, setImage17ZoomIn] = useState(false);
  const [image18ZoomIn, setImage18ZoomIn] = useState(false);
  const [image19ZoomIn, setImage19ZoomIn] = useState(false);
  const [image20ZoomIn, setImage20ZoomIn] = useState(false);

  const [imagesToDelete, setImagesToDelete] = useState([]);
  const customer = props.customer;
  const utilityType = props.utilityType;
  const utility = props.utility;
  const note = props.note;
  const isDeleteMedia = props.isDeleteMedia;
  const navigation = props.navigation;
  // const numImages = props.numImages;
  //console.log('numImages = ' + numImages);
  // toString might be just it
  if (note.imageRefs.length > 0) {
    console.log('adljkdsafjkldfsjkldfs');
    var imageRef1 = storage()
      .ref('/' + note.imageRefs[0].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage1(url);
      });
  }
  if (note.imageRefs.length > 1) {
    var imageRef2 = storage()
      .ref('/' + note.imageRefs[1].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage2(url);
      });
  }
  if (note.imageRefs.length > 2) {
    var imageRef3 = storage()
      .ref('/' + note.imageRefs[2].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage3(url);
      });
  }
  if (note.imageRefs.length > 3) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[3].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage4(url);
      });
  }
  if (note.imageRefs.length > 4) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[4].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage5(url);
      });
  }
  if (note.imageRefs.length > 5) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[5].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage6(url);
      });
  }
  if (note.imageRefs.length > 6) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[6].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage7(url);
      });
  }
  if (note.imageRefs.length > 7) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[7].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage8(url);
      });
  }
  if (note.imageRefs.length > 8) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[8].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage9(url);
      });
  }
  if (note.imageRefs.length > 9) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[9].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage10(url);
      });
  }
  if (note.imageRefs.length > 10) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[10].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage11(url);
      });
  }
  if (note.imageRefs.length > 11) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[11].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage12(url);
      });
  }
  if (note.imageRefs.length > 12) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[12].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage13(url);
      });
  }
  if (note.imageRefs.length > 13) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[13].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage14(url);
      });
  }
  if (note.imageRefs.length > 14) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[14].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage15(url);
      });
  }
  if (note.imageRefs.length > 15) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[15].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage16(url);
      });
  }
  if (note.imageRefs.length > 16) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[16].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage17(url);
      });
  }
  if (note.imageRefs.length > 17) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[17].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage18(url);
      });
  }
  if (note.imageRefs.length > 18) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[18].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage19(url);
      });
  }
  if (note.imageRefs.length > 19) {
    var imageRef = storage()
      .ref('/' + note.imageRefs[19].imageRef)
      .getDownloadURL()
      .then(url => {
        setImage20(url);
      });
  }

  function displayImage1() {
    //<Image source={{uri: image1}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 0) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
            <Image source={{uri: image1}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[0].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image1ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage1ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={10}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image1}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage2() {
    //<Image source={{uri: image2}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 1) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage2ZoomIn(true)}>
            <Image source={{uri: image2}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[1].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image2ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage2ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={10}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image2}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
    /*
              <Modal visible={zoomIn === true} animated>
            <View>
              <ReactNativeZoomableView
                maxZoom={1.5}
                minZoom={1}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                captureEvent={true}>
                <Image
                  source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/933845EB-50DC-4C71-B619-8AAE39168A86_1_105_c.jpeg')}
                  style={{width: 200, height: 200}}
                />
              </ReactNativeZoomableView>
            </View>
          </Modal>
     */
  }
  function displayImage3() {
    if (note.imageRefs.length > 2) {
      //<Image source={{uri: image3}} style={{width: 200, height: 300}} />
      return (
        <View>
          <TouchableOpacity onPress={() => setImage3ZoomIn(true)}>
            <Image source={{uri: image3}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[2].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image3ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage3ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image3}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage4() {
    //<Image source={{uri: image4}} style={{width: 200, height: 300}} />;
    if (note.imageRefs.length > 3) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage4ZoomIn(true)}>
            <Image source={{uri: image4}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[3].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image4ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage4ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image4}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage5() {
    //<Image source={{uri: image5}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 4) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage5ZoomIn(true)}>
            <Image source={{uri: image5}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[4].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image5ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage5ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image5}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage6() {
    //<Image source={{uri: image6}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 5) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage6ZoomIn(true)}>
            <Image source={{uri: image6}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[5].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image6ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage6ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image6}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage7() {
    //<Image source={{uri: image7}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 6) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage7ZoomIn(true)}>
            <Image source={{uri: image7}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[6].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image7ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage7ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image7}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage8() {
    //<Image source={{uri: image8}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 7) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage8ZoomIn(true)}>
            <Image source={{uri: image8}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[7].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image8ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage8ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image8}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage9() {
    //<Image source={{uri: image9}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 8) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage9ZoomIn(true)}>
            <Image source={{uri: image9}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[8].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image9ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage9ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image9}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage10() {
    //<Image source={{uri: image10}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 9) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage10ZoomIn(true)}>
            <Image source={{uri: image10}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[9].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image10ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage10ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image10}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage11() {
    // <Image source={{uri: image11}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 10) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage11ZoomIn(true)}>
            <Image source={{uri: image11}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[10].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image11ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage11ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image11}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage12() {
    //<Image source={{uri: image12}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 11) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage12ZoomIn(true)}>
            <Image source={{uri: image12}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[11].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image12ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage12ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image12}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage13() {
    //<Image source={{uri: image13}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 12) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage13ZoomIn(true)}>
            <Image source={{uri: image13}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[12].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image13ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage13ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image13}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage14() {
    //<Image source={{uri: image14}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 13) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage14ZoomIn(true)}>
            <Image source={{uri: image14}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[13].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image14ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage14ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image14}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage15() {
    //<Image source={{uri: image15}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 14) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage15ZoomIn(true)}>
            <Image source={{uri: image15}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[14].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image15ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage15ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image15}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage16() {
    //<Image source={{uri: image16}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 15) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage16ZoomIn(true)}>
            <Image source={{uri: image16}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[15].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image16ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage16ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image16}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage17() {
    //<Image source={{uri: image17}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 16) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage17ZoomIn(true)}>
            <Image source={{uri: image17}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[16].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image17ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage17ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image17}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage18() {
    //<Image source={{uri: image18}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 17) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage18ZoomIn(true)}>
            <Image source={{uri: image18}} style={styles.noteImage} />
          </TouchableOpacity>

          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[17].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image18ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage18ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image18}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage19() {
    //<Image source={{uri: image19}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 18) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage19ZoomIn(true)}>
            <Image source={{uri: image19}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[18].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image19ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage19ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image19}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  function displayImage20() {
    //<Image source={{uri: image20}} style={{width: 200, height: 300}} />
    if (note.imageRefs.length > 19) {
      return (
        <View>
          <TouchableOpacity onPress={() => setImage20ZoomIn(true)}>
            <Image source={{uri: image20}} style={styles.noteImage} />
          </TouchableOpacity>
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.imageRefs[19].imageRef), setAgree(true)
              )}
            />
          ) : null}
          <Modal visible={image20ZoomIn === true} animated>
            <View style={styles.modalExitButton}>
              <TouchableOpacity onPress={() => setImage20ZoomIn(false)}>
                <Icons icon={'exit'} size={33} />
              </TouchableOpacity>
            </View>
            <View style={styles.noteImageModalContainer}>
              <View style={styles.modalImageContainer}>
                <ReactNativeZoomableView
                  maxZoom={2}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  doubleTapDelay={1}
                  bindToBorders={true}
                  captureEvent={true}>
                  <Image source={{uri: image20}} style={styles.modalImage} />
                </ReactNativeZoomableView>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }

  function selectImageToDelete(imageRef) {
    var isInImagesToDelete = false;
    for (var i = 0; i < imagesToDelete.length; i++) {
      if (imageRef === imagesToDelete[i]) {
        console.log('Bob');
        imagesToDelete.splice(i, 1);
        //console.log(imagesToDelete.length);
        isInImagesToDelete = true;
      }
    }
    if (!isInImagesToDelete) {
      setImagesToDelete(prevItems => [...prevItems, imageRef]);
    }
    console.log(imagesToDelete.length);
    /*isInImagesToDelete = false;
    for (var i = 0; i < imagesToDelete.length; i++) {
      if (imageRef === note.videos[i].videoRef) {
        imagesToDelete.splice(i, 1, imageRef);
        isInImagesToDelete = true;
      }
    }
    if (!isInImagesToDelete) {
      setImagesToDelete(prevItems => [...prevItems, imageRef]);
      //console.log(imagesToDelete);
    }*/
  }

  //console.log(testImage);
  //imageURL = getImageURL(note.images[0].imageRef);
  // console.log(note.images[0].imageRef);
  // getURLS();
  console.log('Num Image Refs: ' + note.imageRefs.length);
  return (
    <ScrollView style={styles.noteImageContainer}>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage1()}</View>
        {note.numImages > 1 ? <View>{displayImage2()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage3()}</View>
        {note.numImages > 3 ? <View>{displayImage4()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage5()}</View>
        {note.numImages > 5 ? <View>{displayImage6()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage7()}</View>
        {note.numImages > 7 ? <View>{displayImage8()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage9()}</View>
        {note.numImages > 9 ? <View>{displayImage10()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage11()}</View>
        {note.numImages > 11 ? <View>{displayImage12()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage13()}</View>
        {note.numImages > 13 ? <View>{displayImage14()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage15()}</View>
        {note.numImages > 15 ? <View>{displayImage16()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage17()}</View>
        {note.numImages > 17 ? <View>{displayImage18()}</View> : null}
      </View>
      <View style={styles.noteImageSubContainer}>
        <View>{displayImage19()}</View>
        {note.numImages > 19 ? <View>{displayImage20()}</View> : null}
      </View>
      <View>
        {isDeleteMedia ? (
          <Button
            title={'Delete Selected Photos'}
            onPress={() =>
              deleteNoteMedia(
                imagesToDelete,
                customer,
                note,
                utilityType,
                utility,
                navigation,
              )
            }
          />
        ) : null}
      </View>
    </ScrollView>
  );
};
// End of Home Screen Display

export default NoteMedia;
