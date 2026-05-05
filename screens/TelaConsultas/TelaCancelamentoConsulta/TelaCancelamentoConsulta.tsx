import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView,  Alert } from 'react-native';
import { styles } from './TelaCancelamentoConsultaStyle'

interface Props {
  onVoltar?: () => void;
}

export default function TelaCancelamentoConsulta({ onVoltar }: Props) {
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
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoVoltar}>VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Cancelar Consulta</Text>
        <View style={{ width: 80 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>Selecione a consulta para cancelar:</Text>

        {/* Lista de consultas agendadas */}
        <View style={styles.listaContainer}>
          {consultasAgendadas.length === 0 && (
            <Text style={styles.textoVazio}>Não há consultas agendadas.</Text>
          )}
          {consultasAgendadas.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.cardConsulta,
                consultaSelecionada === item.id && styles.cardSelected,
              ]}
              onPress={() => {
                setConsultaSelecionada(item.id);
                setMotivo(null); 
              }}
            >
              <Text style={styles.textoPaciente}>{item.paciente}</Text>
              <Text style={styles.textoDetalhe}>Data: {item.data} às {item.hora}</Text>
              <Text style={styles.textoDetalhe}>Médico: {item.medico}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Seção de Motivo do Cancelamento */}
        {consultaSelecionada && (
          <View style={styles.motivoSection}>
            <Text style={styles.subtitleMotivo}>Motivo do Cancelamento:</Text>
            
            <View style={styles.botoesMotivoContainer}>
              <TouchableOpacity
                style={[styles.botaoMotivo, motivo === 'cliente' && styles.botaoMotivoAtivo]}
                onPress={() => setMotivo('cliente')}
              >
                <Text style={[styles.textoBotaoMotivo, motivo === 'cliente' && styles.textoBotaoMotivoAtivo]}>
                  Solicitação do Cliente
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.botaoMotivo, motivo === 'falta' && styles.botaoMotivoAtivo]}
                onPress={() => setMotivo('falta')}
              >
                <Text style={[styles.textoBotaoMotivo, motivo === 'falta' && styles.textoBotaoMotivoAtivo]}>
                  Não Comparecimento
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnConfirmarCancelamento} onPress={lidarComCancelamento}>
              <Text style={styles.textoBtnConfirmar}>Efetivar Cancelamento</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

