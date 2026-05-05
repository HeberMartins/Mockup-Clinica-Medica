import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './TelaEncerramentoConsultaStyle'; 

interface Props {
  onVoltar?: () => void;
}

export default function TelaEncerramentoConsulta({ onVoltar }: Props) {
  const [consultasPendentes] = useState([
    { id: 1, paciente: 'Ana Clara', medico: 'Dr. Carlos', tipo: 'Consulta Nova', valorBase: 'R$ 200,00' },
    { id: 2, paciente: 'Harrier Du Bois', medico: 'Dra. Silvia', tipo: 'Retorno', valorBase: 'Isento (Retorno)' }
  ]);

  const [consultaSelecionada, setConsultaSelecionada] = useState<number | null>(null);
  const [procedimentos, setProcedimentos] = useState('');
  const [pagamento, setPagamento] = useState('');

  const lidarComEncerramento = () => {
    if (!procedimentos || !pagamento) {
      alert('Por favor, preencha os procedimentos e as informações de pagamento.');
      return;
    }
    alert('Consulta encerrada e registrada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoVoltar}>VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Encerrar Consulta</Text>
        <View style={{ width: 80 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.subtitle}>Aguardando Encerramento (Realizadas)</Text>
        
        <View style={styles.listaContainer}>
          {consultasPendentes.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.cardConsulta,
                consultaSelecionada === item.id && styles.cardSelected,
              ]}
              onPress={() => setConsultaSelecionada(item.id)}
            >
              <Text style={styles.textoPaciente}>Paciente: {item.paciente}</Text>
              <Text style={styles.textoDetalhe}>Médico: {item.medico}</Text>
              <Text style={styles.textoDetalhe}>
                Valor: {item.tipo === 'Retorno' ? 'Não Cobrada (Retorno)' : item.valorBase}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {consultaSelecionada && (
          <View style={styles.formSection}>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Procedimentos Realizados:</Text>
              <TextInput
                style={[styles.inputField, styles.textArea]}
                multiline
                numberOfLines={3}
                placeholder="Ex: Eletrocardiograma, Aferição de pressão..."
                value={procedimentos}
                onChangeText={setProcedimentos}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Registro de Pagamento:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Ex: Cartão de Crédito, Dinheiro, Convênio..."
                value={pagamento}
                onChangeText={setPagamento}
              />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={lidarComEncerramento}>
              <Text style={styles.saveButtonText}>Confirmar e Encerrar</Text>
            </TouchableOpacity>
            
          </View>
        )}
      </ScrollView>
    </View>
  );
}

