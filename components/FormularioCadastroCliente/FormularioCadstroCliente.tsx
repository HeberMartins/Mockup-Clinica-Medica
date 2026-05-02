import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Cliente } from '../ListaClientes/ListaClientes';
import { styles } from './FormularioCadstroClienteStyle'

interface FormularioClienteProps {
  onSalvar: (cliente: Cliente) => void;
  onCancelar: () => void;
}

export const FormularioCliente: React.FC<FormularioClienteProps> = ({ onSalvar, onCancelar }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dtNascimento, setDtNascimento] = useState('');

  const lidarComSalvar = () => {
    if (!nome) {
      alert("O nome do paciente é obrigatório.");
      return;
    }

    const novoCliente: Cliente = {
      identificador: Math.floor(Math.random() * 10000), 
      nome,
      dtNascimento,
      email,
      telefone,
      logradouro: '', numero: 0, complemento: '', bairro: '', cidade: '', estado: '' 
    };

    onSalvar(novoCliente);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome do paciente" />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput style={styles.input} value={dtNascimento} onChangeText={setDtNascimento} placeholder="DD/MM/AAAA" />

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" placeholder="(00) 00000-0000" />

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="paciente@email.com" />


        <View style={styles.containerBotoes}>
          <TouchableOpacity style={[styles.botao, styles.botaoCancelar]} onPress={onCancelar}>
            <Text style={styles.textoBotao}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.botaoSalvar]} onPress={lidarComSalvar}>
            <Text style={styles.textoBotao}>Salvar Cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

