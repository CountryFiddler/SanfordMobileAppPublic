import {SafeAreaView, Image} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPencilAlt,
  faSearch,
  faKey,
  faSignInAlt,
  faMapMarkerAlt,
  faDoorOpen,
  faRuler,
  faBackward,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
  faImage,
  faStickyNote,
  faTrashAlt,
  faTimesCircle,
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';

const Icons = props => {

  var width = props.width;
  var height = props.height;
  var timer = false;
  var shutOff = false;
  var solenoidValve = false;
  var search = false;
  var stickyNote = false;
  var edit = false;
  var exit = false;
  var image = false;
  var trash = false;
  var email = false;
  var password = false;
  var signIn = false;
  var location = false;
  var insideOutside = false;
  var calendar = false;
  var utilitySize = false;
  var backFlow = false;
  var history = false;
  var color = props.color;
  var size = props.size;

  if (color === null) {
    color = 'white';
  }
  if (props.icon === 'timer') {
    timer = true;
    if (size === 'medium') {
      width = 30;
      height = 30;
    }
  }
  if (props.icon === 'shutOff') {
    shutOff = true;
    if (size === 'medium') {
      width = 40;
      height = 35;
    }
  }
  if (props.icon === 'solenoidValve') {
    solenoidValve = true;
    if (size === 'medium') {
      width = 36;
      height = 40;
    }
  }
  if (props.icon === 'search') {
    search = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'stickyNote') {
    stickyNote = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'edit') {
    edit = true;
    if (size === 'medium') {
      size = 25;
    }
  }
  if (props.icon === 'exit') {
    exit = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'image') {
    image = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'trash') {
    trash = true;
    if (size === 'medium') {
      size = 33;
    }
  }
  if (props.icon === 'email') {
    email = true;
    if (size === 'medium') {
      size = 33;
    }
    if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'password') {
    password = true;
    if (size === 'medium') {
      size = 33;
    }
    if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'signIn') {
    signIn = true;
    if (size === 'medium') {
      size = 33;
    }
    if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'location') {
    location = true;
    if (size === 'medium') {
      size = 33;
    } else if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'insideOutside') {
    insideOutside = true;
    if (size === 'medium') {
      size = 33;
    } else if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'calendar') {
    calendar = true;
    if (size === 'medium') {
      size = 33;
    } else if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'utilitySize') {
    utilitySize = true;
    if (size === 'medium') {
      size = 33;
    } else if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'backFlow') {
    backFlow = true;
    if (size === 'medium') {
      size = 33;
    } else if (size === 'small') {
      size = 17;
    }
  }
  if (props.icon === 'history') {
    history = true;
    if (size === 'medium') {
      size = 33;
    } else if (size === 'small') {
      size = 17;
    }
  }
  return (
    <SafeAreaView>
      {timer ? (
        <Image
          style={{width: width, height: height}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/iu-1.png')}
        />
      ) : shutOff ? (
        <Image
          style={{width: width, height: height}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/Shut-OffValve.png')}
        />
      ) : solenoidValve ? (
        <Image
          style={{width: width, height: height}}
          source={require('/Users/alexandergordash/WebstormProjects/SanfordIrrigationMobileApp/src/icons/SolenoidValve.png')}
        />
      ) : search ? (
        <FontAwesomeIcon icon={faSearch} size={size} />
      ) : stickyNote ? (
        <FontAwesomeIcon icon={faStickyNote} size={size} />
      ) : edit ? (
        <FontAwesomeIcon icon={faPencilAlt} size={size} />
      ) : exit ? (
        <FontAwesomeIcon
          icon={faTimesCircle}
          size={size}
          style={{color: color}}
        />
      ) : image ? (
        <FontAwesomeIcon icon={faImage} size={size} />
      ) : trash ? (
        <FontAwesomeIcon icon={faTrashAlt} size={size} color={color} />
      ) : email ? (
        <FontAwesomeIcon icon={faEnvelope} size={size} style={props.style} />
      ) : password ? (
        <FontAwesomeIcon icon={faKey} size={size} style={props.style} />
      ) : signIn ? (
        <FontAwesomeIcon icon={faSignInAlt} size={size} />
      ) : location ? (
        <FontAwesomeIcon icon={faMapMarkerAlt} size={size} />
      ) : insideOutside ? (
        <FontAwesomeIcon icon={faDoorOpen} size={size} />
      ) : calendar ? (
        <FontAwesomeIcon icon={faCalendarAlt} size={size} />
      ) : utilitySize ? (
        <FontAwesomeIcon icon={faRuler} size={size} />
      ) : backFlow ? (
        <FontAwesomeIcon icon={faBackward} size={size} />
      ) : history ? (
        <FontAwesomeIcon icon={faHistory} size={size} />
      ) : null}
    </SafeAreaView>
  );
};

export default Icons;
