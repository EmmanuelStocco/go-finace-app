import React, { createContext, ReactNode, useContext, useState} from "react";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

console.log(CLIENT_ID)
console.log(REDIRECT_URI)

//let CLIENT_ID = "978659469104-fe5un8s45f7gcj5cr0qs8vfj87kcrs6l.apps.googleusercontent.com"
//let REDIRECT_URI = "https://auth.expo.io/@emmanuel_stocco/gofinance"

import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from "expo-apple-authentication";
import { AsyncStorage } from "react-native";

interface AuthProviderProps{
    children: ReactNode; //tipagem para elemento filho
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string | undefined;
}

//tipando conteudo que o estado vai armazenar
interface IAuthContextData {
    user: User;
    signInWithGoogle(): Promise<void>;
    signInWithApple(): Promise<void>;
};


interface AuthorizationResponse {
    params: {
        access_token: string;
    };
    type: string;
}

const userStorageKey = '@gofinances:user'; 
 
//preciso passar um valor inicial
export const AuthContext = createContext({} as IAuthContextData);

//exportando contexto e função de uma vez 
//passando <SignIn /> como children
function AuthProvider({ children } :AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);

    //autenticando aplicação 
    async function signInWithGoogle() {
            try { 
                const RESPONSE_TYPE = 'token';
                const SCOPE =  encodeURI('profile email');

                const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

                const { type, params }= await AuthSession
                .startAsync({ authUrl }) as AuthorizationResponse

                if(type === 'success'){
                    const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
                    const userInfo = await response.json();
                    console.log(userInfo)
                    setUser({
                        id: userInfo.id,
                        email: userInfo.email,
                        name: userInfo.given_name,
                        photo: userInfo.picture
                    });
                    console.log(user)
                    
                }
                
            } catch(error){ 
                throw new Error();
            };
    }

    async function signInWithApple() {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL
            ]
          })
    
          if (credential) {
            const userLogged = {
              id: String(credential.user),
              email: credential.email!,
              name: credential.fullName!.givenName!,
            }
    
            setUser(userLogged);
            await AsyncStorage.setItem('@gofinances:user', JSON.stringify(userLogged))
          }
        } catch (error) {
          throw new Error();
        }
      }

    return(  
        <AuthContext.Provider value={{ user, signInWithGoogle, signInWithApple  }}>
            {children}
        </AuthContext.Provider>
    )
}

//transformando contexto em hook
function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth}