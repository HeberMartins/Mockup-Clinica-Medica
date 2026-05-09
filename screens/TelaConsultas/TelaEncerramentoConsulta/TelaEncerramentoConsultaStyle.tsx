import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
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
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  content: {
    padding: 16,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  listaContainer: {
    marginBottom: 20,
  },
  cardConsulta: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  textoPaciente: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textoDetalhe: {
    fontSize: 13,
  },
  formSection: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});