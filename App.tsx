import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TelaClientes from './screens/TelaClientes/TelaClientes';
import TelaCadastro from './screens/TelaCadastroCliente/TelaCadastroCliente'; 
import TelaMarcacaoConsulta from './screens/TelaConsultas/TelaMarcacaoConsulta';
import TelaConfirmacaoConsulta from './screens/TelaConsultas/TelaConfirmacaoConsulta';
import TelaRealizacaoConsulta from './screens/TelaConsultas/TelaRealizacaoConsulta';
import TelaEncerramentoConsulta from './screens/TelaConsultas/TelaEncerramentoConsulta/TelaEncerramentoConsulta';
import { Cliente } from './components/ListaClientes/ListaClientes';

type TelaAtual = 'lista' | 'cadastro' | 'marcacao' | 'confirmacao' | 'realizacao' | 'encerramento';

export default function App() {
  const [telaAtual, setTelaAtual] = useState<TelaAtual>('lista');

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

      {/* Menu Superior */}
      <View style={styles.menuContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.menuScroll}>
          <TouchableOpacity 
            style={[styles.menuButton, telaAtual === 'lista' && styles.menuButtonActive]} 
            onPress={() => setTelaAtual('lista')}
          >
            <Text style={[styles.menuButtonText, telaAtual === 'lista' && styles.menuButtonTextActive]}>Clientes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.menuButton, telaAtual === 'cadastro' && styles.menuButtonActive]} 
            onPress={() => setTelaAtual('cadastro')}
          >
            <Text style={[styles.menuButtonText, telaAtual === 'cadastro' && styles.menuButtonTextActive]}>Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.menuButton, telaAtual === 'marcacao' && styles.menuButtonActive]} 
            onPress={() => setTelaAtual('marcacao')}
          >
            <Text style={[styles.menuButtonText, telaAtual === 'marcacao' && styles.menuButtonTextActive]}>Marcação de Consulta</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.menuButton, telaAtual === 'confirmacao' && styles.menuButtonActive]} 
            onPress={() => setTelaAtual('confirmacao')}
          >
            <Text style={[styles.menuButtonText, telaAtual === 'confirmacao' && styles.menuButtonTextActive]}>Confirmação de Consulta</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.menuButton, telaAtual === 'realizacao' && styles.menuButtonActive]} 
            onPress={() => setTelaAtual('realizacao')}
          >
            <Text style={[styles.menuButtonText, telaAtual === 'realizacao' && styles.menuButtonTextActive]}>Realização de Consulta</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.menuButton, telaAtual === 'encerramento' && styles.menuButtonActive]} 
            onPress={() => setTelaAtual('encerramento')}
          >
            <Text style={[styles.menuButtonText, telaAtual === 'encerramento' && styles.menuButtonTextActive]}>Encerramento de Consulta</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Exibição da Tela Selecionada */}
      <View style={styles.content}>
        {telaAtual === 'lista' && (
          <TelaClientes 
            clientes={clientes}
            onNovoCliente={abrirCadastro} 
          />
        )}
        
        {telaAtual === 'cadastro' && (
          <TelaCadastro 
            onVoltar={voltarParaLista} 
            onSalvarCliente={lidarComSalvarCliente} 
          />
        )}

        {telaAtual === 'marcacao' && (
          <TelaMarcacaoConsulta 
            onVoltar={voltarParaLista} 
          />
        )}

        {telaAtual === 'confirmacao' && (
          <TelaConfirmacaoConsulta 
            onVoltar={voltarParaLista} 
          />
        )}

        {telaAtual === 'realizacao' && (
          <TelaRealizacaoConsulta 
            onVoltar={voltarParaLista} 
          />
        )}

        {telaAtual === 'encerramento' && (
          <TelaEncerramentoConsulta 
            onVoltar={voltarParaLista} 
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 26,
  },
  menuContainer: {
    height: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    justifyContent: 'center',
  },
  menuScroll: {
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  menuButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  menuButtonActive: {
    backgroundColor: '#0284c7',
    borderColor: '#0284c7',
  },
  menuButtonText: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '600',
  },
  menuButtonTextActive: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
});