import React, {createContext, useEffect, useState} from "react";
import {FirebaseService} from "../services/firebase.service";
import {User} from "../typescript/interfaces";


interface IAuthContextProviderProps {
  children: React.ReactNode
}

interface IAuthContext {
  user: User | null
}

const AuthContext = createContext<IAuthContext>({user: null});

export const AuthContextProvider = (props: IAuthContextProviderProps) => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    FirebaseService.getAuth()
      .onAuthStateChanged(user => {
        console.log("Auth state changed: ", user);
        setUser(user)
      });

  }, []);


  return (<AuthContext.Provider value={{user: user}}>
    {props.children}
  </AuthContext.Provider>)
}

export default AuthContext;

