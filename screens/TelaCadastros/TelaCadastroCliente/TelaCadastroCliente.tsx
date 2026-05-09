import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { FormularioCliente } from '../../../components/FormularioCadastroCliente/FormularioCadstroCliente';
import { Cliente } from '../../../components/ListaClientes/ListaClientes';
import { useTheme } from '../../../ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaCadastroClienteStyle';

interface TelaCadastroProps {
    onVoltar: () => void;
    onSalvarCliente: (cliente: Cliente) => void;
}

export default function TelaCadastro({ onVoltar, onSalvarCliente }: TelaCadastroProps) {
    const { theme, isDark, toggleTheme } = useTheme();

    const lidarComSalvar = (novoCliente: Cliente) => {
        Alert.alert("Sucesso", "Cliente registrado com sucesso.");
        onSalvarCliente(novoCliente);
        onVoltar();
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header Adaptável */}
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={onVoltar} style={styles.botaoVoltar}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
                    <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style={[styles.titulo, { color: theme.text }]}>NOVO REGISTRO</Text>

                {/* Switch de Tema no Cadastro */}
                <TouchableOpacity onPress={toggleTheme}>
                    <MaterialCommunityIcons
                        name={isDark ? "weather-sunny" : "weather-night"}
                        size={22}
                        color={theme.textSecondary}
                    />
                </TouchableOpacity>
            </View>

            <FormularioCliente
                onSalvar={lidarComSalvar}
                onCancelar={onVoltar}
            />
        </SafeAreaView>
    );
}