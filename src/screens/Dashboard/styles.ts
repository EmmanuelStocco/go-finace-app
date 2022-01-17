import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize' //lib para conversão e proporção 

export const Container  = styled.View`
    flex: 1; 
    background-color: ${({ theme })=> theme.colors.background}; //desistruturação, pegando global
`;
 
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}; 
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
`;