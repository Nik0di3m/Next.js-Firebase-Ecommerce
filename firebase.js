import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: 'AIzaSyBEYrH88iULvlwAmUzM-SVGy49lrdPMYsI',

    authDomain: 'fireshop-8862a.firebaseapp.com',

    projectId: 'fireshop-8862a',

    storageBucket: 'fireshop-8862a.appspot.com',

    messagingSenderId: '901847383037',

    appId: '1:901847383037:web:5a75be786b8320f8d9f794',

    measurementId: 'G-ZLXL4CTK9C',
}

export default function app() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}
