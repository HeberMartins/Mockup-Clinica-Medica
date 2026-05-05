import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#f0f4f8' },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 40, paddingBottom: 20, backgroundColor: '#ffffff',
    borderBottomWidth: 1, borderBottomColor: '#ddd'
  },

  botaoVoltar: { width: 80, padding: 8 },

  textoVoltar: { color: '#007bff', fontWeight: 'bold' },

  titulo: { fontSize: 18, fontWeight: 'bold', color: '#333' },

  content: { padding: 20 },
  
  subtitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#444' },
  listaContainer: { marginBottom: 20 },
  cardConsulta: {
    backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10,
    borderWidth: 1, borderColor: '#ccc'
  },
  cardSelected: { borderColor: '#dc3545', backgroundColor: '#fff5f5' }, 
  textoPaciente: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  textoDetalhe: { fontSize: 14, color: '#666' },
  textoVazio: { textAlign: 'center', color: '#888', marginTop: 20 },
  motivoSection: { 
    marginTop: 10, padding: 15, backgroundColor: '#ffffff', 
    borderRadius: 8, borderWidth: 1, borderColor: '#ddd' 
  },
  subtitleMotivo: { fontSize: 14, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  botoesMotivoContainer: { flexDirection: 'column', gap: 10, marginBottom: 20 },
  botaoMotivo: {
    padding: 12, borderRadius: 6, borderWidth: 1, borderColor: '#ccc', alignItems: 'center'
  },
  botaoMotivoAtivo: { backgroundColor: '#dc3545', borderColor: '#dc3545' },
  textoBotaoMotivo: { color: '#555', fontWeight: '500' },
  textoBotaoMotivoAtivo: { color: '#fff', fontWeight: 'bold' },
  btnConfirmarCancelamento: {
    backgroundColor: '#343a40', padding: 15, borderRadius: 8, alignItems: 'center'
  },
  textoBtnConfirmar: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});