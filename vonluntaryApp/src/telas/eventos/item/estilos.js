import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';

export default StyleSheet.create({
  informacao: {
    padding: 24
  },
  nome: {
    color: cores.preto,
    fontWeight: 'bold',
    fontSize: 16,
  },
  data: {
    color: cores.verdeEscuro,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  descricao: {
    color: cores.verdeCaixaSelecao,
    fontSize: 16,
    marginRight: 8,
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza,
  }

});