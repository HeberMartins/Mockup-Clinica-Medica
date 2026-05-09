import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { ListaClientes, Cliente } from '../../components/ListaClientes/ListaClientes';
import BotaoNovoCliente from '../../components/BotoesClientes/BotoesClientes';
import { styles } from './TelaClientesStyle';

interface TelaClientesProps {
    clientes: Cliente[];
    onNovoCliente: () => void;
    onVoltar: () => void; // Adicionado para navegação
}

export default function TelaClientes({ clientes, onNovoCliente, onVoltar }: TelaClientesProps) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* Botão Voltar para consistência com o fluxo da secretária */}
                <TouchableOpacity onPress={onVoltar} style={styles.botaoVoltar}>
                    <Text style={styles.textoVoltar}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>Pacientes</Text>

                <BotaoNovoCliente
                    label="Novo Registro"
                    onPress={onNovoCliente}
                />
            </View>

            <ListaClientes clientes={clientes} />
        </SafeAreaView>
    );
}