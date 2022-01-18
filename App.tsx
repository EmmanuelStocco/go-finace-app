import React from 'react'; 
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { Register } from './src/screens/Register';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';


import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import { loadAsync } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }); //para saber se a fonte está carregando

  if(!fontsLoaded){//enquanto as fontes ainda não forem carregadas
    return <AppLoading />
  }

  return  (
    <ThemeProvider theme={theme}>
        <Register/>
      </ThemeProvider>
  )
}
 