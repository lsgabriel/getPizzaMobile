import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import useAuth from '../../hooks/useAuth';

const Linha = ({item}) => {
    const auth = useAuth();
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={()=> {navigation.navigate('Detalhes', item) }}
        onLongPress={() => auth.type == 'admin' ? navigation.navigate('Edit', item) : null}
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