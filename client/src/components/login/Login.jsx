import React, { useState, useContext } from 'react';

// import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebaseui/dist/firebaseui.css';
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

  const onHover = () => {
    setHover(!hover);
  };

  const uiConfig = {

  };

  return (
    <div style={styleModal}>
      <div style={styleContent}>
        <span autoFocus
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          onClick={() => setLoginParent(false)}
          style={styleClose}
        >
          &times;
        </span>
        <p style={styleText}>Congrats! You found my Login modal. Will be using firebase to authenticate users</p>
        <p style={styleText}>Stay tuned!</p>
      </div>
    </div>
  );
};

export default Login;
