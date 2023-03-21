import React from "react";
import Item from "./item";
import estilos from "../../estilos";
import Botao from "../../componentes/botao";
import {SafeAreaView, StatusBar, Text, FlatList,TextInput, View,Image } from "react-native"; //StatusBar - Para Android / SafeAreaView - IOS


const eventos = [
    {
        id:1,
        nome: "Coleta de lixo na Praia",
        dataEvento: "29/05/2023",
        localEvento: "Santos -SP",
        descricao: "Será realizada coleta de lixo, na praia do Gonzaga. ",
        contPessoas: 15
    },
    {
        id:2,
        nome: "Arrecadação de casacos",
        dataEvento: "20/04/2023",
        localEvento: "Santos -SP",
        descricao: "Arrecadação de casacos para a instituição Fofas da Rua. ",
        contPessoas: 30

    },
    {
        id:3,
        nome: "Visitar casa de repouso",
        dataEvento: "30/04/2023",
        localEvento: "Praia Grande -SP",
        descricao: "Visita a casa de repouso ",
        contPessoas: 4

    }
  
];

export default function Eventos() //lista eventos
{
return <SafeAreaView style ={estilos.safeA}> 
    <StatusBar/>

    <View style={estilos.containerImagemPerfil}>
        <Image source={require('../../../assets/imagemPerfil.png')}
            style={estilos.imagemdePerfil}/>
    </View>


    <Text style={estilos.titulo}> 
    Pesquisar eventos 
        </Text>

    <View View style = {estilos.retangulo}>

        <View View style={estilos.container}>
            <View View style={estilos.section}>
                <Image
                source={require('../../../assets/lupa.png')}
                style={estilos.imagem}
                />
                <TextInput
                style={{flex: 1}}
                placeholder="Pesquisar evento" />
            </View>
        </View>
    
        <Text style={estilos.titulo}>
            Eventos:
            </Text>
        <View View style = {{flex:5}}>   
            <FlatList 
                data={eventos}
                renderItem = {({item}) => <Item {...item} /> }
                keyExtractor ={({id}) => String(id)}
                acao={() => {}} />
                </View>
    </View>
</SafeAreaView>

 

}