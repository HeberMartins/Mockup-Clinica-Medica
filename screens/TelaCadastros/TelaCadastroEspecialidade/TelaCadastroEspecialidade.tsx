import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../../ThemeContext';
import { styles } from './TelaCadastroEspecialidadeStyle';

interface Props {
    onVoltar: () => void;
}

export default function TelaCadastroEspecialidade({ onVoltar }: Props) {
    const { theme, isDark, toggleTheme } = useTheme();

    const [nomeEspecialidade, setNomeEspecialidade] = useState('');
    const [descricao, setDescricao] = useState('');

    const [especialidades, setEspecialidades] = useState([
        { id: '1', nome: 'Cardiologia', descricao: 'Saúde do coração' },
        { id: '2', nome: 'Ortopedia', descricao: 'Ossos e articulações' },
    ]);

    const handleSalvar = () => {
        if (!nomeEspecialidade.trim()) {
            Alert.alert("Erro", "O nome da especialidade é obrigatório.");
            return;
        }

        const nova = {
            id: Math.random().toString(),
            nome: nomeEspecialidade,
            descricao: descricao
        };

        setEspecialidades([...especialidades, nova]);
        setNomeEspecialidade('');
        setDescricao('');
        Alert.alert("Sucesso", "Especialidade cadastrada!");
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header Adaptável */}
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
                    <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style={[styles.titulo, { color: theme.text }]}>Especialidades</Text>

                <TouchableOpacity onPress={toggleTheme}>
                    <MaterialCommunityIcons
                        name={isDark ? "weather-sunny" : "weather-night"}
                        size={22}
                        color={theme.textSecondary}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Formulário de Cadastro */}
                <View style={[styles.cardForm, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.label, { color: theme.textSecondary }]}>NOME DA ESPECIALIDADE:</Text>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                        placeholder="Ex: Pediatria, Dermatologia..."
                        placeholderTextColor={theme.textSecondary}
                        value={nomeEspecialidade}
                        onChangeText={setNomeEspecialidade}
                    />

                    <Text style={[styles.label, { color: theme.textSecondary }]}>DESCRIÇÃO (OPCIONAL):</Text>
                    <TextInput
                        style={[styles.input, styles.textArea, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                        placeholder="Breve descrição da área..."
                        placeholderTextColor={theme.textSecondary}
                        multiline
                        numberOfLines={3}
                        value={descricao}
                        onChangeText={setDescricao}
                    />

                    <TouchableOpacity style={[styles.botaoSalvar, { backgroundColor: theme.primary }]} onPress={handleSalvar}>
                        <Text style={styles.textoBotaoSalvar}>CADASTRAR ESPECIALIDADE</Text>
                    </TouchableOpacity>
                </View>

                {/* Listagem de Especialidades Existentes */}
                <Text style={[styles.subtitulo, { color: theme.text }]}>Especialidades Cadastradas</Text>

                {especialidades.map((item) => (
                    <View key={item.id} style={[styles.itemLista, { backgroundColor: theme.card, borderColor: theme.border }]}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.nomeItem, { color: theme.text }]}>{item.nome}</Text>
                            <Text style={[styles.descItem, { color: theme.textSecondary }]}>{item.descricao}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.botaoExcluir}
                            onPress={() => Alert.alert("Aviso", "Função de excluir em desenvolvimento")}
                        >
                            <MaterialCommunityIcons name="delete-outline" size={24} color="#ef4444" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}