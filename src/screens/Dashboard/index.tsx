import React from 'react';  


import { HighlightCard } from '../../components/HighlightCard/index';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

 import {
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo, 
    User,
    HighlightCards,
    UserGreeting,
    UserName,
    Icon,
    Transactions,
    Title,
    TransactionList
} from './styles'; 

export interface DataListProps extends TransactionCardProps{
    id: string;
}

export function Dashboard(){
     
    const data: DataListProps[] =  [
        {   
            id: '1',
            type: 'positive',
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name: 'Vendas',
                icon: 'dollar-sign'
                },
            date:"13/04/2020/"
        },
        {   
            id: '2',
            type: 'negative',
            title:"Hamburgueria e Pizzaria",
            amount:"R$ 52.000,00",
            category:{
                name: 'Alimentação',
                icon: 'coffee'
                },
            date:"12/04/2020/"
        },
    
        {   
            id: '3',
            type: 'negative',
            title:"Alugel do apartamento",
            amount:"R$ 102.000,00",
            category:{
                name: 'Casa',
                icon: 'shopping-bag'
                },
            date:"10/04/2020/"
        }
    ];

    return (
        <Container>
            <Header>
              <UserWrapper> 
                    <UserInfo>
                        <Photo source={{ uri:"https://avatars.githubusercontent.com/u/56724388?v=4" }}/>
                        <User>
                            <UserGreeting> Olá </UserGreeting>
                            <UserName> Emmanuel </UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power"/> 
                </UserWrapper>
             </Header>

            <HighlightCards>
                <HighlightCard type="up" title="Entradas" amount='17.500,00' lastTransaction='Ultima entrada dia 25 de agosto de 2021'/> 
                <HighlightCard type="down" title="Saidas" amount='1.259,00' lastTransaction='Ultima saida dia 25 de janeiro'/> 
                <HighlightCard type="total" title="Total" amount='10.000,00' lastTransaction='1 a 16 de abril'/> 
            </HighlightCards>   

            <Transactions>
                <Title>Listagem</Title>  
                 
                <TransactionList 
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />  }
              /> 

                
            </Transactions> 
        </Container>
    )
} 