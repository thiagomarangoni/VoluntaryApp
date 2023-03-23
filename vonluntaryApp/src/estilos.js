import { StyleSheet,Platform } from 'react-native';

export default StyleSheet.create({
  safeAreaStyle:
  {
    flex:1,
    backgroundColor: '#E4F4CD',

  },
  preencher: {
    flex: 1,
    justifyContent: "flex-start",
  },
  imagem: {
    padding: 10, 
    margin: 5, 
    height: 25, 
    width: 25, 
    resizeMode: 'stretch', 
    alignItems: 'center', 
    
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4F4CD',
    borderColor: '#C1F378',
    borderRadius: 30,
    margin: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  secaoEventos:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C1F378',
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  retangulo:
  { flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#C1F378',
    borderWidth: 0.5,
    borderColor: '#C1F378',
    borderRadius: 30,
    opacity: 0.75  
  },
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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',

  },
  containerImagemPerfil: {
    marginRight: 10,
    marginBottom: 10,
    marginStart: 10,
    marginTop :10,
    alignItems: 'flex-end'

  },
  imagemdePerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15
  },
  tituloPesquisar: {
    flex:1,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15
  },
  
});


export const cores = {
  preto: '#000000',
  cinza: '#6D7C58',
  verdeEscuro: '#42755D',
  verdeClaroFundo: '#E4F4CD',
  verdeCaixaSelecao: '#108B51',
  

};

