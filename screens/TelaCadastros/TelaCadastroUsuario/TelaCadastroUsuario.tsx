import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../../ThemeContext';
import { styles } from './TelaCadastroUsuarioStyle';

interface Props {
    onVoltar: () => void;
}

export default function TelaCadastroUsuario({ onVoltar }: Props) {
    const { theme, isDark, toggleTheme } = useTheme();

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [perfil, setPerfil] = useState<'secretaria' | 'medico' | 'admin' | ''>('');

    const [usuariosCadastrados, setUsuariosCadastrados] = useState([
        { id: '1', nome: 'Ana Maria', usuario: 'ana.secretaria', perfil: 'secretaria' },
        { id: '2', nome: 'Carlos Alberto', usuario: 'dr.carlos', perfil: 'medico' },
    ]);

    const handleSalvarUsuario = () => {
        if (!nome || !usuario || !senha || !perfil) {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return;
        }

        const novoUsuario = {
            id: Math.random().toString(),
            nome,
            usuario: usuario.toLowerCase(),
            perfil
        };

        setUsuariosCadastrados([...usuariosCadastrados, novoUsuario]);
        setNome(''); setUsuario(''); setSenha(''); setPerfil('');

        Alert.alert("Sucesso", `Usuário ${nome} cadastrado com sucesso!`);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            {/* HEADER ADAPTÁVEL */}
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={theme.primary} />
                    <Text style={[styles.textoVoltar, { color: theme.primary }]}>VOLTAR</Text>
                </TouchableOpacity>
                <Text style={[styles.titulo, { color: theme.text }]}>Usuários</Text>

                <TouchableOpacity onPress={toggleTheme}>
                    <MaterialCommunityIcons
                        name={isDark ? "weather-sunny" : "weather-night"}
                        size={22}
                        color={theme.textSecondary}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={[styles.cardForm, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.label, { color: theme.textSecondary }]}>NOME COMPLETO:</Text>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                        placeholder="Ex: João da Silva"
                        placeholderTextColor={theme.textSecondary}
                        value={nome}
                        onChangeText={setNome}
                    />

                    <Text style={[styles.label, { color: theme.textSecondary }]}>LOGIN DE ACESSO:</Text>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                        placeholder="Ex: joao.user"
                        autoCapitalize="none"
                        placeholderTextColor={theme.textSecondary}
                        value={usuario}
                        onChangeText={setUsuario}
                    />

                    <Text style={[styles.label, { color: theme.textSecondary }]}>SENHA INICIAL:</Text>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.border }]}
                        placeholder="******"
                        secureTextEntry
                        placeholderTextColor={theme.textSecondary}
                        value={senha}
                        onChangeText={setSenha}
                    />

                    <Text style={[styles.label, { color: theme.textSecondary }]}>PERFIL DE ACESSO:</Text>
                    <View style={[styles.pickerContainer, { backgroundColor: theme.background, borderColor: theme.border }]}>
                        <Picker
                            selectedValue={perfil}
                            onValueChange={(itemValue) => setPerfil(itemValue as any)}
                            dropdownIconColor={theme.primary}
                            style={{ color: theme.text }}
                        >
                            <Picker.Item label="Selecione um perfil..." value="" color={theme.textSecondary} />
                            <Picker.Item label="Médico(a)" value="medico" color={theme.text} />
                            <Picker.Item label="Secretário(a)" value="secretaria" color={theme.text} />
                            <Picker.Item label="Administrador" value="admin" color={theme.text} />
                        </Picker>
                    </View>

                    <TouchableOpacity style={[styles.botaoSalvar, { backgroundColor: theme.primary }]} onPress={handleSalvarUsuario}>
                        <Text style={styles.textoBotaoSalvar}>SALVAR USUÁRIO</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.subtitulo, { color: theme.text }]}>Usuários no Sistema</Text>

                {usuariosCadastrados.map((user) => (
                    <View key={user.id} style={[styles.itemUsuario, { backgroundColor: theme.card, borderColor: theme.border }]}>
                        <View style={[styles.avatarCirculo, { backgroundColor: theme.primary }]}>
                            <MaterialCommunityIcons
                                name={user.perfil === 'medico' ? 'doctor' : user.perfil === 'admin' ? 'shield-check' : 'account-tie'}
                                size={20}
                                color="white"
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[styles.nomeUser, { color: theme.text }]}>{user.nome}</Text>
                            <Text style={[styles.loginUser, { color: theme.textSecondary }]}>{user.usuario} • {user.perfil}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}