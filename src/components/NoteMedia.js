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
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes, faTrash} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

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

  let bouncyCheckboxRef1: BouncyCheckbox | null = null;
  let bouncyCheckboxRef2: BouncyCheckbox | null = null;
  let bouncyCheckboxRef3: BouncyCheckbox | null = null;
  let bouncyCheckboxRef4: BouncyCheckbox | null = null;
  let bouncyCheckboxRef5: BouncyCheckbox | null = null;
  let bouncyCheckboxRef6: BouncyCheckbox | null = null;
  let bouncyCheckboxRef7: BouncyCheckbox | null = null;
  let bouncyCheckboxRef8: BouncyCheckbox | null = null;
  let bouncyCheckboxRef9: BouncyCheckbox | null = null;
  let bouncyCheckboxRef10: BouncyCheckbox | null = null;
  let bouncyCheckboxRef11: BouncyCheckbox | null = null;
  let bouncyCheckboxRef12: BouncyCheckbox | null = null;
  let bouncyCheckboxRef13: BouncyCheckbox | null = null;
  let bouncyCheckboxRef14: BouncyCheckbox | null = null;
  let bouncyCheckboxRef15: BouncyCheckbox | null = null;
  let bouncyCheckboxRef16: BouncyCheckbox | null = null;
  let bouncyCheckboxRef17: BouncyCheckbox | null = null;
  let bouncyCheckboxRef18: BouncyCheckbox | null = null;
  let bouncyCheckboxRef19: BouncyCheckbox | null = null;
  let bouncyCheckboxRef20: BouncyCheckbox | null = null;

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

  function displayImage1() {
    //<Image source={{uri: image1}} style={{width: 20, height: 300}} />
    //if (note.imageRefs.length > 0) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef1 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef1?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage2() {
    //<Image source={{uri: image2}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 1) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef2 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef2?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
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
    //if (note.imageRefs.length > 2) {
    //<Image source={{uri: image3}} style={{width: 200, height: 300}} />
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef3 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef3?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage4() {
    //<Image source={{uri: image4}} style={{width: 200, height: 300}} />;
    //if (note.imageRefs.length > 3) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef4 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef4?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage5() {
    //<Image source={{uri: image5}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 4) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef5 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef5?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage6() {
    //<Image source={{uri: image6}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 5) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef6 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef6?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage7() {
    //<Image source={{uri: image7}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 6) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef7 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef7?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage8() {
    //<Image source={{uri: image8}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 7) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef8 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef8?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage9() {
    //<Image source={{uri: image9}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 8) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef9 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef9?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage10() {
    //<Image source={{uri: image10}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 9) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef10 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef10?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage11() {
    // <Image source={{uri: image11}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 10) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef11 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef11?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage12() {
    //<Image source={{uri: image12}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 11) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef12 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef12?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage13() {
    //<Image source={{uri: image13}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 12) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef13 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef13?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage14() {
    //<Image source={{uri: image14}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 13) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef14 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef14?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage15() {
    //<Image source={{uri: image15}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 14) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef15 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef15?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage16() {
    //<Image source={{uri: image16}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 15) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef16 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef16?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage17() {
    //<Image source={{uri: image17}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 16) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef17 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef17?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage18() {
    //<Image source={{uri: image18}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 17) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef18 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef18?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
  }
  function displayImage19() {
    //<Image source={{uri: image19}} style={{width: 200, height: 300}} />
    // if (note.imageRefs.length > 18) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef19 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef19?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    // }
  }
  function displayImage20() {
    //<Image source={{uri: image20}} style={{width: 200, height: 300}} />
    //if (note.imageRefs.length > 19) {
    return (
      <View>
        {isDeleteMedia ? (
          <View>
            <View style={styles.checkBox}>
              <BouncyCheckbox
                fillColor={'#26660b'}
                label=""
                value={agree}
                ref={(ref: any) => (bouncyCheckboxRef20 = ref)}
                onPress={() => (
                  selectImageToDelete(note.imageRefs[0].imageRef),
                  setAgree(true)
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => (
                selectImageToDelete(note.imageRefs[0].imageRef),
                bouncyCheckboxRef20?.onPress()
              )}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
                    <Image
                      source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                      style={styles.modalImage}
                    />
                  </ReactNativeZoomableView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setImage1ZoomIn(true)}>
              <Image
                source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/8C1C0D3D-7D32-4004-A8D5-36CE18C747E0_1_105_c.jpeg')}
                style={styles.noteImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
    //}
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
    <View>
      {isDeleteMedia ? (
        <View>
          <ScrollView style={{height: '65%'}}>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage1()}</View>
              <View>{displayImage2()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage3()}</View>
              <View>{displayImage4()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage5()}</View>
              <View>{displayImage6()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage7()}</View>
              <View>{displayImage8()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage9()}</View>
              <View>{displayImage10()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage11()}</View>
              <View>{displayImage12()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage13()}</View>
              <View>{displayImage14()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage15()}</View>
              <View>{displayImage16()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage17()}</View>
              <View>{displayImage18()}</View>
            </View>
            <View style={styles.deleteNoteImageSubContainer}>
              <View>{displayImage19()}</View>
              <View>{displayImage20()}</View>
            </View>
          </ScrollView>
          <View style={styles.editNoteDivider}/>
          <View>
            {isDeleteMedia ? (
              <View style={styles.submitDataButtonContainer}>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={styles.generalButtonStyle}>
                  <FontAwesomeIcon icon={faTimes} size={30} color={'#26660b'} />
                  <Text style={styles.submitButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
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
                  style={styles.generalButtonStyle}>
                  <FontAwesomeIcon icon={faTrashAlt} size={30} color={'#cc0000'} />
                  <Text style={styles.cancelButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      ) : (
        <ScrollView style={styles.noteImageContainer}>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage1()}</View>
            <View>{displayImage2()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage3()}</View>
            <View>{displayImage4()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage5()}</View>
            <View>{displayImage6()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage7()}</View>
            <View>{displayImage8()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage9()}</View>
            <View>{displayImage10()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage11()}</View>
            <View>{displayImage12()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage13()}</View>
            <View>{displayImage14()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage15()}</View>
            <View>{displayImage16()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage17()}</View>
            <View>{displayImage18()}</View>
          </View>
          <View style={styles.noteImageSubContainer}>
            <View>{displayImage19()}</View>
            <View>{displayImage20()}</View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
// End of Home Screen Display

export default NoteMedia;
