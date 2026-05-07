import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './TelaRealizacaoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaRealizacaoConsulta({ onVoltar }: Props) {
  const [laudo, setLaudo] = useState('');
  const [receita, setReceita] = useState('');
  const [historico] = useState('Paciente apresenta histórico de pressão alta. Última consulta há 30 dias.');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoVoltar}>VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Realização de Consulta</Text>
        <View style={{ width: 80 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.patientInfoBox}>
          <Text style={styles.infoLabel}>Paciente: Ana Clara</Text>
          <Text style={[styles.infoLabel, styles.patientStatus]}>Status: Confirmado</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Histórico do Paciente:</Text>
          <Text style={styles.historicText}>{historico}</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Laudo Médico:</Text>
          <TextInput
            style={[styles.inputField, styles.textArea]}
            multiline
            numberOfLines={4}
            placeholder="Digite o laudo do paciente..."
            value={laudo}
            onChangeText={setLaudo}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Receita Médica:</Text>
          <TextInput
            style={[styles.inputField, styles.textArea]}
            multiline
            numberOfLines={4}
            placeholder="Escreva os medicamentos e orientações..."
            value={receita}
            onChangeText={setReceita}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={() => alert('Atendimento realizado e salvo!')}>
          <Text style={styles.saveButtonText}>Salvar Atendimento</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}