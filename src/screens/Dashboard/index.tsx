import React, { useCallback, useEffect, useState } from 'react';  
import AsyncStorage from '@react-native-async-storage/async-storage' ;

import { useFocusEffect } from '@react-navigation/native'

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

interface HightlightProps {
    amount: string
}

interface HighlightData{
    entries: HightlightProps,
    expensives: HightlightProps,
    total: HightlightProps
}

export function Dashboard(){
  //  const [data, setData] = useState();
  
     
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const [hightLightData, setHightLightData] = useState<HighlightData>({} as HighlightData );
    

    async function loadTransactions() { //busca informações no AsyncStorage para exibir no Dashboard
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey); //pegando transações do Asybnc
        const transactions = response ? JSON.parse(response) : [] //formtando dados se existirem

        let entriesTotal = 0;
        let expensiveTotal = 0;
        

        const transactionsFormatted: DataListProps[] = 
            transactions.map((item :DataListProps)  => {

                if(item.type === 'positive') {
                    entriesTotal += Number(item.amount);
                } else {
                    expensiveTotal += Number(item.amount);
                }


               const amount = Number(item.amount)
               .toLocaleString('pt-BR', { //moeda
                   style: 'currency',
                   currency: 'BRL'
               });

               const date = Intl.DateTimeFormat('pt-BR', {
                   day: '2-digit',
                   month: '2-digit',
                   year: '2-digit'
               }).format(new Date(item.date));

               return {
                   id: item.id,
                   name: item.name,
                   amount,
                   type: item.type,
                   category: item.category,
                   date
               }
        });

        const total = entriesTotal - expensiveTotal;
        setTransactions(transactionsFormatted);
        setHightLightData({
            entries: { //dinheiro entrada
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            expensives: { //dinheiro saida
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            total: {
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            } 
        })
    };

    useEffect(()=> {
        loadTransactions()
    }, []);

    useFocusEffect(useCallback(()=> { 
        loadTransactions(); //recarregamento
    }, []));

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
                <HighlightCard type="up" title="Entradas" amount={hightLightData.entries.amount} lastTransaction='Ultima entrada dia 25 de agosto de 2021'/> 
                <HighlightCard type="down" title="Saidas" amount={hightLightData.expensives.amount} lastTransaction='Ultima saida dia 25 de janeiro'/> 
                <HighlightCard type="total" title="Total" amount={hightLightData.total.amount} lastTransaction='1 a 16 de abril'/> 
            </HighlightCards>   

            <Transactions>
                <Title>Listagem</Title>  
                 
                <TransactionList 
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />  }
              /> 

                
            </Transactions> 
        </Container>
    )
} 