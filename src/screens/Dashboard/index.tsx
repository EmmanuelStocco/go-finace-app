import React, { useEffect, useState } from 'react';  

import AsyncStorage from '@react-native-async-storage/async-storage' ;
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
    TransactionList,
    LogoutButton
} from './styles'; 

export interface DataListProps extends TransactionCardProps{
    id: string;
}

export function Dashboard(){
  //  const [data, setData] = useState();
     
    const [data, setData] = useState<DataListProps[]>([]);

    async function loadTransactions() {
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : []

        const transactionsFormatted: DataListProps[] = 
            transactions.map((item :DataListProps)  => {
               const amount = Number(item.amount)
               .toLocaleString('pt-BR', {
                   style: 'currency',
                   currency: 'BRL'
               })      
        });
    }

    useEffect(()=> {

    }, [])

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
                    
                    <LogoutButton onPress={() => {}}>
                        <Icon name="power"/> 
                    </LogoutButton>
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