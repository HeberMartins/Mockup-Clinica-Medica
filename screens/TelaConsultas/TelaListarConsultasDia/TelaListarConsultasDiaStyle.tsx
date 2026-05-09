import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 45,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  botaoVoltar: {
    padding: 8,
  },
  textoVoltar: {
    color: '#0284c7',
    fontSize: 14,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  infoContainer: {
    flex: 1,
  },
  hora: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0284c7',
    marginBottom: 2,
  },
  paciente: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
  },
  tipo: {
    fontSize: 12,
    color: '#64748b',
    textTransform: 'uppercase',
    marginTop: 2,
  },
  botaoAtender: {
    backgroundColor: '#059669', // Verde para indicar ação positiva de início
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});