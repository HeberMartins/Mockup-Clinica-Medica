import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Background definido dinamicamente pelo theme.background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50, // Ajustado para o entalhe do iPhone (notch)
    paddingBottom: 20,
    borderBottomWidth: 1,
    // Background e borda inferior vêm do theme.card e theme.border
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  textoVoltar: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
    // Cor vem do theme.primary
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    // Cor vem do theme.text
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },

  /* ESTILO PARA O PICKER (DINÂMICO) */
  pickerContainer: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    // Background e borda vêm do theme.card e theme.border
  },

  label: {
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    // Cor vem do theme.textSecondary
  },

  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 16,
    borderLeftWidth: 4,
    // Cor do texto vem do theme.text, cor da borda do theme.primary
    paddingLeft: 12,
  },

  agendaContainer: {
    marginBottom: 24,
  },
  horarioCard: {
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Background e borda vêm do theme.card e theme.border
  },
  horarioSelected: {
    borderWidth: 2,
    // Borda e fundo de seleção vêm dinamicamente (theme.primary)
  },
  textoHorario: {
    fontSize: 15,
    fontWeight: '700',
    // Cor vem do theme.text
  },

  /* ELEMENTOS DE STATUS */
  statusBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 2,
  },

  /* BOTÃO DE AÇÃO */
  button: {
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Background vem do theme.primary
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});