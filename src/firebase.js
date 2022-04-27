import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnBdO14YWE7F_F6JC5rympj1Fd7EcjcuQ',
  authDomain: 'userinfo-2fc5d.firebaseapp.com',
  projectId: 'userinfo-2fc5d',
  storageBucket: 'userinfo-2fc5d.appspot.com',
  messagingSenderId: '1040360277280',
  appId: '1:1040360277280:web:10c649d6bad6dd4eb5c345',
  measurementId: 'G-MT52V7TND7',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
