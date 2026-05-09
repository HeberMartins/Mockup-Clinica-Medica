import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50, // Ajustado para entalhes de tela (notch)
    paddingBottom: 20,
    borderBottomWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 80,
  },
  textoVoltar: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});