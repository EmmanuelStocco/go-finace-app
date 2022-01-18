import React from 'react';
import { TextInputProps } from 'react-native';

import {Container} from './styles';

type Props = TextInputProps;

//pegando todas as props do text input
export function Input({...rest}: Props) {
    return (
        <Container {...rest} />
    )
}