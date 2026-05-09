import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // O backgroundColor agora é definido dinamicamente pelo theme.background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50, // Aumentado para evitar colisão com a barra de status
    paddingBottom: 20,
    borderBottomWidth: 1,
    // O background e a cor da borda vêm do theme.card e theme.border
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  textoVoltar: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginLeft: 4,
    // A cor vem do theme.primary
  },
  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
    // A cor vem do theme.text
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  patientInfoBox: {
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderWidth: 1,
    // O background e a borda vêm do theme.card e theme.border
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '700',
    // A cor vem do theme.text
  },
  patientStatus: {
    fontWeight: 'bold',
    fontSize: 13,
    // A cor geralmente é o theme.primary para destaque
  },
  inputGroup: {
    marginBottom: 20,
    // O background e borda vêm do theme.card e theme.border
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
    // A cor vem do theme.textSecondary
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    textAlignVertical: 'top',
    // O background, cor do texto e borda vêm do theme (card, text, border)
  },
  textArea: {
    height: 120, // Aumentado para melhor usabilidade do médico
  },
  saveButton: {
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Background vem do theme.primary
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});