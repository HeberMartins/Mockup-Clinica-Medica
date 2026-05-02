import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { ListaClientes, Cliente } from '../../components/ListaClientes/ListaClientes'; 
import BotaoNovoCliente from '../../components/BotoesClientes/BotoesClientes';
import { styles } from './TelaClientesStyle';

interface TelaClientesProps {
  clientes: Cliente[];
  onNovoCliente: () => void;
}

export default function TelaClientes({ clientes, onNovoCliente }: TelaClientesProps) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Cidadãos de Martinaise</Text>
        
        <BotaoNovoCliente 
          label="Novo Registro" 
          onPress={onNovoCliente}
        />
      </View>

      <ListaClientes clientes={clientes} />
    </SafeAreaView>
  );
}