import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  scrollContent: { padding: 20 },
  label: { color: '#333333', fontSize: 14, fontWeight: 'bold', marginBottom: 6 },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    color: '#333333',
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  containerBotoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  botao: { flex: 1, padding: 15, borderRadius: 8, alignItems: 'center', marginHorizontal: 5 },
  botaoCancelar: { backgroundColor: '#dc3545' }, 
  botaoSalvar: { backgroundColor: '#0d6efd' }, 
  textoBotao: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});