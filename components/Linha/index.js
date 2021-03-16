import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Linha = ({item}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={()=> {navigation.navigate('Detalhes', item) }}
        onLongPress={()=> {navigation.navigate('Edit', item) }}
        >
            <View style={styles.conteudo}>
                <Image
                    style={styles.imagem}
                    source={{uri: item.image}}
                />
                <View>
                    <Text style={styles.titulo}>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text style={styles.preco}> {item.price}</Text>
                    <Rating 
                        startingValue={item.rating}
                        readonly
                        
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}


export { Linha };