import React from 'react';
import { categories } from '../../utils/categories';
import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles';
 

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({ data } : Props){
   
    //estamos comparando se a categoria do cartão é igual a key do arqv estatico categories, se for retorna para podermos usar o icone
    const category = categories.filter(
        item => item.key === data.category 
    )[0];

    return(
        <Container>
            <Title>
                {data.name}
            </Title>

            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                { data.amount }
             </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon}/>
                    <CategoryName>
                        {category.name}
                    </CategoryName>
                </Category>

                <Date>
                    {data.date}
                </Date>
            </Footer>
        </Container>
    )
}   