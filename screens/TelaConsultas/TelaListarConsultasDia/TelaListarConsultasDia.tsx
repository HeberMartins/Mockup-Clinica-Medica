import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTheme } from '../../../ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaListarConsultasDiaStyle';

interface Props {
    onSelecionarConsulta: (paciente: string) => void;
    onVoltar: () => void;
    perfilUsuario: 'secretaria' | 'medico' | 'admin';
}

export default function TelaListarConsultasDia({ onSelecionarConsulta, onVoltar, perfilUsuario }: Props) {
    const { theme, isDark, toggleTheme } = useTheme();

    const consultas = [
        { id: '1', paciente: 'Harrier Du Bois', hora: '08:00', tipo: 'Consulta' },
        { id: '2', paciente: 'Kim Kitsuragi', hora: '09:00', tipo: 'Retorno' },
        { id: '3', paciente: 'Klaasje Amandou', hora: '10:00', tipo: 'Consulta' },
    ];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header Adaptável */}
            <View style={[styles.headerContainer, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
                    <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style={[styles.header, { color: theme.text }]}>Consultas do Dia</Text>

                <TouchableOpacity onPress={toggleTheme}>
                    <MaterialCommunityIcons
                        name={isDark ? "weather-sunny" : "weather-night"}
                        size={22}
                        color={theme.textSecondary}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={consultas}
                contentContainerStyle={{ padding: 16 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
                        <View style={styles.infoContainer}>
                            <Text style={[styles.hora, { color: theme.primary }]}>{item.hora}</Text>
                            <View style={{ flex: 1, marginLeft: 12 }}>
                                <Text style={[styles.paciente, { color: theme.text }]}>{item.paciente}</Text>
                                <Text style={[styles.tipo, { color: theme.textSecondary }]}>{item.tipo}</Text>
                            </View>
                        </View>

                        {/* REGRA DE NEGÓCIO: Botão só renderiza se o perfil for 'medico' */}
                        {perfilUsuario === 'medico' && (
                            <TouchableOpacity
                                style={[styles.botaoAtender, { backgroundColor: theme.primary }]}
                                onPress={() => onSelecionarConsulta(item.paciente)}
                            >
                                <Text style={styles.textoBotao}>ATENDER</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            />
        </SafeAreaView>
    );
}