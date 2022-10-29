import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCx0X8_HX3br566RC-aCrTb581JfedPTuU",
    authDomain: "e-rider-87df6.firebaseapp.com",
    projectId: "e-rider-87df6",
    storageBucket: "e-rider-87df6.appspot.com",
    messagingSenderId: "875711598990",
    appId: "1:875711598990:web:a5bf61ac17bf85d88c54df"}




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


