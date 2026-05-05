import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 40, paddingBottom: 20, backgroundColor: '#ffffff',
    borderBottomWidth: 1, borderBottomColor: '#ddd'
  },
  botaoVoltar: { width: 80 },
  textoVoltar: { color: '#007bff', fontWeight: 'bold' },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  content: { padding: 20 },
  subtitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#444' },
  listaContainer: { marginBottom: 20 },
  cardConsulta: {
    backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10,
    borderWidth: 1, borderColor: '#ccc'
  },
  cardSelected: { borderColor: '#007bff', backgroundColor: '#e6f2ff' },
  textoPaciente: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  textoDetalhe: { fontSize: 14, color: '#666' },
  formSection: { marginTop: 10 },
  inputGroup: { marginBottom: 15 },
  inputLabel: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  inputField: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc',
    borderRadius: 8, padding: 12, fontSize: 16
  },
  textArea: { height: 80, textAlignVertical: 'top' },
  saveButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});