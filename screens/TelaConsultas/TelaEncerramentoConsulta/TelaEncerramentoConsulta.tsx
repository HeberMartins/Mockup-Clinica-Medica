import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useTheme } from '../../../ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaEncerramentoConsultaStyle';

interface Props {
  onVoltar?: () => void;
}

export default function TelaEncerramentoConsulta({ onVoltar }: Props) {
  const { theme, isDark, toggleTheme } = useTheme();

  const [consultasPendentes] = useState([
    { id: 1, paciente: 'Ana Clara', medico: 'Dr. Carlos', tipo: 'Consulta Nova', valorBase: 'R$ 200,00' },
    { id: 2, paciente: 'Harrier Du Bois', medico: 'Dra. Silvia', tipo: 'Retorno', valorBase: 'Isento (Retorno)' }
  ]);

  const [consultaSelecionada, setConsultaSelecionada] = useState<number | null>(null);
  const [procedimentos, setProcedimentos] = useState('');
  const [pagamento, setPagamento] = useState('');

  const lidarComEncerramento = () => {
    if (!procedimentos || !pagamento) {
      Alert.alert('Atenção', 'Por favor, preencha os procedimentos e as informações de pagamento.');
      return;
    }
    Alert.alert('Sucesso', 'Consulta encerrada e registrada com sucesso!');
    if (onVoltar) onVoltar();
  };

  return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        {/* HEADER ADAPTÁVEL */}
        <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
          <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
            <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
          </TouchableOpacity>

          <Text style={[styles.titulo, { color: theme.text }]}>Encerrar Consulta</Text>

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
            Aguardando Encerramento (Realizadas)
          </Text>

          <View style={styles.listaContainer}>
            {consultasPendentes.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.cardConsulta,
                      { backgroundColor: theme.card, borderColor: theme.border },
                      consultaSelecionada === item.id && { borderColor: theme.primary, borderWidth: 2 },
                    ]}
                    onPress={() => setConsultaSelecionada(item.id)}
                >
                  <Text style={[styles.textoPaciente, { color: theme.text }]}>
                    Paciente: {item.paciente}
                  </Text>

                  <Text style={[styles.textoDetalhe, { color: theme.textSecondary }]}>
                    Médico: {item.medico}
                  </Text>

                  <Text style={[styles.textoDetalhe, { color: theme.primary, fontWeight: 'bold' }]}>
                    Valor:{' '}
                    {item.tipo === 'Retorno' ? 'Não Cobrada (Retorno)' : item.valorBase}
                  </Text>
                </TouchableOpacity>
            ))}
          </View>

          {consultaSelecionada && (
              <View style={[styles.formSection, { backgroundColor: theme.card, borderColor: theme.border }]}>
                <View style={styles.inputGroup}>
                  <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
                    Procedimentos Realizados:
                  </Text>

                  <TextInput
                      style={[
                        styles.inputField,
                        styles.textArea,
                        { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }
                      ]}
                      multiline
                      placeholder="Ex: Eletrocardiograma..."
                      placeholderTextColor={theme.textSecondary}
                      value={procedimentos}
                      onChangeText={setProcedimentos}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
                    Registro de Pagamento:
                  </Text>

                  <TextInput
                      style={[
                        styles.inputField,
                        { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }
                      ]}
                      placeholder="Ex: Cartão, Convênio..."
                      placeholderTextColor={theme.textSecondary}
                      value={pagamento}
                      onChangeText={setPagamento}
                  />
                </View>

                <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: theme.primary }]}
                    onPress={lidarComEncerramento}
                >
                  <Text style={styles.saveButtonText}>
                    Confirmar e Encerrar
                  </Text>
                </TouchableOpacity>
              </View>
          )}
        </ScrollView>
      </SafeAreaView>
  );
}