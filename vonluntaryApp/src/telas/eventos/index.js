import React from "react";
import Item from "./item";
import {SafeAreaView, StatusBar, Text, FlatList } from "react-native"; //StatusBar - Para Android / SafeAreaView - IOS

const eventos = [
    {
        id:1,
        nome: "Coleta de lixo na Praia",
        dataEvento: "29/05/2023",
        descricao: "Será realizada coleta de lixo, na praia do Gonzada. "
    },
    {
        id:2,
        nome: "Arrecadação de casacos",
        dataEvento: "20/04/2023",
        descricao: "Arrecadação de casacos para a instituição Fofas da Rua. "
    }
  
];

export default function Eventos() 
{
return <SafeAreaView> 
    <StatusBar />
    <Text> Eventos </Text>
    <FlatList  
     data={eventos}
     renderItem = {({item}) => <Item {...item} /> }
     keyExtractor ={({id}) => String(id)}
     />
     </SafeAreaView>

    
   
}