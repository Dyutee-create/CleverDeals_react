import axios from 'axios';

const SET_TRAVLOGIN_SUCCESS = 'SET_TRAVLOGIN_SUCCESS';
const SET_TRAVLOGIN_ERROR = 'SET_TRAVLOGIN_ERROR';
const SET_OWNERLOGIN_SUCCESS = 'SET_OWNERLOGIN_SUCCESS';
const SET_OWNERLOGIN_ERROR = 'SET_OWNERLOGIN_ERROR';
const SET_SIGNUP_SUCCESS = 'SET_SIGNUP_SUCCESS';
const SET_SIGNUP_ERROR = 'SET_SIGNUP_ERROR';
const SET_OWNERSIGNUP_SUCCESS = 'SET_OWNERSIGNUP_SUCCESS';
const SET_OWNERSIGNUP_ERROR = 'SET_OWNERSIGNUP_ERROR';
const SET_USERPROFILE_SUCCESS = 'SET_USERPROFILE_SUCCESS';
const SET_USERPROFILE_ERROR = 'SET_USERPROFILE_ERROR';
const SET_LISTPROPERTY_SUCCESS = 'SET_LISTPROPERTY_SUCCESS';
const SET_LISTPROPERTY_ERROR = 'SET_LISTPROPERTY_ERROR';

export function ownersLogin(emailID, password) {
  return dispatch => {
    dispatch(setOwnerLoginSuccess(false));
    dispatch(setOwnerLoginError(null));

    callOwnersLoginApi(emailID, password, error => {
      if (!error) {
        dispatch(setOwnerLoginSuccess(true));
      } else {
        dispatch(setOwnerLoginError(error));
      }
    });
  }
}

export function travelersLogin(emailID, password) {
  return dispatch => {
    dispatch(setTravLoginSuccess(false));
    dispatch(setTravLoginError(null));

    console.log("travelersLogin: ", emailID, password);
    callTravelersLoginApi(emailID, password, error => {
      if (!error) {
        console.log("travel1: ", error)
        dispatch(setTravLoginSuccess(true));
      } else {
        console.log("travel2: ", error)
        dispatch(setTravLoginError(error));
      }
    });
  }
}

export function signupLogin(firstname, lastname, emailID, password) {
  return dispatch => {
    dispatch(setsignupSuccess(false));
    dispatch(setsignupError(null));

    callsignupLoginApi(firstname, lastname, emailID, password, error => {
      if (!error) {
        dispatch(setsignupSuccess(true));
      } else {
        dispatch(setsignupError(error));
      }
    });
  }
}

export function ownersSignUpLogin(firstname, lastname, emailID, password) {
  return dispatch => {
    dispatch(setownerssignupSuccess(false));
    dispatch(setownerssignupError(null));

    callownerssignupLoginApi(firstname, lastname, emailID, password, error => {
      if (!error) {
        dispatch(setownerssignupSuccess(true));
      } else {
        dispatch(setownerssignupError(error));
      }
    });
  }
}

export function userProfile(firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID) {
  return dispatch => {
    dispatch(setuserprofileSuccess(false));
    dispatch(setuserprofileError(null));

    calluserProfileApi(firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID, error => {
      if (!error) {
        dispatch(setuserprofileSuccess(true));
      } else {
        dispatch(setuserprofileError(error));
      }
    });
  }
}

export function listProperty(address, headline, propdesc, proptype, noofrooms, noofpeople, noofbathrooms) {
  return dispatch => {
    dispatch(setListPropertySuccess(false));
    dispatch(setListPropertyError(null));
    console.log("Values: ", address, headline, propdesc, proptype, noofrooms, noofpeople, noofbathrooms);
    // callListPropertyApi(address, headline, propdesc, proptype, noofrooms, noofpeople, noofbathrooms, error => {
    //   if (!error) {
    //     dispatch(setListPropertySuccess(true));
    //   } else {
    //     dispatch(setListPropertyError(error));
    //   }
    // });
    dispatch(setListPropertySuccess(true));
  }
}

function setTravLoginSuccess(travLoginSuccess) {
  console.log("travel3: ", travLoginSuccess);
  return {
    type: SET_TRAVLOGIN_SUCCESS,
    travLoginSuccess
  };
}

function setTravLoginError(travLoginError) {
  return {
    type: SET_TRAVLOGIN_ERROR,
    travLoginError
  }
}

function setOwnerLoginSuccess(ownerLoginSuccess) {
  return {
    type: SET_OWNERLOGIN_SUCCESS,
    ownerLoginSuccess
  };
}

function setOwnerLoginError(ownerLoginError) {
  return {
    type: SET_OWNERLOGIN_ERROR,
    ownerLoginError
  }
}

function setsignupSuccess(signupLoginSuccess) {
  return {
    type: SET_SIGNUP_SUCCESS,
    signupLoginSuccess
  };
}

function setsignupError(signupLoginError) {
  return {
    type: SET_SIGNUP_ERROR,
    signupLoginError
  }
}

function setownerssignupSuccess(ownersSignUpLoginSuccess) {
  return {
    type: SET_OWNERSIGNUP_SUCCESS,
    ownersSignUpLoginSuccess
  };
}

function setownerssignupError(ownersSignUpLoginError) {
  return {
    type: SET_OWNERSIGNUP_ERROR,
    ownersSignUpLoginError
  }
}

function setuserprofileSuccess(userProfileSuccess) {
  return {
    type: SET_USERPROFILE_SUCCESS,
    userProfileSuccess
  };
}

function setuserprofileError(userProfileError) {
  return {
    type: SET_USERPROFILE_ERROR,
    userProfileError
  }
}

function setListPropertySuccess(listPropertySuccess) {
  return {
    type: SET_LISTPROPERTY_SUCCESS,
    listPropertySuccess
  };
}

function setListPropertyError(listPropertyError) {
  return {
    type: SET_LISTPROPERTY_ERROR,
    listPropertyError
  }
}

function callOwnersLoginApi(emailID, password, callback) {
  setTimeout(() => {
    const data = {
      emailID : emailID,
      password : password
    }
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post('http://localhost:3001/OwnersSignIn',data)
      .then(response => {
        console.log("Status Code : ",response.status);
        if(response.status === 200){
            return callback(null);
        }else{
          return callback(new Error('Invalid email and password'));
        }
    });
  })
}

function callTravelersLoginApi(emailID, password, callback) {
  setTimeout(() => {
    const data = {
      emailID : emailID,
      password : password
    }
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post('http://localhost:3001/SignIn',data)
      .then(response => {
        console.log("travelersLogin Status Code : ",response.status);
        if(response.status === 200){
            return callback(null);
        }else{
          return callback(new Error('Invalid email and password'));
        }
    });
  })
}

function callsignupLoginApi(firstname, lastname, emailID, password, callback) {
  setTimeout(() => {
    const data = {
      firstname : firstname,
      lastname : lastname,
      emailID : emailID,
      password : password
    }
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post('http://localhost:3001/SignUpEmail',data)
      .then(response => {
        console.log("Status Code : ",response.status);
        if(response.status === 200){
            return callback(null);
        }else{
          return callback(new Error('Invalid email and password'));
        }
    });
  })
}

function callownerssignupLoginApi(firstname, lastname, emailID, password, callback) {
  setTimeout(() => {
    const data = {
      firstname : firstname,
      lastname : lastname,
      emailID : emailID,
      password : password
    }
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post('http://localhost:3001/OwnersSignUpEmail',data)
      .then(response => {
        console.log("Status Code : ",response.status);
        if(response.status === 200){
            return callback(null);
        }else{
          return callback(new Error('Invalid email and password'));
        }
    });
  })
}

function calluserProfileApi(firstname, lastname, aboutme, mycountry, company, school, hometown, languages, gender, phonenum, emailID, callback) {
  setTimeout(() => {
    const data = {
      firstname : firstname,
      lastname : lastname,
      aboutme : aboutme,
      mycountry : mycountry,
      company : company,
      school : school,
      hometown : hometown,
      languages : languages,
      gender : gender,
      phonenum : phonenum,
      emailID : emailID
    }
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post('http://localhost:3001/UserProfile',data)
      .then(response => {
        console.log("Status Code : ",response.status);
        if(response.status === 200){
            return callback(null);
        }else{
          return callback(new Error('Invalid email and password'));
        }
    });
  })
}

export default function reducer(state = {
  ownerLoginSuccess: false,
  ownerLoginError: null,
  travLoginSuccess: false,
  travLoginError: null,
  signupLoginSuccess: false,
  signupLoginError: null,
  ownersSignUpLoginSuccess: false,
  //ownersSignUpLoginSuccess: null,
  userProfileSuccess: false,
  userProfileError: null,
  listPropertySuccess: false,
  listPropertyError: null
}, action) {
  switch (action.type) {
    case SET_TRAVLOGIN_SUCCESS:
      return Object.assign({}, state, {
        travLoginSuccess: action.travLoginSuccess
      });

    case SET_TRAVLOGIN_ERROR:
      return Object.assign({}, state, {
        travLoginError: action.travLoginError
      });

    case SET_OWNERLOGIN_SUCCESS:
      return Object.assign({}, state, {
        ownerLoginSuccess: action.ownerLoginSuccess
      });

    case SET_OWNERLOGIN_ERROR:
      return Object.assign({}, state, {
        ownerLoginError: action.ownerLoginError
      });

      case SET_SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signupLoginSuccess: action.signupLoginSuccess
      });

      case SET_SIGNUP_ERROR:
      return Object.assign({}, state, {
        signupLoginError: action.signupLoginError
      });

      case SET_OWNERSIGNUP_SUCCESS:
      return Object.assign({}, state, {
        ownersSignUpLoginSuccess: action.ownersSignUpLoginSuccess
      });

      case SET_OWNERSIGNUP_ERROR:
      return Object.assign({}, state, {
        ownersSignUpLoginError: action.ownersSignUpLoginError
      });

      case SET_USERPROFILE_SUCCESS:
      return Object.assign({}, state, {
        userProfileSuccess: action.userProfileSuccess
      });

      case SET_USERPROFILE_ERROR:
      return Object.assign({}, state, {
        userProfileError: action.userProfileError
      });

      case SET_LISTPROPERTY_SUCCESS:
      return Object.assign({}, state, {
        listPropertySuccess: action.listPropertySuccess
      });

      case SET_LISTPROPERTY_ERROR:
      return Object.assign({}, state, {
        listPropertyError: action.listPropertyError
      });

    default:
      return state;
  }
}