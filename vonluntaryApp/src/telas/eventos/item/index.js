import React from "react";
import {Text, View,Image } from "react-native";
import Botao from "../../../componentes/botao";
import estilos from "./estilos"

export default function Item({nome, dataEvento,localEvento,contPessoas})
{
    return <Botao valor = 
    <View style={estilos.Botao}>
        <View style={estilos.campo}>
                <View View style={estilos.secaoPessoas}>
                    <Text style={estilos.nome}>{nome}</Text>
                    <Image
                        source={require('../../../../assets/pessoas.png')}
                        style={estilos.imagem}
                        />
                    <Text style={estilos.contador}>{contPessoas}</Text>
                </View>
            <Text style= {estilos.data}>{dataEvento}</Text>
        </View>
            <Text style={estilos.local}>{localEvento}</Text>
    </View>
    acao={() => {}} />
}