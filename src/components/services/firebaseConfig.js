import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAwavc0u0CqBgwX4zUWnDZngnJWaSRWthY",
    authDomain: "proyectofinalestabreezequiel.firebaseapp.com",
    projectId: "proyectofinalestabreezequiel",
    storageBucket: "proyectofinalestabreezequiel.appspot.com",
    messagingSenderId: "1050447157206",
    appId: "1:1050447157206:web:d41c711d5945773b64f677",
    measurementId: "G-1WHP0ENQ81"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)