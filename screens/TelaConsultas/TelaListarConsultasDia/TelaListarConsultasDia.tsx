import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './TelaListarConsultasDiaStyle';

interface Props {
    onSelecionarConsulta: (paciente: string) => void;
    onVoltar: () => void;
    perfilUsuario: 'secretaria' | 'medico' | 'admin'; // Adicionado para identificar quem logou
}

export default function TelaListarConsultasDia({ onSelecionarConsulta, onVoltar, perfilUsuario }: Props) {
    const consultas = [
        { id: '1', paciente: 'Harrier Du Bois', hora: '08:00', tipo: 'Consulta' },
        { id: '2', paciente: 'Kim Kitsuragi', hora: '09:00', tipo: 'Retorno' },
        { id: '3', paciente: 'Klaasje Amandou', hora: '10:00', tipo: 'Consulta' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
                    <Text style={styles.textoVoltar}>VOLTAR</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Consultas do Dia</Text>
                <View style={{ width: 60 }} />
            </View>

            <FlatList
                data={consultas}
                contentContainerStyle={{ padding: 16 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.hora}>{item.hora}</Text>
                            <Text style={styles.paciente}>{item.paciente}</Text>
                            <Text style={styles.tipo}>{item.tipo}</Text>
                        </View>

                        {/* REGRA DE NEGÓCIO: Botão só renderiza se o perfil for 'medico' */}
                        {perfilUsuario === 'medico' && (
                            <TouchableOpacity
                                style={styles.botaoAtender}
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