import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TelaClientes from './screens/TelaClientes/TelaClientes';
import TelaCadastro from './screens/TelaCadastroCliente/TelaCadastroCliente'; 
import { Cliente } from './components/ListaClientes/ListaClientes';

export default function App() {
  const [telaAtual, setTelaAtual] = useState<'lista' | 'cadastro'>('lista');

  const [clientes, setClientes] = useState<Cliente[]>([
    { 
      identificador: 1, 
      nome: 'Harrier Du Bois', 
      dtNascimento: '01/01/1930', 
      email: 'tequila.sunset@rcm.com',
      telefone: '(41) 91951-0041',
      logradouro: 'Whirling-in-Rags', numero: 41, complemento: 'Quarto 3', bairro: 'Martinaise', cidade: 'Revachol', estado: 'JM'
    },
    { 
      identificador: 2, 
      nome: 'Kim Kitsuragi', 
      dtNascimento: '02/02/1932',
      email: 'kim.kitsuragi@rcm.com',
      telefone: '(57) 98888-0057',
      logradouro: '57th Precinct', numero: 57, complemento: 'Motor Carriage', bairro: 'Jamrock', cidade: 'Revachol', estado: 'JM'
    },
    { 
      identificador: 3, 
      nome: 'Evrart Claire', 
      dtNascimento: '03/03/1925',
      email: 'evrart@union.com',
      telefone: '(11) 98000-8000',
      logradouro: 'Port Container', numero: 1, complemento: 'Guarita', bairro: 'Martinaise', cidade: 'Revachol', estado: 'JM'
    },
    { 
      identificador: 4, 
      nome: 'Klaasje Amandou', 
      dtNascimento: '04/04/1950',
      email: 'klaasje@secreto.com',
      telefone: '(11) 90000-0000',
      logradouro: 'Whirling-in-Rags', numero: 41, complemento: 'Quarto 2', bairro: 'Martinaise', cidade: 'Revachol', estado: 'JM'
    },
    { 
      identificador: 5, 
      nome: 'Titus Hardie', 
      dtNascimento: '05/05/1945',
      email: 'titus@hardieboys.com',
      telefone: '(41) 95555-4444',
      logradouro: 'Whirling-in-Rags', numero: 41, complemento: 'Térreo', bairro: 'Martinaise', cidade: 'Revachol', estado: 'JM'
    },
  ]);

  const abrirCadastro = () => setTelaAtual('cadastro');
  const voltarParaLista = () => setTelaAtual('lista');

  const lidarComSalvarCliente = (novoCliente: Cliente) => {
    setClientes((clientesAtuais) => [...clientesAtuais, novoCliente]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {telaAtual === 'lista' ? (
        <TelaClientes 
          clientes={clientes}
          onNovoCliente={abrirCadastro} 
        />
      ) : (
        <TelaCadastro 
          onVoltar={voltarParaLista} 
          onSalvarCliente={lidarComSalvarCliente} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});