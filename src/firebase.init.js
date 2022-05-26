// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRGu--mMh5KuEgwiuoUzI0rugASjrMicg',
  authDomain: 'manufacturer-website-740a2.firebaseapp.com',
  projectId: 'manufacturer-website-740a2',
  storageBucket: 'manufacturer-website-740a2.appspot.com',
  messagingSenderId: '861691778032',
  appId: '1:861691778032:web:6f206ea6a70e3fd3de0335',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
