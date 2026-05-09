import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../../ThemeContext';
import { styles } from './TelaCancelamentoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaCancelamentoConsulta({ onVoltar }: Props) {
  const { theme, isDark, toggleTheme } = useTheme();

  const [consultasAgendadas, setConsultasAgendadas] = useState([
    { id: 1, paciente: 'João Batista', data: '10/05/2026', hora: '14:00', medico: 'Dr. Carlos' },
    { id: 2, paciente: 'Maria de Fátima', data: '10/05/2026', hora: '15:30', medico: 'Dra. Silvia' },
    { id: 3, paciente: 'Titus Hardie', data: '11/05/2026', hora: '09:00', medico: 'Dr. Carlos' },
  ]);

  const [consultaSelecionada, setConsultaSelecionada] = useState<number | null>(null);
  const [motivo, setMotivo] = useState<'cliente' | 'falta' | null>(null);

  const lidarComCancelamento = () => {
    if (!motivo) {
      Alert.alert('Atenção', 'Selecione o motivo do cancelamento.');
      return;
    }

    Alert.alert('Sucesso', 'Consulta cancelada com sucesso no sistema.');
    setConsultasAgendadas((prev) => prev.filter(c => c.id !== consultaSelecionada));
    setConsultaSelecionada(null);
    setMotivo(null);
  };

  return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        {/* HEADER ADAPTÁVEL */}
        <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
          <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
            <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
          </TouchableOpacity>

          <Text style={[styles.titulo, { color: theme.text }]}>Cancelamento</Text>

          <TouchableOpacity onPress={toggleTheme}>
            <MaterialCommunityIcons
                name={isDark ? "weather-sunny" : "weather-night"}
                size={22}
                color={theme.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Selecione a consulta para cancelar:
          </Text>

          <View style={styles.listaContainer}>
            {consultasAgendadas.length === 0 && (
                <Text style={[styles.textoVazio, { color: theme.textSecondary }]}>
                  Não há consultas agendadas.
                </Text>
            )}

            {consultasAgendadas.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.cardConsulta,
                      { backgroundColor: theme.card, borderColor: theme.border },
                      consultaSelecionada === item.id && { borderColor: '#ef4444', borderWidth: 2 }, // Destaque em vermelho para cancelamento
                    ]}
                    onPress={() => {
                      setConsultaSelecionada(item.id);
                      setMotivo(null);
                    }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.textoPaciente, { color: theme.text }]}>{item.paciente}</Text>
                    <Text style={[styles.textoDetalhe, { color: theme.textSecondary }]}>Data: {item.data} às {item.hora}</Text>
                    <Text style={[styles.textoDetalhe, { color: theme.textSecondary }]}>Médico: {item.medico}</Text>
                  </View>
                  {consultaSelecionada === item.id && (
                      <MaterialCommunityIcons name="close-circle" size={24} color="#ef4444" />
                  )}
                </TouchableOpacity>
            ))}
          </View>

          {consultaSelecionada && (
              <View style={[styles.motivoSection, { backgroundColor: theme.card, borderColor: theme.border }]}>
                <Text style={[styles.subtitleMotivo, { color: theme.text }]}>Motivo do Cancelamento:</Text>

                <View style={styles.botoesMotivoContainer}>
                  <TouchableOpacity
                      style={[
                        styles.botaoMotivo,
                        { borderColor: theme.border },
                        motivo === 'cliente' && { backgroundColor: theme.primary, borderColor: theme.primary }
                      ]}
                      onPress={() => setMotivo('cliente')}
                  >
                    <Text style={[
                      styles.textoBotaoMotivo,
                      { color: theme.textSecondary },
                      motivo === 'cliente' && { color: '#fff' }
                    ]}>
                      Solicitação do Cliente
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={[
                        styles.botaoMotivo,
                        { borderColor: theme.border },
                        motivo === 'falta' && { backgroundColor: theme.primary, borderColor: theme.primary }
                      ]}
                      onPress={() => setMotivo('falta')}
                  >
                    <Text style={[
                      styles.textoBotaoMotivo,
                      { color: theme.textSecondary },
                      motivo === 'falta' && { color: '#fff' }
                    ]}>
                      Não Comparecimento
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.btnConfirmarCancelamento, { backgroundColor: '#ef4444' }]}
                    onPress={lidarComCancelamento}
                >
                  <Text style={styles.textoBtnConfirmar}>Efetivar Cancelamento</Text>
                </TouchableOpacity>
              </View>
          )}
        </ScrollView>
      </SafeAreaView>
  );
}