import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2c2e',
    backgroundColor: '#f0f4f8',
  },
  botaoVoltar: {
    padding: 8,
    width: 80,
  },
  textoVoltar: {
    color: '#080808', 
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
  },
  agendaContainer: {
    gap: 12,
    marginBottom: 24,
  },
  horarioCard: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horarioSelected: {
    borderColor: '#0284c7',
    backgroundColor: '#e0f2fe',
  },
  textoHorario: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  textoStatus: {
    fontSize: 13,
    color: '#64748b',
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});