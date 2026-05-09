import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useTheme } from '../../../ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaHomeMedicoStyle';

interface Props {
    nomeMedico: string;
    onIniciarConsulta: (paciente: any) => void;
    navigation: {
        navigate: (screen: string) => void;
        replace: (screen: string) => void;
        goBack: () => void;
        toggleTheme: () => void;
        isDark: boolean;
    };
}

export default function TelaHomeMedico({ nomeMedico, onIniciarConsulta, navigation }: Props) {
    const { theme, isDark, toggleTheme } = useTheme();

    const [agenda, setAgenda] = useState([
        { id: '1', hora: '08:00', paciente: 'Harrier Du Bois', tipo: 'Consulta', status: 'Confirmado' },
        { id: '2', hora: '09:00', paciente: 'Kim Kitsuragi', tipo: 'Retorno', status: 'Confirmado' },
        { id: '3', hora: '10:00', paciente: 'Klaasje Amandou', tipo: 'Consulta', status: 'Aguardando' },
        { id: '4', hora: '11:00', paciente: 'Evrart Claire', tipo: 'Consulta', status: 'Cancelado' },
    ]);

    const handleCancelarConsulta = (id: string, paciente: string) => {
        Alert.alert(
            "Confirmar Cancelamento",
            `Deseja realmente cancelar a consulta de ${paciente}?`,
            [
                { text: "Não", style: "cancel" },
                {
                    text: "Sim, Cancelar",
                    style: "destructive",
                    onPress: () => {
                        setAgenda(prev => prev.map(item =>
                            item.id === id ? { ...item, status: 'Cancelado' } : item
                        ));
                    }
                }
            ]
        );
    };

    const renderItem = ({ item }: any) => (
        <View style={[
            styles.card,
            { backgroundColor: theme.card, borderColor: theme.border },
            item.status === 'Cancelado' && { opacity: 0.6 }
        ]}>
            <View style={styles.infoContainer}>
                <Text style={[styles.hora, { color: theme.primary }]}>{item.hora}</Text>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.pacienteNome, { color: theme.text }]}>{item.paciente}</Text>
                    <Text style={[styles.tipoConsulta, { color: theme.textSecondary }]}>{item.tipo}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {item.status === 'Confirmado' ? (
                    <>
                        {/* Botão de Cancelar (Ícone) */}
                        <TouchableOpacity
                            style={{ marginRight: 15 }}
                            onPress={() => handleCancelarConsulta(item.id, item.paciente)}
                        >
                            <MaterialCommunityIcons name="calendar-remove" size={24} color="#ef4444" />
                        </TouchableOpacity>

                        {/* Botão de Atender */}
                        <TouchableOpacity
                            style={[styles.botaoAtender, { backgroundColor: theme.primary }]}
                            onPress={() => onIniciarConsulta(item.paciente)}
                        >
                            <Text style={styles.textoBotaoAtender}>ATENDER</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <View style={styles.statusBadge}>
                        <Text style={[
                            styles.statusTexto,
                            item.status === 'Cancelado' ? { color: '#ef4444' } : { color: '#eab308' }
                        ]}>
                            {item.status.toUpperCase()}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.headerMedico, { borderBottomColor: theme.border }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={[styles.saudacao, { color: theme.text }]}>Olá, Dr(a). {nomeMedico}</Text>
                        <Text style={[styles.subtitulo, { color: theme.textSecondary }]}>Sua agenda de hoje:</Text>
                    </View>

                    <TouchableOpacity
                        onPress={toggleTheme}
                        style={{ padding: 8, borderRadius: 50, backgroundColor: isDark ? '#334155' : '#e2e8f0' }}
                    >
                        <MaterialCommunityIcons
                            name={isDark ? "weather-sunny" : "weather-night"}
                            size={22}
                            color={isDark ? "#fbbf24" : "#475569"}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={agenda}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.lista}
                ListEmptyComponent={
                    <Text style={[styles.vazio, { color: theme.textSecondary }]}>
                        Nenhum agendamento para hoje.
                    </Text>
                }
            />
        </SafeAreaView>
    );
}