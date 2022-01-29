import React from 'react';
import { HistoryCard } from '../../components/HistoryCar';

import {
    Container,
    Header,
    Title

} from './styles'

export function Resume (){
    return (
        <Container>
            <Header>
                <Title> teste    </Title>
            </Header>

        <HistoryCard 
            title='compras'
            amount='100'
            color='red'
        />

        </Container>
    )
}