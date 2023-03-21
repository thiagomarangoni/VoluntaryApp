import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';

export default StyleSheet.create({
  nome: {
    color: cores.cinza,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10
    
  },
  data: {
    color: cores.verdeEscuro,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    margin: 10
  },
  descricao: {
    color: cores.verdeCaixaSelecao,
    fontSize: 14,
    marginRight: 8,
    margin: 10 
  },
  campo: {
    width:380,
    justifyContent: 'flex-start',
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#C1F378',
    borderRadius: 30,
    textAlign: 'center',
    backgroundColor: '#E4F4CD',
    justifyContent: 'center',
    shadowOpacity:0.6,


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
  imagem: {
    padding: 10, 
    margin: 1, 
    height: 10, 
    width: 25, 
    alignItems: 'center',
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
    alignContent:'flex-end',
    flexWrap:'wrap'
  }

});