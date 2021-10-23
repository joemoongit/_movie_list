import React, { useState, useContext } from 'react';

// import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// import 'firebaseui/dist/firebaseui.css';

import { MenuContext } from '../Context';

const Login = ({ setLoginParent }) => {
  const { login } = useContext(MenuContext);
  const [hover, setHover] = useState(false);
  const [hoverSignOut, setHoverSignOut] = useState(false);
  const [hoverGoogle, setHoverGoogle] = useState(false);

  const styleModal = {
    display: login ? 'none' : 'block',
    position: 'fixed',
    zIndex: '1',
    paddingTop: '20em',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  };

  const styleContent = {
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
  };

  const styleClose = {
    color: hover ? '#000' : '#aaaaaa',
    cursor: hover ? 'pointer' : 'notAllowed',
    float: 'right',
    fontSize: '1.5em',
    fontWeight: 'bold',
  };

  const styleText = {
    color: 'black',
  };

  const styleImg = {
    width: '3em',
  };

  const onHover = () => {
    setHover(!hover);
  };

  const onHoverSignOut = () => {
    setHoverSignOut(!hoverSignOut);
  };

  const onHoverGoogle = () => {
    setHoverGoogle(!hoverGoogle);
  };

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const [user] = useAuthState(auth);

  return (
    <div style={styleModal} id="firebaseui-auth-container">
      <div style={styleContent}>
        <span autoFocus
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          onClick={() => setLoginParent(false)}
          style={styleClose}
        >
          &times;
        </span>
        {
          user ?
          <div>
            <span>
              <img style={styleImg} src={user._delegate.photoURL} alt="Profile Picture" />
              <p style={styleText}>Welcome {user._delegate.displayName}!</p>
            </span>
            <br />
            {
              auth.currentUser && (
                <button
                  style={{
                    cursor: hoverSignOut ? 'pointer' : 'notAllowed',
                  }}
                  onMouseEnter={onHoverSignOut}
                  onMouseLeave={onHoverSignOut}
                  onClick={() => auth.signOut()}>Sign Out</button>
              )
            }
          </div>
          :
          <div>
            <p style={styleText}>Login</p>
            <button
              style={{
                backgroundColor: "#ffffff",
                cursor: hoverGoogle ? 'pointer' : 'notAllowed',
              }}
              onMouseEnter={onHoverGoogle}
              onMouseLeave={onHoverGoogle}
              onClick={signInWithGoogle}>
                <span style={{
                  float: 'left',
                }}>
                  <img
                    style={{
                      float: 'left',
                      width: '1em',
                      padding: '0.5em',
                    }}
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" />
                  <p
                    style={{
                      float: 'left',
                      margin: '0',
                      padding: '0.5em',
                    }}
                  >Sign in with Google</p>
                </span>
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;
