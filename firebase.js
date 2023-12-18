import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5KxsZuijYwGU5NVU8fBz-VJ0VNAO46TQ",
  authDomain: "marvel-next.firebaseapp.com",
  projectId: "marvel-next",
  storageBucket: "marvel-next.appspot.com",
  messagingSenderId: "916278816898",
  appId: "1:916278816898:web:e2fb6ae7633640c5c8449b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
