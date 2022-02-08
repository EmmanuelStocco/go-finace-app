import React from 'react'; 
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'expo-status-bar';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';


import theme from './src/global/styles/theme';

import { Routes } from './src/routes'; 
import { AuthProvider, useAuth } from './src/hooks/auth';//disponibilizaqndo contexto a toda aplicação

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }); //para saber se a fonte está carregando

  const { userStorageLoading } = useAuth();
  

  if(!fontsLoaded || userStorageLoading){//enquanto as fontes ainda não forem carregadas
    return <AppLoading />
  }

  return  (
    <ThemeProvider theme={theme}> 
        <StatusBar  
            backgroundColor="transparent"
            translucent
/>
        <AuthProvider>
          <Routes />
        </AuthProvider> 
      </ThemeProvider>
  )
}
 