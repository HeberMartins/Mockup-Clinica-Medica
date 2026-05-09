import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoVoltar: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  hora: {
    fontSize: 18,
    fontWeight: '800',
  },
  paciente: {
    fontSize: 16,
    fontWeight: '600',
  },
  tipo: {
    fontSize: 12,
    marginTop: 2,
  },
  botaoAtender: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});