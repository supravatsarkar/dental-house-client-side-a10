import firebaseAuthentication from "../Pages/Login/FIrebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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
        const value = e.target.value;
        if (value.length < 6) {
            setError('Password should be at least 6 characters..');
            console.log(e.target.value);
            return;
        }
        setPassword(e.target.value);
        setError('');
    }
    //register using email and password
    const registerUsingEmailPassword = (e) => {
        e.preventDefault();
        if (!(email && password)) {
            return setError('Email or Password may be empty. Please enter carefully');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log('Sign with email and password Success');
                setError('')
                alert('Registration Successful.');

            })
            .catch((error) => {
                // ..
                console.log('Error in email and password-', error.message);
                setError(error.message);
            });
    }

    // sign in using email and password 
    const logInUsingEmailPassword = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('');
                console.log(userCredential.user);
                alert('Log In Successful')
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //password reset email
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                alert('Password reset email sent!')
            })
            .catch((error) => {
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
        registerUsingEmailPassword,
        logInUsingEmailPassword,
        resetPassword,
        error,
    }
}
export default useFirebase;