import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg'

import { AuthContext } from '../../AuthContext';
                        
import { SignInSocialButton } from '../../components/SigninSocialButton';


import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
} from './styles';
                          
export function SignIn() {  
  const data = useContext(AuthContext); //usando hook useContext para acessa o hock contexto que quer usar
  console.log(data)
  
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
                <FooterWrapper>
                  <SignInSocialButton 
                      title='Entrar com Google'
                      svg={GoogleSvg}
                  />

                  <SignInSocialButton 
                      title='Entrar com Aplle'
                      svg={AppleSvg}
                  />
                </FooterWrapper>
             </Footer>
               
           </Container>
  
      );
     
    }