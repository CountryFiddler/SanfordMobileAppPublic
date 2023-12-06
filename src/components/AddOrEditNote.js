import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {addNote, updateNote} from '../../api/UtilityApi';
import {storage} from 'react-native-firebase';
import EditNotePopup from '../components/EditNotePopup';
import * as Progress from 'react-native-progress';

const AddOrEditNote = props => {
  const currNote = {
    numImages: 0,
    numVideos: 0,
    title: '',
    titlePlaceholder: 'Title',
    noteText: '',
    noteTextPlaceholder: 'Text',
    images: [],
    imageRefs: [],
    videos: [],
    videoRefs: [],
    noteID: '',
  };
  const isAddNote = props.isAddNote;
  const customer = props.customer;
  const utilityType = props.utilityType;
  const utility = props.utility;
  const noteType = props.noteType;
  const noteID = props.noteID;
  const note = props.note;
  const utilityNotes = props.utilityNotes;
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [uploadingVideos, setUploadingVideos] = useState(false);
  const [mediaType, setMediaType] = useState('');
  const [numMediaToUpload, setNumMediaToUpload] = useState(0);
  const [mediaUploadCounter, setMediaUploadCounter] = useState(0);
  const [addedVideos, setAddedVideos] = useState(false);
  const [addedImages, setAddedImages] = useState(false);
  const [numImages, setNumImages] = useState(props.numImages);
  const [numVideos, setNumVideos] = useState(props.numVideos);
  const [noteTitle, setNoteTitle] = useState(props.noteTitle);
  const [noteText, setNoteText] = useState(props.noteText);
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [imageRefs, setImageRefs] = useState([]);
  const [videosToUpload, setVideosToUpload] = useState([]);
  const [videoRefs, setVideoRefs] = useState([]);
  const [testURI, setTestURI] = useState('');
  const [source, setSource] = useState('');
  if (!isAddNote) {
    currNote.numImages = props.note.numImages;
    currNote.numVideos = props.note.numVideos;
    currNote.titlePlaceholder = props.note.title;
    currNote.noteTextPlaceholder = props.note.noteText;
    currNote.imageRefs = props.note.imageRefs;
    currNote.videoRefs = props.note.videoRefs;
    currNote.noteID = props.note.noteID;
    currNote.noteType = props.note.noteType;
    if (props.note.noteText === '') {
      currNote.noteTextPlaceholder = 'Add Text';
    }
  }
  const submitNote = (
    isAddNote,
    customer,
    numImages,
    numVideos,
    images,
    imageRefs,
    videos,
    videoRefs,
    utilityType,
    utility,
    noteTitle,
    noteText,
    noteID,
    noteType,
    navigation,
  ) => {
    var utilityNote = {noteTitle, noteText, noteID, noteType};
    utilityNote.title = noteTitle;
    utilityNote.noteText = noteText;
    utilityNote.noteID = noteID;
    utilityNote.noteType = noteType;
    if (isAddNote) {
      utilityNote.noteID = addNote(
        customer,
        utilityType,
        utility,
        utilityNote,
        imageRefs,
        numImages,
        videoRefs,
        numVideos,
        navigation,
      );
      for (var i = 0; i < images.length; i++) {
        const uri = images[i];
        imageRefs[i].imageRef =
          imageRefs[i].imageRef +
          '/' +
          utilityNote.noteID +
          '/' +
          uri.substring(uri.lastIndexOf('/') + 1);
        console.log(imageRefs[i].imageRef);
      }
      for (var j = 0; j < videos.length; j++) {
        const videoUri = videos[j];
        console.log('Bob' + videos[j]);
        videoRefs[j].videoRef =
          videoRefs[j].videoRef +
          '/' +
          utilityNote.noteID +
          '/' +
          videoUri.substring(videoUri.lastIndexOf('/') + 1);
      }
      updateNote(
        customer,
        utilityType,
        utility,
        utilityNote,
        imageRefs,
        numImages,
        videoRefs,
        numVideos,
        navigation,
      );
    } else {
      updateNote(
        customer,
        utilityType,
        utility,
        utilityNote,
        imageRefs,
        numImages,
        videoRefs,
        numVideos,
        navigation,
      );
    }
    UploadMedia(images, videos, customer, utility, utilityNote);
  };

  const UploadMedia = async (
    images,
    videos,
    customer,
    utility,
    utilityNote,
  ) => {
    console.log(uploading);
    var counter = 0;
    setMediaType('Image');
    setNumMediaToUpload(images.length);
    setMediaUploadCounter(1);
    while (counter < images.length) {
      setTransferred(0);

      setUploading(true);
      const uri = images[counter];
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      var task;
      if (utilityNote.noteType !== 'GeneralNotes') {
        task = storage()
          .ref(
            'Customers' +
              '/' +
              customer.id +
              '/' +
              utility.utilityType +
              '/' +
              utility.id +
              '/' +
              utilityNote.noteType +
              '/' +
              utilityNote.noteID +
              '/' +
              filename,
          )
          .putFile(uploadUri);
      } else {
        task = storage()
          .ref(
            'Customers' +
              '/' +
              customer.id +
              '/' +
              utilityNote.noteType +
              '/' +
              utilityNote.noteID +
              '/' +
              filename,
          )
          .putFile(uploadUri);
      }
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      });
      console.log(uploading);
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
      setUploading(false);
      setMediaUploadCounter(counter + 1);
    }

    counter = 0;
    setMediaType('Video');
    setNumMediaToUpload(videos.length);
    setMediaUploadCounter(1);
    while (counter < videos.length) {
      setTransferred(0);

      setUploading(true);
      const uri = videos[counter];
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      const task = storage()
        .ref(
          'Customers' +
            '/' +
            customer.id +
            '/' +
            utility.utilityType +
            '/' +
            utility.id +
            '/' +
            utilityNote.noteType +
            '/' +
            utilityNote.noteID +
            '/' +
            filename,
        )
        .putFile(uploadUri);
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      });
      try {
        await task;
      } catch (e) {
        console.log('Error: Upload failed');
        console.error(e);
      }

      counter++;
      Alert.alert(
        'Video uploaded!',
        'Your video has been uploaded to Firebase Cloud Storage!',
      );
      setUploading(false);
      setMediaUploadCounter(counter + 1);
    }
    console.log('Done Adding Media');
    console.log(utilityType);
    console.log(utilityType === 'Timers');
    if (utilityType === 'Timers') {
      props.navigation.navigate('TimerInfo', {
        customer: customer,
        utility: utility,
        noteType: noteType,
      });
    } else if (utilityType === 'ShutOffValves') {
      props.navigation.navigate('ShutOffInfo', {
        customer: customer,
        utility: utility,
        noteType: noteType,
      });
    } else if (utilityType === 'SolenoidValves') {
      props.navigation.navigate('SolenoidValvesInfo', {
        customer: customer,
        utility: utility,
        noteType: noteType,
      });
    } else {
      props.navigation.navigate('Customer', {
        customer: customer,
      });
    }
  };

  function checkNullEntries() {
    if (noteTitle === '' && !isAddNote) {
      currNote.title = currNote.titlePlaceholder;
    } else {
      currNote.title = noteTitle;
    }
    if (noteText === '' && !isAddNote) {
      currNote.noteText = currNote.noteTextPlaceholder;
    } else {
      currNote.noteText = noteText;
    }
  }

  function checkDuplicateImageRefs(ref) {
    var contains = false;
    for (var i = 0; i < imageRefs.length; i++) {
      if (imageRefs[i].imageRef === ref) {
        contains = true;
        break;
      }
    }
    if (isAddNote) {
      contains = false;
    }
    return contains;
  }

  function checkDuplicateVideoRefs(ref) {
    var contains = false;
    for (var i = 0; i < videoRefs.length; i++) {
      if (videoRefs[i].videoRef === ref) {
        contains = true;
        break;
      }
    }
    return contains;
  }
  function setMedia() {
    if (addedImages) {
      currNote.imageRefs = imageRefs;
      currNote.numImages = numImages;
      console.log(currNote.numImages);
    }
    if (addedVideos) {
      currNote.videoRefs = videoRefs;
      currNote.numVideos = numVideos;
    }
    currNote.images = imagesToUpload;
    console.log(imagesToUpload.length);
    currNote.videos = videosToUpload;
  }
  function selectImage() {
    var areImagesAdded = addedImages;
    ImagePicker.openPicker({
      mediaType: 'photo',
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    })
      .then(images => {
        var numImagesCounter = numImages;
        for (var i = 0; i < images.length; i++) {
          let imageRef = 'Customers' + '/' + customer.id + '/';
          if (noteType !== 'GeneralNotes') {
            imageRef = imageRef + utility.utilityType + '/' + utility.id + '/';
          }
          imageRef = imageRef + noteType;
          if (!isAddNote) {
            imageRef =
              imageRef +
              '/' +
              noteID +
              '/' +
              images[i].path.substring(images[i].path.lastIndexOf('/') + 1);
          }
          if (!isAddNote) {
            if (props.note.imageRefs.length > 0 && !areImagesAdded) {
              console.log('Cardinals');
              setImageRefs(props.note.imageRefs);
              areImagesAdded = true;
              setAddedImages(true);
            }
          }
          if (imageRefs.length < 20) {
            console.log(imageRefs.length);
            if (!checkDuplicateImageRefs(imageRef)) {
              setImagesToUpload(prevItems => [...prevItems, images[i].path]);
              setImageRefs(prevItems => [...prevItems, {imageRef}]);
              numImagesCounter++;
              console.log(numImagesCounter);
              setNumImages(numImagesCounter);
              setAddedImages(true);
              console.log(addedImages);
            }
          }
        }
        props.onChange?.(images);
      })
      .catch(error => {
        console.log(error.code);
        if (error.code === 'E_NO_IMAGE_DATA_FOUND') {
          Alert.alert('Please Do Not Select Images From Other Apps');
        }
      });
  }

  function selectVideo() {
    var areVideosAdded = addedVideos;
    ImagePicker.openPicker({
      mediaType: 'video',
      width: 300,
      height: 400,
      multiple: true,
    })
      .then(videos => {
        var numVideosCounter = numVideos;
        for (var i = 0; i < videos.length; i++) {
          let videoRef =
            'Customers' +
            '/' +
            customer.id +
            '/' +
            utility.utilityType +
            '/' +
            utility.id +
            '/' +
            noteType;
          if (!isAddNote) {
            videoRef =
              videoRef +
              '/' +
              noteID +
              '/' +
              videos[i].path.substring(videos[i].path.lastIndexOf('/') + 1);
          }
          if (!isAddNote) {
            if (props.note.videoRefs.length > 0 && !areVideosAdded) {
              console.log('Cardinals');
              setVideoRefs(props.note.videoRefs);
              areVideosAdded = true;
              setAddedVideos(true);
            }
          }
          if (videoRefs.length < 20) {
            console.log(videoRefs.length);
            if (!checkDuplicateVideoRefs(videoRef) && !isAddNote) {
              console.log('Brewers');
              setVideosToUpload(prevItems => [...prevItems, videos[i].path]);
              setVideoRefs(prevItems => [...prevItems, {videoRef}]);
              numVideosCounter++;
              console.log(numVideosCounter);
              setNumVideos(numVideosCounter);
              setAddedVideos(true);
              console.log(addedVideos);
            }
          }
        }
        props.onChange?.(videos);
      })
      .catch(error => {
        console.log(error.code);
        if (error.code === 'E_NO_IMAGE_DATA_FOUND') {
          Alert.alert('Please Do Not Select Images From Other Apps');
        }
      });
  }
  function selectImageFromCamera() {
    var areImagesAdded = addedImages;
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      var numImagesCounter = numImages;
      let imageRef = 'Customers' + '/' + customer.id + '/';
      if (noteType !== 'GeneralNotes') {
        imageRef = imageRef + utility.utilityType + '/' + utility.id + '/';
      }
      imageRef = imageRef + noteType;
      if (!isAddNote) {
        imageRef =
          imageRef +
          '/' +
          noteID +
          '/' +
          image.path.substring(image.path.lastIndexOf('/') + 1);
      }
      if (!isAddNote) {
        if (props.note.imageRefs.length > 0 && !areImagesAdded) {
          setImageRefs(props.note.imageRefs);
          areImagesAdded = true;
          setAddedImages(true);
        }
      }
      if (imageRefs.length < 20) {
        console.log('BrewCrew');
        if (!checkDuplicateImageRefs(imageRef)) {
          setImagesToUpload(prevItems => [...prevItems, image.path]);
          setImageRefs(prevItems => [...prevItems, {imageRef}]);
          numImagesCounter++;
          setNumImages(numImagesCounter);
          setAddedImages(true);
          console.log(addedImages);
        }
      }
      props.onChange?.(image);
    });
  }

  function selectVideoFromCamera() {
    ImagePicker.openCamera({
      mediaType: 'video',
      width: 300,
      height: 400,
    }).then(video => {
      var numVideosCounter = props.numVideos;
      setVideosToUpload(prevItems => [...prevItems, video.path]);
      let videoRef =
        'Customers' +
        '/' +
        customer.id +
        '/' +
        utility.utilityType +
        '/' +
        utility.id +
        '/' +
        noteType;
      if (!isAddNote) {
        videoRef =
          videoRef +
          '/' +
          noteID +
          '/' +
          video.path.substring(video.path.lastIndexOf('/') + 1);
      }
      if (!isAddNote) {
        if (props.note.videoRefs.length > 0 && !addedVideos) {
          setVideoRefs(props.note.videoRefs);
          setAddedVideos(true);
        }
      }
      if (videosToUpload.length < 20) {
        setVideoRefs(prevItems => [...prevItems, {videoRef}]);
        numVideosCounter++;
        setNumImages(numVideosCounter);
        setAddedVideos(true);
      }
      props.onChange?.(video);
    });
  }

  const popupList = [
    {
      id: 1,
      name: 'Delete Note',
      deleteNote: true,
    },
    {
      id: 2,
      name: 'Delete Photos',
      deleteNote: false,
    },
  ];
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder={currNote.titlePlaceholder}
          value={noteTitle}
          onChangeText={text => setNoteTitle(text)}
        />
        <TextInput
          placeholder={currNote.noteTextPlaceholder}
          value={noteText}
          onChangeText={text => setNoteText(text)}
        />
        <StatusBar barStyle={'dark-content'} />
        {!isAddNote
          ? (checkNullEntries(),
            (
              <SafeAreaView style={styles.editButtonContainer}>
                <TouchableWithoutFeedback onPress={onShowPopup}>
                  <Text style={styles.txtSize}>Options</Text>
                </TouchableWithoutFeedback>
                <EditNotePopup
                  title={'Options'}
                  ref={target => (popupRef = target)}
                  onTouchOutside={onClosePopup}
                  data={popupList}
                  customer={customer}
                  note={currNote}
                  navigation={props.navigation}
                  utilityType={utilityType}
                  utility={utility}
                />
              </SafeAreaView>
            ))
          : null}
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
            <Text style={styles.buttonText}>Pick an image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={selectImageFromCamera}>
            <Text style={styles.buttonText}>Take a Picture</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {uploading ? (
              <View style={styles.progressBarContainer}>
                <Progress.Bar progress={transferred} width={300} />
                <Text>
                  {' '}
                  {mediaType} {mediaUploadCounter} out of {numMediaToUpload} is
                  being uploaded...
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => {
                  {
                    (currNote.title = noteTitle),
                      currNote.title !== '' || !isAddNote
                        ?
                          (checkNullEntries(),
                          console.log('Giants' + addedVideos),
                          setMedia(),
                          submitNote(
                            isAddNote,
                            customer,
                            currNote.numImages,
                            currNote.numVideos,
                            currNote.images,
                            currNote.imageRefs,
                            currNote.videos,
                            currNote.videoRefs,
                            utilityType,
                            utility,
                            currNote.title,
                            currNote.noteText,
                            currNote.noteID,
                            noteType,
                            props.navigation,
                          ))
                        : Alert.alert(
                            'Please Enter A Note Title',
                            'All notes must have a title',
                          );
                  }
                }}>
                <Text style={styles.buttonText}>Submit Info</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#bbded6',
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 200,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});

export default AddOrEditNote;
