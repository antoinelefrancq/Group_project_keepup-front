
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyD4FvV0zgV0pAbGiiErj3-vMVP188QMUqk',
  authDomain: 'keepup-oclock.firebaseapp.com',
  projectId: 'keepup-oclock',
  storageBucket: 'keepup-oclock.appspot.com',
  messagingSenderId: '638597934499',
  appId: '1:638597934499:web:4be0258f53873519de7e16'
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);