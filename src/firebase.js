import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase with your project configuration
const firebaseConfig =
{
    apiKey: "AIzaSyB3goVOenK2XnZWqhUq8MXkblyXWy52Ofo",
    authDomain: "todolist-b74f1.firebaseapp.com",
    projectId: "todolist-b74f1",
    storageBucket: "todolist-b74f1.appspot.com",
    messagingSenderId: "722204392670",
    appId: "1:722204392670:web:f608d14b534f32a741564f"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth }; // Export auth for authentication functionality
