import React from 'react';
import { BaseButton } from 'react-native-gesture-handler';                        
import { SvgProps } from 'react-native-svg';

interface Props extends BaseButton {
    title: string;
    svg: React.FC<SvgProps>   
}

import {
    Container,
    Button,
    ImageContainer,
    Text,
} from './styles';
                          
export function SignInSocialButton({
    title,
    svg: Svg,
    ...rest
} :Props){
                          
   return (
     
           <Button  {...rest}>
                <ImageContainer>
                    <Svg />
                </ImageContainer>     

                <Text>
                    {title}
                </Text>
            </Button> 
  
      );
     
    }