
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { createContext, useEffect, useState } from "react";


import app from "./firebase.init";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // signIn google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    // observation setup
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("current user--->", currentUser)
            setLoading(false)

            return () => {
                unSubscriber();
            }

        })
    }, [])

    const authInfo = {
        user,
        setUser,
     
        loading,
        signInWithGoogle
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;