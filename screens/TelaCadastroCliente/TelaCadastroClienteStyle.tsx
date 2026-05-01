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
});