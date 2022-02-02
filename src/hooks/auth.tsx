import React, { createContext, ReactNode, useContext} from "react";
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps{
    children: ReactNode; //tipagem para elemento filho
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

//tipando conteudo que o estado vai armazenar
interface IAuthContextData {
    user: User;
    signInWithGoogle(): Promise<void>;
}


//preciso passar um valor inicial
export const AuthContext = createContext({} as IAuthContextData);

//exportando contexto e função de uma vez 
//passando <SignIn /> como children
function AuthProvider({ children } :AuthProviderProps) {
    const user = {
        id: '1231231',
        name: 'Emmanuel Stocco',
        email: 'emmanuel@email.com'
    };

    //autenticando aplicação 
    async function signInWithGoogle() {
            try {
                const CLIENT_ID = '978659469104-fe5un8s45f7gcj5cr0qs8vfj87kcrs6l.apps.googleusercontent.com';
                const REDIRECT_URI = 'https://auth.expo.io/@emmanuel_stocco/gofinance';
                const RESPONSE_TYPE = 'token';
                const SCOPE =  encodeURI('profile email');

                const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

                const response = await AuthSession.startAsync({ authUrl })
                console.log(response)
  
            } catch(error){ 
                throw new Error();
            };
    }

    return(  
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
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