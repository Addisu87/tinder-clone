// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCijsIcpn7KvcxZgiyaG7N77TFiW0ziewM',
	authDomain: 'tinder-clone-d449b.firebaseapp.com',
	projectId: 'tinder-clone-d449b',
	storageBucket: 'tinder-clone-d449b.appspot.com',
	messagingSenderId: '181358129329',
	appId: '1:181358129329:web:432611ff78348f2281b290'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
