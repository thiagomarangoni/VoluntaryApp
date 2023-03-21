import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';

export default StyleSheet.create({
  informacao: {
    padding: 24
  },
  nome: {
    color: cores.cinza,
    fontWeight: 'bold',
    fontSize: 14,
    margin: 10
    
  },
  data: {
    color: cores.verdeEscuro,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    margin: 4
  },
  descricao: {
    color: cores.verdeCaixaSelecao,
    fontSize: 14,
    marginRight: 8,
    margin: 10
    
    
  },
  campo: {
    justifyContent: 'center',
    margin: 10,
    flex:1,
    height: 100,
    borderWidth: 0.5,
    borderColor: '#C1F378',
    height: 100,
    borderRadius: 30,
    textAlign: 'center',
    margin :10,
    backgroundColor: '#E4F4CD',
    justifyContent: 'center'

  },
  divisor: {
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza,
  },
  local:
  {
    textAlign: 'right',
    marginHorizontal :30,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  }, 
  imagem: {
    padding: 10, 
    margin: 1, 
    height: 10, 
    width: 25, 
    alignItems: 'left',
    
 
  },
  secaoPessoas: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',

  },
  contador:
  {
    color: cores.verdeCaixaSelecao,
    fontSize: 10,
    textAlign: 'right',
  }
  


});