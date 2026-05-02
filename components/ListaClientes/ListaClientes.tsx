import React from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { styles } from './ListaClientesStyle';

export interface Cliente {
  identificador: number; 
  nome: string;
  dtNascimento: string;
  email: string;
  telefone: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface ListaClientesProps {
  clientes: Cliente[];
}

export const ListaClientes: React.FC<ListaClientesProps> = ({ clientes }) => {
  
  const renderItem: ListRenderItem<Cliente> = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.detalhe}>Nascimento: {item.dtNascimento}</Text>
      <Text style={styles.detalhe}>Telefone: {item.telefone}</Text>
      <Text style={styles.detalhe}>E-mail: {item.email}</Text>
    </View>
  );

  return (
    <FlatList
      data={clientes}
      keyExtractor={(item) => item.identificador.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listaContainer}
      ListEmptyComponent={
        <Text style={styles.textoVazio}>Nenhum paciente encontrado.</Text>
      }
    />
  );
};