import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Tom de fundo mais moderno e limpo
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40, // Aumentado para não colidir com o entalhe do iPhone
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#ffffff',
  },
  botaoVoltar: {
    padding: 8,
    width: 80,
  },
  textoVoltar: {
    color: '#0284c7', // Azul padrão do sistema
    fontSize: 14,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },

  /* ESTILO PARA O PICKER (REQUISITO DE DINAMISMO) */
  pickerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    marginBottom: 16,
    overflow: 'hidden', // Garante que o Picker respeite o arredondamento
    justifyContent: 'center',
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 6,
    marginTop: 4,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0284c7',
    paddingLeft: 8,
  },

  agendaContainer: {
    marginBottom: 24,
  },
  horarioCard: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Espaçamento entre os cards da agenda
    elevation: 1, // Sombra leve no Android
    shadowColor: '#000', // Sombra leve no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  horarioSelected: {
    borderColor: '#0284c7',
    backgroundColor: '#f0f9ff',
    borderWidth: 2,
  },
  textoHorario: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
  },
  textoStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#059669', // Verde para indicar disponibilidade
    textTransform: 'uppercase',
  },

  button: {
    backgroundColor: '#0284c7',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Adicione ou atualize estas propriedades no seu StyleSheet
  statusBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusTextoBadge: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textoStatusDesc: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

});