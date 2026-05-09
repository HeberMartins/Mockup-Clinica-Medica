import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useTheme } from '../../../ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaConfirmacaoConsultaStyle';

interface Props {
    onVoltar?: () => void;
}

export default function TelaConfirmacaoConsulta({ onVoltar }: Props) {
    const { theme, isDark, toggleTheme } = useTheme();

    const [consultas, setConsultas] = useState([
        { id: '1', cliente: 'Maria Souza', medico: 'Dra. Ana', horario: '14:00' },
        { id: '2', cliente: 'Pedro Santos', medico: 'Dr. Roberto', horario: '15:30' },
    ]);

    const confirmarConsulta = (id: string) => {
        Alert.alert('Sucesso', 'Consulta confirmada com sucesso!');
        setConsultas(consultas.filter((item) => item.id !== id));
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* HEADER ADAPTÁVEL */}
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
                    <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style={[styles.titulo, { color: theme.text }]}>Confirmação</Text>

                <TouchableOpacity onPress={toggleTheme}>
                    <MaterialCommunityIcons
                        name={isDark ? "weather-sunny" : "weather-night"}
                        size={22}
                        color={theme.textSecondary}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
                    Atendimentos de hoje não confirmados
                </Text>

                <FlatList
                    data={consultas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
                            <View>
                                <Text style={[styles.cardTitle, { color: theme.text }]}>{item.cliente}</Text>
                                <Text style={[styles.cardDetails, { color: theme.textSecondary }]}>
                                    {item.medico} – {item.horario}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: theme.primary }]}
                                onPress={() => confirmarConsulta(item.id)}
                            >
                                <MaterialCommunityIcons name="check" size={18} color="white" />
                                <Text style={styles.buttonText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}