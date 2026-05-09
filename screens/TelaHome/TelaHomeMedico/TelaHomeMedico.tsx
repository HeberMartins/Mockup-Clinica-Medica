import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './TelaHomeMedicoStyle';

interface Props {
    nomeMedico: string;
    onIniciarConsulta: (paciente: any) => void;
    navigation: {
        navigate: (screen: string) => void;
        replace: (screen: string) => void;
        goBack: () => void;
    };
}

export default function TelaHomeMedico({ nomeMedico, onIniciarConsulta }: Props) {
    // Simulação da agenda do dia (Requisito 4)
    const [agenda] = useState([
        { id: '1', hora: '08:00', paciente: 'Harrier Du Bois', tipo: 'Consulta', status: 'Confirmado' },
        { id: '2', hora: '09:00', paciente: 'Kim Kitsuragi', tipo: 'Retorno', status: 'Confirmado' },
        { id: '3', hora: '10:00', paciente: 'Klaasje Amandou', tipo: 'Consulta', status: 'Aguardando' },
        { id: '4', hora: '11:00', paciente: 'Evrart Claire', tipo: 'Consulta', status: 'Cancelado' },
    ]);

    const renderItem = ({ item }: any) => (
        <View style={[styles.card, item.status === 'Cancelado' && styles.cardCancelado]}>
            <View style={styles.infoContainer}>
                <Text style={styles.hora}>{item.hora}</Text>
                <View>
                    <Text style={styles.pacienteNome}>{item.paciente}</Text>
                    <Text style={styles.tipoConsulta}>{item.tipo}</Text>
                </View>
            </View>

            {/* O botão agora chama a função que levará direto para 'realizacao' no App.tsx */}
            {item.status === 'Confirmado' ? (
                <TouchableOpacity
                    style={styles.botaoAtender}
                    onPress={() => onIniciarConsulta(item.paciente)}
                >
                    <Text style={styles.textoBotaoAtender}>ATENDER</Text>
                </TouchableOpacity>
            ) : (
                <Text style={[styles.statusTexto, item.status === 'Cancelado' ? styles.statusErro : styles.statusAviso]}>
                    {item.status}
                </Text>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerMedico}>
                <Text style={styles.saudacao}>Olá, Dr(a). {nomeMedico}</Text>
                <Text style={styles.subtitulo}>Sua agenda de hoje:</Text>
            </View>

            <FlatList
                data={agenda}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.lista}
                ListEmptyComponent={
                    <Text style={styles.vazio}>Nenhum agendamento para hoje.</Text>
                }
            />
        </View>
    );
}