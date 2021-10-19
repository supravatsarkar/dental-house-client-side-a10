import firebaseAuthentication from "../Pages/Login/FIrebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

firebaseAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

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
    }
}
export default useFirebase;