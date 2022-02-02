import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert, StyleSheet } from 'react-native';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg'
                       
import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SigninSocialButton'; 
import { TouchableOpacity, Text, View, Image } from 'react-native';
// const { CLIENT_ID } = process.env;
// const { REDIRECT_URI } = process.env;


import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
    ImageContainer
} from './styles';  

export function SignIn() {  
  const { signInWithGoogle, signInWithApple } = useAuth(); //usando hook useContext para acessa o hock contexto que quer usar

  async function handleSignInWithGoogle() {
    console.log('chamou google')  
    try { 
        await signInWithGoogle(); 
    } catch (error) { 
      console.log(error);
      Alert.alert('Não foi possivel conectar a uma conta google ');
    }
  } 

  async function handleSignInWithApple() {
    console.log('chamou apple')  
    try { 
        await signInWithApple(); 
    } catch (error) { 
      console.log(error);
      Alert.alert('Não foi possivel conectar a conta Apple');
    }
  } 

   return (
     
           <Container>
             <Header>
               <TitleWrapper>
                  <LogoSvg 
                    width={RFValue(200)}
                    height={RFValue(70)}
                  />
                  <Title> 
                    Controle suas {'\n'}
                     finanças de forma  {'\n'}
                      muito simples
                  </Title>
               </TitleWrapper>

               <SignInTitle>
                 Faça seu Login com{'\n'}
                 uma das contas abaixo
               </SignInTitle>
             </Header>
             
             <Footer>  
                  <View style={estilo.container}  >
                    <TouchableOpacity  
                        
                        onPress={handleSignInWithGoogle}  
                        style={estilo.button}  
                    >  
                        <Text>Entrar com Google</Text>  
                    </TouchableOpacity>   




                    <TouchableOpacity  
                        onPress={handleSignInWithApple} 
                        style={estilo.button}   
                    > 
                        <Text>Entrar com Apple </Text>  
                    </TouchableOpacity>   
                </View>
             </Footer>  

           </Container>
  
      );
     
    }

    const estilo = StyleSheet.create({
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,
        margin: 10,
        borderRadius: 4,
        fontStyle: 'italic',  
        
      }, 
      container: {
        flex: 2,
        justifyContent: "center",
        paddingHorizontal: 5,
        marginBottom: 150
      },
      stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
      },
    })
    