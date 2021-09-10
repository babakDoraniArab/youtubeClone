import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU-VDyU5uGIEwNOfN21zFuQOoKGxYkZvQ",
  authDomain: "ytb-bablido.firebaseapp.com",
  projectId: "ytb-bablido",
  storageBucket: "ytb-bablido.appspot.com",
  messagingSenderId: "854650259615",
  appId: "1:854650259615:web:3c1cc6c5764adc12c7faaa",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
