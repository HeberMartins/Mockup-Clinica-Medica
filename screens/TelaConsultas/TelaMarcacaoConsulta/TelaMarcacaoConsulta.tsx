import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../../ThemeContext';
import { styles } from './TelaMarcacaoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaMarcacaoConsulta({ onVoltar }: Props) {
  const { theme, isDark, toggleTheme } = useTheme();

  const [pacienteId, setPacienteId] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [medicoId, setMedicoId] = useState('');
  const [horarioSelecionado, setHorarioSelecionado] = useState<number | null>(null);

  const agenda = [
    { id: 1, data: '12/05/2026', hora: '08:00', status: 'L' },
    { id: 2, data: '15/05/2026', hora: '09:00', status: 'C' },
    { id: 3, data: '20/05/2026', hora: '10:00', status: 'M' },
    { id: 4, data: '22/05/2026', hora: '11:00', status: 'X' },
    { id: 5, data: '05/06/2026', hora: '14:00', status: 'B' },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'L': return { label: 'Laudo', color: isDark ? '#38bdf8' : '#0284c7' };
      case 'C': return { label: 'Consulta', color: isDark ? '#4ade80' : '#059669' };
      case 'M': return { label: 'Manutenção', color: isDark ? '#fbbf24' : '#d97706' };
      case 'X': return { label: 'Cancelado', color: '#dc3545' };
      case 'B': return { label: 'Bloqueado', color: '#94a3b8' };
      default: return { label: 'Indisponível', color: theme.text };
    }
  };

  const realizarMarcacao = () => {
    const item = agenda.find(a => a.id === horarioSelecionado);
    if (item?.status === 'X' || item?.status === 'B') {
      Alert.alert("Atenção", "Este horário não está disponível para marcação.");
      return;
    }
    if (!pacienteId || !medicoId || !horarioSelecionado) {
      Alert.alert("Erro", "Preencha todos os campos e selecione um horário.");
      return;
    }
    Alert.alert("Sucesso", "Consulta agendada com sucesso!");
    if (onVoltar) onVoltar();
  };

  return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
          <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
            <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
          </TouchableOpacity>
          <Text style={[styles.titulo, { color: theme.text }]}>Marcação</Text>

          <TouchableOpacity onPress={toggleTheme}>
            <MaterialCommunityIcons
                name={isDark ? "weather-sunny" : "weather-night"}
                size={22}
                color={theme.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          {/* Seletores Dinâmicos */}
          <Text style={[styles.label, { color: theme.textSecondary }]}>Cliente:</Text>
          <View style={[styles.pickerContainer, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Picker
                selectedValue={pacienteId}
                onValueChange={setPacienteId}
                dropdownIconColor={theme.primary}
                style={{ color: theme.text }}
            >
              <Picker.Item label="Selecione o cliente..." value="" color={isDark ? '#94a3b8' : '#64748b'} />
              <Picker.Item label="Harrier Du Bois" value="1" color={theme.text} />
            </Picker>
          </View>

          <Text style={[styles.label, { color: theme.textSecondary }]}>Especialidade:</Text>
          <View style={[styles.pickerContainer, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Picker
                selectedValue={especialidade}
                onValueChange={setEspecialidade}
                dropdownIconColor={theme.primary}
                style={{ color: theme.text }}
            >
              <Picker.Item label="Selecione a especialidade..." value="" color={isDark ? '#94a3b8' : '#64748b'} />
              <Picker.Item label="Cardiologia" value="cardio" color={theme.text} />
            </Picker>
          </View>

          <Text style={[styles.subtitle, { color: theme.text }]}>Agenda (Próximos 2 Meses)</Text>

          <View style={styles.agendaContainer}>
            {agenda.map((item) => {
              const info = getStatusInfo(item.status);
              const isDisabled = item.status === 'X' || item.status === 'B';
              const isSelected = horarioSelecionado === item.id;

              return (
                  <TouchableOpacity
                      key={item.id}
                      disabled={isDisabled}
                      style={[
                        styles.horarioCard,
                        { backgroundColor: theme.card, borderColor: isSelected ? theme.primary : theme.border },
                        isDisabled && { opacity: 0.4, backgroundColor: isDark ? '#1e293b' : '#f1f5f9' }
                      ]}
                      onPress={() => setHorarioSelecionado(item.id)}
                  >
                    <View style={[styles.statusBadge, { backgroundColor: info.color }]}>
                      <Text style={styles.statusTextoBadge}>{item.status}</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text style={[styles.textoHorario, { color: theme.text }]}>{item.data} - {item.hora}</Text>
                      <Text style={[styles.textoStatusDesc, { color: info.color }]}>{info.label}</Text>
                    </View>
                    {isSelected && <MaterialCommunityIcons name="check-circle" size={24} color={theme.primary} />}
                  </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={realizarMarcacao}>
            <Text style={styles.buttonText}>Confirmar Agendamento</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
  );
}