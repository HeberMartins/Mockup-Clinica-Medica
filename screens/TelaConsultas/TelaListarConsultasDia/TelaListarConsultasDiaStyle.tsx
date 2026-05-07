import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 3,
  },
  hora: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  paciente: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '600',
  },
  tipo: {
    fontSize: 12,
    color: '#64748b',
  },
  botaoAtender: {
    backgroundColor: '#16a34a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});