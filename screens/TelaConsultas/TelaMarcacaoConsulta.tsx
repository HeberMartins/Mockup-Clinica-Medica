import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './TelaMarcacaoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaMarcacaoConsulta({ onVoltar }: Props) {
  const [cliente] = useState('João Silva');
  const [medico] = useState('Dr. Carlos');
  const [especialidade] = useState('Cardiologia');
  const [horarioSelecionado, setHorarioSelecionado] = useState<number | null>(null);

  const agenda = [
    { id: 1, data: '10/05/2026', hora: '08:00', status: 'Disponível' },
    { id: 2, data: '10/05/2026', hora: '09:00', status: 'Ocupado' },
    { id: 3, data: '10/05/2026', hora: '10:00', status: 'Confirmado' },
    { id: 4, data: '10/05/2026', hora: '11:00', status: 'Cancelado' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoVoltar}>VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Marcação de Consulta</Text>
        <View style={{ width: 80 }} />
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>Cliente: {cliente}</Text>
          <Text style={styles.label}>Médico: {medico}</Text>
          <Text style={styles.label}>Especialidade: {especialidade}</Text>
        </View>

        <Text style={styles.subtitle}>Agenda dos Próximos 2 Meses</Text>
        <View style={styles.agendaContainer}>
          {agenda.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.horarioCard,
                horarioSelecionado === item.id && styles.horarioSelected,
              ]}
              onPress={() => setHorarioSelecionado(item.id)}
            >
              <Text style={styles.textoHorario}>{item.data} - {item.hora}</Text>
              <Text style={styles.textoStatus}>{item.status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={() => alert('Consulta marcada!')}>
          <Text style={styles.buttonText}>Confirmar Marcação</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}