import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Edit = ({route, navigation}) =>{

    const [productName, setProductName] = useState(route.params.name);
    const [productDescription, setProductDescription] = useState(route.params.description);
    const [token, setToken] = useState();

    const saveProduct = async () => {
        try{
            const body = {
                name: productName,
                desc: productDescription
            }
            await api.put(`/products/${route.params.id}`, body, {
                headers: {'x-access-token': token}
            });
            navigation.goBack();
        }
        catch(error){
            console.log(error);
        }
    }

    //delete product
    const deleteProduct = async () => {
        try{
            await api.delete(`/products/${route.params.id}`,{
                headers: {'x-access-token': token}
            });
            navigation.goBack();
        }
        catch(error){
            console.log(error);
        }
    }

    const getToken = async () =>{
        try{
            setToken(await AsyncStorage.getItem('token'));
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getToken();
    }, [])

    return(
        <View>
            <Header/>

            <Input 
                placeholder="Nome do Produto"
                value={productName}
                onChange={(value)=>{setProductName(value.nativeEvent.text)}}
            />

            <Input 
                placeholder="Descrição do Produto"
                value={productDescription}
                onChange={(value)=>{setProductDescription(value.nativeEvent.text)}}
            />

            <Button
                title="Salvar"
                onPress={saveProduct}
            />

            <Button
                title="Apagar Produto"
                onPress={deleteProduct}
                buttonStyle={{marginTop:5, backgroundColor:'red'}}
            />
        </View>
    )
}

export default Edit;