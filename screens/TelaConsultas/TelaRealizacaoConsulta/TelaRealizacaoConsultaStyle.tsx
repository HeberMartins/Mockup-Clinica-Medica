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
    paddingBottom: 40,
  },
  patientInfoBox: {
    backgroundColor: '#e0f2fe',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#bae6fd',
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0369a1',
  },
  patientStatus: {
    color: '#0284c7',
  },
  inputGroup: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  historicText: {
    fontSize: 13,
    color: '#475569',
    fontStyle: 'italic',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#f8fafc',
    color: '#0f172a',
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});