

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import AuthContext from './Authcontext';
import { useEffect, useState } from 'react';
import auth from '../Firebase/firebase';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] = useState(true)

    const createuser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user 
    const signinuser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
       //sign out user
    const signOutuser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    //sign in with goole

const googlesignin = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            // it keeps hold the user data.
            // console.log('state captured', currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authinfo ={

        user,
        loading,
        createuser,
        signinuser,
        signOutuser,
        googlesignin 
    }

    return (
       <AuthContext.Provider value={authinfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default Authprovider;