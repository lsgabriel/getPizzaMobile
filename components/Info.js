import React from 'react';
import { View, Text} from 'react-native';

//operador ternario -> condição ? valor_se_verdade : valor_se_falso
// <Text style={props.estilo}>Informações - {props.valor}</Text>

const Info = ({valor, estilo}) => {
    return(
        <View>
            <Text style={estilo}>Informações - {valor ? valor : 'Elis Regina'}</Text>
        </View>
    );
}

export default Info;
/*
    props:{
        valor: "gabriel",
        estilo: cor
    }
*/