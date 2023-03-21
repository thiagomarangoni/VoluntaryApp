import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  preencher: {
    flex: 1,
    justifyContent: "space-between",
  


  },
  safeA:
  {
    flex:1,
    backgroundColor: '#E4F4CD',
  },
  titulo:
  { fontWeight:'bold',
    fontSize: 24,
    fontStyle: 'normal',
    margin: 25,
    textAlign:'left',
    
  },
  imagem: {
    padding: 10, 
    margin: 5, 
    height: 25, 
    width: 25, 
    resizeMode: 'stretch', 
    alignItems: 'center', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity:0.6,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4F4CD',
    borderColor: '#C1F378',
    borderRadius: 30,
    margin: 20,
    shadowColor:0.6,
  },
  secaoEventos:
  {
      
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C1F378',
    borderRadius: 30,
    shadowColor:0.6,

  },

  secaoImagem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  retangulo:
  { flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#C1F378',
    borderWidth: 0.5,
    borderColor: '#C1F378',
    borderRadius: 30,
    opacity: 0.75  },
  imagemdePerfil:
  {
    padding: 25, 
    margin: 5, 
    height: 25, 
    width: 25, 
    resizeMode: 'stretch', 
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    borderRadius: 200 / 2,
    shadowOpacity:0.6

    
  },
  containerImagemPerfil:
  {
    flexDirection:'row-reverse',
    position:'absolute',
    marginLeft:340,
    marginTop:50,
    shadowOpacity:0.3


  },
  
});


export const cores = {
  preto: '#000000',
  cinza: '#6D7C58',
  verdeEscuro: '#42755D',
  verdeClaroFundo: '#D5F7E7',
  verdeCaixaSelecao: '#108B51',

};

