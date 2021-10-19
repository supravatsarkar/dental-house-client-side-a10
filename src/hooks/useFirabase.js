import firebaseAuthentication from "../Pages/Login/FIrebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";

firebaseAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailField = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordField = (e) => {

        if (e.target.value < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        setPassword(e.target.value);
    }
    //sign in using email and password
    const signInUsingEmailPassword = (e) => {
        e.preventDefault();
        if (!(email && password)) {
            return setError('Email or Password may be empty. Please enter carefully');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log('Sign with email and password Success');
                setError('')

            })
            .catch((error) => {
                // ..
                console.log('Error in email and password-', error.message);
                setError(error.message);
            });
    }

    // google sign in 
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log('Sign with Google Success');
                setUser(result.user);
            })
            .catch(error => {
                console.log('Error in google signIn-', error.message);
            })
    }

    // Log Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign-out successful');
                // Sign-out successful.
            }).catch((error) => {
                console.log('Sign-out error-', error.message);

                // An error happened.
            });
    }

    // Observe current login user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, [])

    return {
        signInUsingGoogle,
        logOut,
        user,
        handleEmailField,
        handlePasswordField,
        signInUsingEmailPassword,
        error,
    }
}
export default useFirebase;