import { Poppins_100Thin } from '@expo-google-fonts/poppins';
import React from 'react';
import { FlatList } from 'react-native';
 import { categories } from '../../utils/categories';
import {
     Container,
     Header,
     Title,
     Category,
     Icon,
     Name,
     Separator,
     ButtonText,
     Footer,
     Button

     } from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: string;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;

}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}:Props){
    return(
        <Container>
            <Header>
                <Title> Categoria </Title>
            </Header>

        <FlatList
            data={categories}
            style={{ flex: Poppins_100Thin, width: '100%'}}
            renderItem={({ item }) => (
                <Category>
                    <Icon name={item.icon} />
                    <Name> {item.name} </Name>
                </Category>
            )}
            ItemSeparatorComponent={()=> <Separator/>}
                    />

            <Footer>
                <ButtonText>Selecionar</ButtonText>
            </Footer>

        </Container>
    )
}