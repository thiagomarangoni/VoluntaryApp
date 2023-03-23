import React from "react";
import Item from "./item";
import estilos from "../../estilos";
import {SafeAreaView, StatusBar, Text, FlatList,TextInput, View,Image  } from "react-native"; //StatusBar - Para Android / SafeAreaView - IOS
const eventos = [
    {
        id:1,
        nome: "Coleta de lixo na Praia",
        dataEvento: "29/05/2023",
        localEvento: "Santos -SP",
        contPessoas: 15
    },
    {
        id:2,
        nome: "Arrecadação de casacos",
        dataEvento: "20/04/2023",
        localEvento: "Santos -SP",
        contPessoas: 30

    },
    {
        id:3,
        nome: "Visitar casa de repouso",
        dataEvento: "30/04/2023",
        localEvento: "Praia Grande -SP",
        contPessoas: 4

    }
  
];

export default function Eventos() //lista eventos
{
return <SafeAreaView style ={estilos.safeAreaStyle}> 
    <StatusBar/>
    
    <View style={estilos.container}>
      <View style={estilos.containerImagemPerfil}>
        <Image source={require('../../../assets/imagemPerfil.png')} style={estilos.imagemdePerfil} />
      </View>
      <Text style={estilos.tituloPesquisar}>Pesquisar eventos</Text>
    </View>

    <View View style = {estilos.retangulo}>

        <View View style={estilos.container}>
            <View View style={estilos.section}>
                <Image
                source={require('../../../assets/lupa.png')}
                style={estilos.imagem}
                />
                <TextInput
                style={estilos.preencher}
                placeholder="Pesquisar evento" />
            </View>
        </View>

    <View View style = {estilos.preencher}>   
        <Text style={estilos.titulo}>
            Eventos:
        </Text>

            <FlatList 
                data={eventos}
                renderItem = {({item}) => <Item {...item} /> }
                keyExtractor ={({id}) => String(id)}
                acao={() => {}} />
                </View>
    </View>
</SafeAreaView>
}