// eslint-disable react/prop-types 
import PropTypes from  'prop-types'
import { createContext, useEffect, useState } from 'react'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../Firebase.config'
import axios from 'axios'


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    


    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth,  googleProvider  )
    }


    const signInWithGithub = () => {
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
    }


    const logOut = async () => {
      setLoading(true)
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true
        });
        await signOut(auth)
      }
       catch (error) {
        console.error(error)
      }
    };

    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
    }



      // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email:userEmail}
      setUser(currentUser)
      if(currentUser){
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {withCredentials:true})
        .then(res=>{
          console.log(res.data)
        })
      }
      else{
        axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {withCredentials:true})
        .then(res=>{
          console.log(res.data)
      })}
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [user?.email])



const AuthInfo={
  user,
  setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    signInWithGithub
}

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider


AuthProvider.propTypes={
    children:PropTypes.node
}