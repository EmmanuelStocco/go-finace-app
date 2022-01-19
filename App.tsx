import React from 'react'; 
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
 

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';


import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

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
      <NavigationContainer> 
        <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
  )
}
 