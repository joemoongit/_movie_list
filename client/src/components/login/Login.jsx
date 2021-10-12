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

  firebase.initializeApp({
    apiKey: 'AIzaSyCiUZTNXnWCQ9dZNv31-umWmLT7xERGXGQ',
    authDomain: 'movielist-c571a.firebaseapp.com',
    projectId: 'movielist-c571a',
    storageBucket: 'movielist-c571a.appspot.com',
    messagingSenderId: '835979508747',
    appId: '1:835979508747:web:b1c5d762433bf147131b0e',
    measurementId: 'G-684R50TQXS',
  });

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
                <button onClick={() => auth.signOut()}>Sign Out</button>
              )
            }
          </div>
          :
          <div>
            <p style={styleText}>Congrats! You found my Login modal. Uses firebase to authenticate users</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </div>
        }

      </div>
    </div>
  );
};

export default Login;
