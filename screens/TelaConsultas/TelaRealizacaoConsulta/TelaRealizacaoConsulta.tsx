import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import { useTheme } from '../../../ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaRealizacaoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaRealizacaoConsulta({ onVoltar }: Props) {
  const { theme, isDark, toggleTheme } = useTheme();
  const [laudo, setLaudo] = useState('');
  const [receita, setReceita] = useState('');

  const salvarAtendimento = () => {
    if (!laudo || !receita) {
      Alert.alert("Erro", "Por favor, preencha o laudo e a receita.");
      return;
    }
    Alert.alert("Sucesso", "Atendimento realizado e salvo!");
    if (onVoltar) onVoltar();
  };

  return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
          <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
            <MaterialCommunityIcons name="chevron-left" size={24} color={theme.primary} />
            <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
          </TouchableOpacity>

          <Text style={[styles.titulo, { color: theme.text }]}>Prontuário</Text>

          {/* Botão de alternância de tema no prontuário */}
          <TouchableOpacity onPress={toggleTheme} style={{ padding: 5 }}>
            <MaterialCommunityIcons
                name={isDark ? "weather-sunny" : "weather-night"}
                size={22}
                color={theme.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          {/* Caixa de Informação do Paciente adaptável */}
          <View style={[styles.patientInfoBox, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.infoLabel, { color: theme.text }]}>Paciente: Harrier Du Bois</Text>
            <Text style={[styles.patientStatus, { color: theme.primary }]}>Status: Em Atendimento</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>LAUDO MÉDICO:</Text>
            <TextInput
                style={[
                  styles.inputField,
                  styles.textArea,
                  { backgroundColor: theme.card, color: theme.text, borderColor: theme.border }
                ]}
                multiline
                placeholder="Descreva a evolução clínica..."
                placeholderTextColor={theme.textSecondary}
                value={laudo}
                onChangeText={setLaudo}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>RECEITA:</Text>
            <TextInput
                style={[
                  styles.inputField,
                  styles.textArea,
                  { backgroundColor: theme.card, color: theme.text, borderColor: theme.border }
                ]}
                multiline
                placeholder="Medicamentos e dosagens..."
                placeholderTextColor={theme.textSecondary}
                value={receita}
                onChangeText={setReceita}
            />
          </View>

          <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: theme.primary }]}
              onPress={salvarAtendimento}
          >
            <Text style={styles.saveButtonText}>Finalizar Consulta</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
  );
}