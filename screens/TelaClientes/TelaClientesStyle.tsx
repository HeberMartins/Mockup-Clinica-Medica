import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', 
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2c2e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#020202', 
    textTransform: 'uppercase',
    letterSpacing: 2,
    maxWidth: '50%',
  },
  botaoVoltar: {
    paddingVertical: 8,
    paddingRight: 12,
    justifyContent: 'center',
  },
  textoVoltar: {
    color: '#0284c7', // Azul padrão Maria Auxiliadora
    fontSize: 14,
    fontWeight: 'bold',
  },
});