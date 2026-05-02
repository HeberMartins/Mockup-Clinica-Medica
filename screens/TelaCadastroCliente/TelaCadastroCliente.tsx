import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FormularioCliente } from '../../components/FormularioCadastroCliente/FormularioCadstroCliente';
import { Cliente } from '../../components/ListaClientes/ListaClientes';
import { styles } from './TelaCadastroClienteStyle'

interface TelaCadastroProps {
  onVoltar: () => void; 
  onSalvarCliente: (cliente: Cliente) => void;
}

export default function TelaCadastro({ onVoltar, onSalvarCliente }: TelaCadastroProps) {
  
  const lidarComSalvar = (novoCliente: Cliente) => {
    Alert.alert("Arquivo Atualizado", "Cliente registrado com sucesso.");
    
    onSalvarCliente(novoCliente);
    
    onVoltar();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onVoltar} style={styles.botaoVoltar}>
          <Text style={styles.textoVoltar}>◁ VOLTAR</Text>
        </TouchableOpacity>
        
        <Text style={styles.titulo}>NOVO REGISTRO</Text>
        
        <View style={{ width: 60 }} /> 
      </View>

      <FormularioCliente 
        onSalvar={lidarComSalvar} 
        onCancelar={onVoltar}
      />
    </SafeAreaView>
  );
}

