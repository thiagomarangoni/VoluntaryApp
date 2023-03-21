import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  preencher: {
    flex: 1,
  },
  safeA:
  {
    flex:1,
    backgroundColor: '#E4F4CD',

  },
  titulo:
  {
    fontSize: 24,
    fontStyle: 'normal',
    margin: 20,
    
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
    margin: 10,
  
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4F4CD',
    borderWidth: 0.5,
    borderColor: '#C1F378',
    height: 40,
    borderRadius: 30,
    margin: 10,
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
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#C1F378',
    borderWidth: 0.5,
    borderColor: '#C1F378',
    height: 300,
    borderRadius: 30,
  },
  imagemdePerfil:
  {
    padding: 19, 
    margin: 5, 
    height: 25, 
    width: 25, 
    resizeMode: 'stretch', 
    flexDirection: 'row-reverse',
  }
  
});


export const cores = {
  preto: '#000000',
  cinza: '#6D7C58',
  verdeEscuro: '#42755D',
  verdeClaroFundo: '#D5F7E7',
  verdeCaixaSelecao: '#108B51',

};

