import React from "react";
import {Text, View,Image } from "react-native";
import estilos from "./estilos"

export default function Item({nome, dataEvento, descricao,localEvento,contPessoas})
{
    return <View style={estilos.container}>
    <View style={estilos.campo}>
        <View View style={estilos.secaoPessoas}>
        <Text style={estilos.nome}>{nome}</Text>
    <Image
             source={require('/Users/Thiago Marangoni/Desktop/Alura/vonluntaryApp/assets/pessoas.png')}
            style={estilos.imagem}/>
    <Text style={estilos.contador}>{contPessoas}</Text>
          </View>
    <Text style= {estilos.data}>{dataEvento}</Text>
    <Text style={estilos.descricao}>{descricao}</Text>
    </View>
    <Text style={estilos.local}>{localEvento}</Text>
    </View>
}