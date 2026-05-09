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
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  listaContainer: {
    marginBottom: 24,
  },
  textoVazio: {
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
  cardConsulta: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  textoPaciente: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textoDetalhe: {
    fontSize: 13,
    marginTop: 2,
  },
  motivoSection: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  subtitleMotivo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  botoesMotivoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  botaoMotivo: {
    width: '48%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoMotivo: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnConfirmarCancelamento: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  textoBtnConfirmar: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});