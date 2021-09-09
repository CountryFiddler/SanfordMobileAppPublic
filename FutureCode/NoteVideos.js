
/* if (note.videoRefs.length > 0) {
  var videoRef1 = storage()
    .ref('/' + note.videoRefs[0].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo1(url);
      console.log(url);
    });
}
if (note.videoRefs.length > 1) {
  var videoRef2 = storage()
    .ref('/' + note.videoRefs[1].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo2(url);
    });
}
if (note.videoRefs.length > 2) {
  var videoRef3 = storage()
    .ref('/' + note.videoRefs[2].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo3(url);
    });
}
if (note.videoRefs.length > 3) {
  var videoRef4 = storage()
    .ref('/' + note.videoRefs[3].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo4(url);
    });
}
if (note.videoRefs.length > 4) {
  var videoRef5 = storage()
    .ref('/' + note.videoRefs[4].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo5(url);
    });
}
if (note.videoRefs.length > 5) {
  var videoRef6 = storage()
    .ref('/' + note.videoRefs[5].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo6(url);
    });
}
if (note.videoRefs.length > 6) {
  var videoRef7 = storage()
    .ref('/' + note.videoRefs[6].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo7(url);
    });
}
if (note.videoRefs.length > 7) {
  var videoRef8 = storage()
    .ref('/' + note.videoRefs[7].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo8(url);
    });
}
if (note.videoRefs.length > 8) {
  var videoRef9 = storage()
    .ref('/' + note.videoRefs[8].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo9(url);
    });
}
if (note.videoRefs.length > 9) {
  var videoRef10 = storage()
    .ref('/' + note.videos[9].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo10(url);
    });
}
if (note.videoRefs.length > 10) {
  var videoRef11 = storage()
    .ref('/' + note.videoRefs[10].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo11(url);
    });
}
if (note.videoRefs.length > 11) {
  var videoRef12 = storage()
    .ref('/' + note.videoRefs[11].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo12(url);
    });
}
if (note.videoRefs.length > 12) {
  var videoRef13 = storage()
    .ref('/' + note.videoRefs[12].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo13(url);
    });
}
if (note.videoRefs.length > 13) {
  var videoRef14 = storage()
    .ref('/' + note.videoRefs[13].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo14(url);
    });
}
if (note.videoRefs.length > 14) {
  var videoRef15 = storage()
    .ref('/' + note.videoRefs[14].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo15(url);
    });
}
if (note.videoRefs.length > 15) {
  var videoRef16 = storage()
    .ref('/' + note.videoRefs[15].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo16(url);
    });
}
if (note.videoRefs.length > 16) {
  var videoRef17 = storage()
    .ref('/' + note.videoRefs[16].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo17(url);
    });
}
if (note.videoRefs.length > 17) {
  var videoRef18 = storage()
    .ref('/' + note.videoRefs[17].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo18(url);
    });
}
if (note.videoRefs.length > 18) {
  var videoRef19 = storage()
    .ref('/' + note.videoRefs[18].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo19(url);
    });
}
if (note.videoRefs.length > 19) {
  var videoRef20 = storage()
    .ref('/' + note.videoRefs[19].videoRef)
    .getDownloadURL()
    .then(url => {
      setVideo20(url);
    });
}
//console.log(imageRef);
// console.log(note.title);
//console.log(note.noteText);
// const imageURL = null;
/*var counter = 0;
while (counter < note.numImages) {
  var imageRef = storage().ref('/' + note.images[counter].imageRef);
  imageRef.getDownloadURL().then(url => {
    //setTestImage(url);
    // console.log(url);
    console.log(url);
  //  setTestImage(prevItems => [...prevItems, {url}]);
    //setTestImage(url);
  });
  counter++;
}
console.log(counter);*/
/* const url = storage()
  .ref('/' + note.images[0].imageRef)
  .getDownloadURL();*/

/*function displayVideo1() {
    if (note.videoRefs.length > 0) {
      console.log("Bob" + video1);
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video1}}
            style={{width: 200, height: 300}}
            resizeMode={'contain'}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[0].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo2() {
    if (note.videoRefs.length > 1) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            resizeMode={'contain'}
            source={{uri: video2}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[1].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
  function displayVideo3() {
    if (note.videoRefs.length > 2) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video3}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[2].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo4() {
    if (note.videoRefs.length > 3) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video4}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[3].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo5() {
    if (note.videoRefs.length > 4) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video5}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[4].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo6() {
    if (note.videoRefs.length > 5) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video6}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[5].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo7() {
    if (note.videoRefs.length > 6) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video7}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[6].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo8() {
    if (note.videoRefs.length > 7) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video8}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[7].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo9() {
    if (note.videoRefs.length > 8) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video9}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[8].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo10() {
    if (note.videoRefs.length > 9) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video10}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[9].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo11() {
    if (note.videoRefs.length > 10) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video11}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[10].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo12() {
    if (note.videoRefs.length > 11) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video12}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[11].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo13() {
    if (note.videoRefs.length > 12) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video13}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[12].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo14() {
    if (note.videoRefs.length > 13) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video14}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[13].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo15() {
    if (note.videoRefs.length > 14) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video15}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[14].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo16() {
    if (note.videoRefs.length > 15) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video16}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[15].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo17() {
    if (note.videoRefs.length > 16) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video17}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[16].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo18() {
    if (note.videoRefs.length > 17) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video18}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[17].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo19() {
    if (note.videoRefs.length > 18) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video19}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[18].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }

  function displayVideo20() {
    if (note.videoRefs.length > 19) {
      return (
        <View>
          <Video
            controls={true}
            paused={true}
            repeat={true}
            source={{uri: video20}}
            style={{width: 200, height: 300}}
          />
          {isDeleteMedia ? (
            <CheckBox
              boxType={'square'}
              label=""
              value={agree}
              onChange={() => (
                selectImageToDelete(note.videoRefs[19].videoRef), setAgree(true)
              )}
            />
          ) : null}
        </View>
      );
    }
  }
        <View>{displayVideo1()}</View>
      <View>{displayVideo2()}</View>
      <View>{displayVideo3()}</View>
      <View>{displayVideo4()}</View>
      <View>{displayVideo5()}</View>
      <View>{displayVideo6()}</View>
      <View>{displayVideo7()}</View>
      <View>{displayVideo8()}</View>
      <View>{displayVideo9()}</View>
      <View>{displayVideo10()}</View>
      <View>{displayVideo11()}</View>
      <View>{displayVideo12()}</View>
      <View>{displayVideo13()}</View>
      <View>{displayVideo14()}</View>
      <View>{displayVideo15()}</View>
      <View>{displayVideo16()}</View>
      <View>{displayVideo17()}</View>
      <View>{displayVideo18()}</View>
      <View>{displayVideo19()}</View>
      <View>{displayVideo20()}</View>*/
/*

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
const [video20, setVideo20] = useState(null);*/
