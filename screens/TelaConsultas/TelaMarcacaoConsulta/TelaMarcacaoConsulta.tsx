import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './TelaMarcacaoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaMarcacaoConsulta({ onVoltar }: Props) {
  const [pacienteId, setPacienteId] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [medicoId, setMedicoId] = useState('');
  const [horarioSelecionado, setHorarioSelecionado] = useState<number | null>(null);

  // Simulação de agenda com os status obrigatórios: L, C, M, X, B
  const agenda = [
    { id: 1, data: '12/05/2026', hora: '08:00', status: 'L' }, // Laudo
    { id: 2, data: '15/05/2026', hora: '09:00', status: 'C' }, // Consulta
    { id: 3, data: '20/05/2026', hora: '10:00', status: 'M' }, // Manutenção
    { id: 4, data: '22/05/2026', hora: '11:00', status: 'X' }, // Cancelado (Ocupado/Indisponível)
    { id: 5, data: '05/06/2026', hora: '14:00', status: 'B' }, // Bloqueado
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'L': return { label: 'Laudo', color: '#0284c7' };
      case 'C': return { label: 'Consulta', color: '#059669' };
      case 'M': return { label: 'Manutenção', color: '#d97706' };
      case 'X': return { label: 'Cancelado', color: '#dc3545' };
      case 'B': return { label: 'Bloqueado', color: '#64748b' };
      default: return { label: 'Indisponível', color: '#000' };
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
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
            <Text style={styles.textoVoltar}>VOLTAR</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>Marcação</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.label}>Cliente:</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={pacienteId} onValueChange={setPacienteId}>
              <Picker.Item label="Selecione o cliente..." value="" />
              <Picker.Item label="Harrier Du Bois" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Especialidade:</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={especialidade} onValueChange={setEspecialidade}>
              <Picker.Item label="Selecione a especialidade..." value="" />
              <Picker.Item label="Cardiologia" value="cardio" />
            </Picker>
          </View>

          <Text style={styles.label}>Médico:</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={medicoId} onValueChange={setMedicoId}>
              <Picker.Item label="Selecione o médico..." value="" />
              <Picker.Item label="Dr. Carlos" value="1" />
            </Picker>
          </View>

          <Text style={styles.subtitle}>Agenda (Próximos 2 Meses)</Text>

          <View style={styles.agendaContainer}>
            {agenda.map((item) => {
              const info = getStatusInfo(item.status);
              const isDisabled = item.status === 'X' || item.status === 'B';

              return (
                  <TouchableOpacity
                      key={item.id}
                      disabled={isDisabled}
                      style={[
                        styles.horarioCard,
                        horarioSelecionado === item.id && styles.horarioSelected,
                        isDisabled && { opacity: 0.5, backgroundColor: '#f1f5f9' }
                      ]}
                      onPress={() => setHorarioSelecionado(item.id)}
                  >
                    <View style={[styles.statusBadge, { backgroundColor: info.color }]}>
                      <Text style={styles.statusTextoBadge}>{item.status}</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text style={styles.textoHorario}>{item.data} - {item.hora}</Text>
                      <Text style={[styles.textoStatusDesc, { color: info.color }]}>{info.label}</Text>
                    </View>
                  </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.button} onPress={realizarMarcacao}>
            <Text style={styles.buttonText}>Confirmar Agendamento</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
  );
}