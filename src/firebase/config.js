import {initializeApp} from 'firebase/app';
import { getFirestore,Timestamp} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "###",
    authDomain: "###",
    projectId: "###",
    storageBucket: "###",
    messagingSenderId: "###",
    appId: "###"
  };
  initializeApp(firebaseConfig)
  const db=getFirestore()
  const timestamp=Timestamp.now().toDate()
  export {db,timestamp}