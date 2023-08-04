import {initializeApp} from 'firebase/app';
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAo94FG5XQr5zjnLGlldY20G--0h_GB7CI",
    authDomain: "company-registation.firebaseapp.com",
    projectId: "company-registation",
    storageBucket: "company-registation.appspot.com",
    messagingSenderId: "573928954464",
    appId: "1:573928954464:web:b3e0311b5d08e3538b0105"
  };
  initializeApp(firebaseConfig)
  const db=getFirestore()
  export {db}