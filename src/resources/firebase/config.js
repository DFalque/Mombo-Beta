// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore/lite"

export const firebaseConfig = {
	apiKey: "AIzaSyD56UoeqkcqnP10SqtrALO4xE54ww4lgUg",
	authDomain: "mombo-beta.firebaseapp.com",
	projectId: "mombo-beta",
	storageBucket: "mombo-beta.appspot.com",
	messagingSenderId: "49807962322",
	appId: "1:49807962322:web:7bbc87ae8641c391ac7d0b",
	measurementId: "G-W9KSW447VG",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)

export default db
