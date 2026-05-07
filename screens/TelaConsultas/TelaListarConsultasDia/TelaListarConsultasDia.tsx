import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './TelaListarConsultasDiaStyle';

interface Props {
  onSelecionarConsulta: (paciente: string) => void;
}

export default function TelaListarConsultasDia({ onSelecionarConsulta }: Props) {
  const consultas = [
    { id: '1', paciente: 'Harrier Du Bois', hora: '08:00', tipo: 'Consulta' },
    { id: '2', paciente: 'Kim Kitsuragi', hora: '09:00', tipo: 'Retorno' },
    { id: '3', paciente: 'Klaasje Amandou', hora: '10:00', tipo: 'Consulta' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Consultas Agendadas para Hoje</Text>
      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.hora}>{item.hora}</Text>
              <Text style={styles.paciente}>{item.paciente}</Text>
              <Text style={styles.tipo}>{item.tipo}</Text>
            </View>
            <TouchableOpacity 
              style={styles.botaoAtender} 
              onPress={() => onSelecionarConsulta(item.paciente)}
            >
              <Text style={styles.textoBotao}>ATENDER</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}