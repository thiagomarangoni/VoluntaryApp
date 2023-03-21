import React from "react";
import {TouchableOpacity,Text } from "react-native";
import estilos from "./estilos";

export default function Botao({valor, acao}){
    return <TouchableOpacity onPress={acao} style={estilos.botao}>
        <Text style={estilos.valor}> {valor}</Text>
    </TouchableOpacity>

}