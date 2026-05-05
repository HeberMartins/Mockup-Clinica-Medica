import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { styles } from './TelaConfirmacaoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaConfirmacaoConsulta({ onVoltar }: Props) {
  const [consultas, setConsultas] = useState([
    { id: '1', cliente: 'Maria Souza', medico: 'Dra. Ana', horario: '14:00' },
    { id: '2', cliente: 'Pedro Santos', medico: 'Dr. Roberto', horario: '15:30' },
  ]);

  const confirmarConsulta = (id: string) => {
    Alert.alert('Sucesso', 'Consulta confirmada com sucesso!');
    setConsultas(consultas.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoVoltar}>VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Confirmação de Consulta</Text>
        <View style={{ width: 80 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Atendimentos do dia corrente não confirmados</Text>

        <FlatList
          data={consultas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.cardTitle}>{item.cliente}</Text>
                <Text style={styles.cardDetails}>
                  {item.medico} – {item.horario}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => confirmarConsulta(item.id)}
              >
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}