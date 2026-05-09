import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { styles } from './TelaRealizacaoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaRealizacaoConsulta({ onVoltar }: Props) {
  const [laudo, setLaudo] = useState('');
  const [receita, setReceita] = useState('');

  const salvarAtendimento = () => {
    if (!laudo || !receita) {
      Alert.alert("Erro", "Por favor, preencha o laudo e a receita.");
      return;
    }
    Alert.alert("Sucesso", "Atendimento realizado e salvo!");
    if (onVoltar) onVoltar(); // Retorna para a lista do dia
  };

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
            <Text style={styles.textoVoltar}>VOLTAR</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>Prontuário</Text>
          <View style={{ width: 80 }} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.patientInfoBox}>
            <Text style={styles.infoLabel}>Paciente: Harrier Du Bois</Text>
            <Text style={styles.patientStatus}>Status: Em Atendimento</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Laudo Médico:</Text>
            <TextInput
                style={[styles.inputField, styles.textArea]}
                multiline
                placeholder="Descreva a evolução clínica..."
                value={laudo}
                onChangeText={setLaudo}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Receita:</Text>
            <TextInput
                style={[styles.inputField, styles.textArea]}
                multiline
                placeholder="Medicamentos e dosagens..."
                value={receita}
                onChangeText={setReceita}
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={salvarAtendimento}>
            <Text style={styles.saveButtonText}>Finalizar Consulta</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
  );
}