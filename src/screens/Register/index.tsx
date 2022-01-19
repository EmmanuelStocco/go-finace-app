import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form'

import  { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/inputForm'
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import {
     Container,
     Header,
     Title,
     Form,
     Fields,
     TransactionTypes

} from './styles';



export function Register(){
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen ] = useState(false);
 
    
    //
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit
    } = useForm();

    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal (){
        setCategoryModalOpen(true)
    }

    function handleCloseSelectCategoryModal (){
        setCategoryModalOpen(false)
    }

    
    type FormData = {
        [name: string]: any;
      }
      
      function handleSubmitRegister(form: FormData) { 
          if(!transactionType) {
            return console.log('Selecione o tipo de transação');
          }
      
          if(category.key === 'category') {
            return console.log('Selecione a categoria');
          }
      
          const dataFormRegister = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
          }
          console.log('Log: dataFormRegister', dataFormRegister)
        }

  
 

    return (
        <Container>
              <Header>
                    <Title> Cadastro </Title>  
                </Header>  

                <Form>
                    <Fields>
                        <InputForm
                            name="name"
                            control={control}
                            placeholder='nome' 
                        />
                        <InputForm
                             name="amount"
                             control={control}
                            placeholder='Preço' 
                        /> 
                        <TransactionTypes>
                            <TransactionTypeButton
                                type="up"
                                title="Income"
                                onPress={() => handleTransactionsTypeSelect('up')}
                                isActive={transactionType === 'up' } 
                            />
                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionsTypeSelect('down')}
                                isActive={transactionType === 'down' }
                            />
                        </TransactionTypes>

                        <CategorySelectButton
                         title={category.name}
                         onPress={handleOpenSelectCategoryModal}
                          />
                    </Fields>

                    <Button 
                            title="Enviar"
                            onPress={handleSubmit(handleSubmitRegister)}
                        />

                    <Modal visible={categoryModalOpen}>
                        <CategorySelect 
                            category = {category}
                            setCategory ={setCategory}
                            closeSelectCategory = {handleCloseSelectCategoryModal}
                        />
                    </Modal>
 
                      
                </Form>
        </Container>
    );
}