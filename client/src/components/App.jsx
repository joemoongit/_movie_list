import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import Search from './Search';

const App = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyCiUZTNXnWCQ9dZNv31-umWmLT7xERGXGQ',
    authDomain: 'movielist-c571a.firebaseapp.com',
    projectId: 'movielist-c571a',
    storageBucket: 'movielist-c571a.appspot.com',
    messagingSenderId: '835979508747',
    appId: '1:835979508747:web:b1c5d762433bf147131b0e',
    measurementId: 'G-684R50TQXS',
  });

  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
