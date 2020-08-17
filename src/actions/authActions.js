export const signIn = creds => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
  
      firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
          dispatch({ type: "SIGN_IN" });
        })
        .catch(err => {
          dispatch({ type: "SIGN_IN_ERR" }, err);
        });
    };
  };

  export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
  
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: "SIGN_OUT" });
        });
    };
  };

  export const register = creds => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
          dispatch({ type: "REGISTER" });
        })
        .catch(err => {
          dispatch({ type: "REGISTER_ERR" }, err);
        });
    };
  };