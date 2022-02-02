import React, { createContext, ReactNode, useContext} from "react";

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

    return(  
        <AuthContext.Provider value={{ user }}>
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