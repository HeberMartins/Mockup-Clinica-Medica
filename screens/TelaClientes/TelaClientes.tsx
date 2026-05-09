import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { ListaClientes, Cliente } from '../../components/ListaClientes/ListaClientes';
import BotaoNovoCliente from '../../components/BotoesClientes/BotoesClientes';
import { useTheme } from '../../ThemeContext';
import { styles } from './TelaClientesStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TelaClientesProps {
    clientes: Cliente[];
    onNovoCliente: () => void;
    onVoltar: () => void;
}

export default function TelaClientes({ clientes, onNovoCliente, onVoltar }: TelaClientesProps) {
    const { theme, isDark, toggleTheme } = useTheme();

    const pacientesExemplo: Cliente[] = [
        { identificador: 1, nome: 'Harrier Du Bois', email: 'harry@revachol.com', telefone: '11 9999-0001', dtNascimento: '1970-05-15', logradouro: 'Rua das Flores', numero: 42, complemento: 'Apto 1', bairro: 'Martinaise', cidade: 'Revachol', estado: 'RE' },
        { identificador: 2, nome: 'Kim Kitsuragi', email: 'kim@rpd.com', telefone: '11 9999-0002', dtNascimento: '1975-10-20', logradouro: 'Av. Central', numero: 101, complemento: '', bairro: 'Distrito 4', cidade: 'Revachol', estado: 'RE' },
    ];

    const listaParaExibir = clientes.length > 0 ? clientes : pacientesExemplo;

    const [modalVisivel, setModalVisivel] = useState(false);
    const [pacienteSelecionado, setPacienteSelecionado] = useState<Cliente | null>(null);

    const abrirDetalhes = (paciente: Cliente) => {
        setPacienteSelecionado(paciente);
        setModalVisivel(true);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header Adaptável */}
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={onVoltar} style={styles.botaoVoltar}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
                    <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style={[styles.titulo, { color: theme.text }]}>Pacientes</Text>

                <TouchableOpacity onPress={toggleTheme} style={{ padding: 5 }}>
                    <MaterialCommunityIcons
                        name={isDark ? "weather-sunny" : "weather-night"}
                        size={22}
                        color={theme.textSecondary}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1 }}>
                {listaParaExibir.map((item) => (
                    <TouchableOpacity
                        key={item.identificador}
                        style={[styles.cardPaciente, { backgroundColor: theme.card, borderColor: theme.border }]}
                        onPress={() => abrirDetalhes(item)}
                    >
                        <View>
                            <Text style={[styles.nomePaciente, { color: theme.text }]}>{item.nome}</Text>
                            <Text style={[styles.subtituloPaciente, { color: theme.textSecondary }]}>{item.email}</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" size={24} color={theme.primary} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => setModalVisivel(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
                        <View style={styles.modalHeader}>
                            <Text style={[styles.modalTitulo, { color: theme.text }]}>Detalhes do Paciente</Text>
                            <TouchableOpacity onPress={() => setModalVisivel(false)}>
                                <MaterialCommunityIcons name="close" size={28} color="#ef4444" />
                            </TouchableOpacity>
                        </View>

                        {pacienteSelecionado && (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={[styles.label, { color: theme.textSecondary }]}>NOME:</Text>
                                <TextInput
                                    style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                                    defaultValue={pacienteSelecionado.nome}
                                    placeholderTextColor={theme.textSecondary}
                                />

                                <Text style={[styles.label, { color: theme.textSecondary }]}>TELEFONE:</Text>
                                <TextInput
                                    style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                                    defaultValue={pacienteSelecionado.telefone}
                                    placeholderTextColor={theme.textSecondary}
                                />

                                <Text style={[styles.label, { color: theme.textSecondary }]}>EMAIL:</Text>
                                <TextInput
                                    style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                                    defaultValue={pacienteSelecionado.email}
                                    placeholderTextColor={theme.textSecondary}
                                />

                                <View style={[styles.secaoHistorico, { backgroundColor: isDark ? '#334155' : '#f1f5f9' }]}>
                                    <Text style={[styles.tituloHistorico, { color: theme.text }]}>Histórico Recente</Text>
                                    <View style={[styles.historicoItem, { borderLeftColor: theme.primary }]}>
                                        <Text style={[styles.dataHistorico, { color: theme.textSecondary }]}>12/03/2026</Text>
                                        <Text style={[styles.textoHistorico, { color: theme.text }]}>Consulta de rotina realizada. Pressão estável.</Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={[styles.botaoSalvar, { backgroundColor: theme.primary }]}
                                    onPress={() => {
                                        alert("Alterações salvas!");
                                        setModalVisivel(false);
                                    }}
                                >
                                    <Text style={styles.textoBotaoSalvar}>SALVAR EDIÇÃO</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        )}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}