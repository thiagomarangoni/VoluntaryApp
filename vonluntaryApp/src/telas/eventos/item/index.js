import React from "react";
import { view, Text, View } from "react-native";
import estilos from './estilos'

export default function Item({nome, dataEvento, descricao})
{
    return <View style={estilos.informacao}>
    <Text style={estilos.nome}>{nome}</Text>
    <Text style= {estilos.data}>{dataEvento}</Text>
    <Text style={estilos.descricao}>{descricao}</Text>
    
    <View style={estilos.divisor}/>
    </View>

}