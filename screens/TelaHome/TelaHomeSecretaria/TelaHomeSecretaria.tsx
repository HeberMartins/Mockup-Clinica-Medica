import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../../ThemeContext';
import { styles } from './TelaHomeSecretariaStyle';

const SecretariaHome = ({ navigation }: { navigation: any }) => {
    const { theme, toggleTheme, isDark } = useTheme();

    const funcoesPrincipais = [
        { id: 1, title: 'Pacientes', icon: 'account-multiple-plus', screen: 'lista', color: '#0284c7' },
        { id: 2, title: 'Agenda', icon: 'calendar-clock', screen: 'marcacao', color: '#059669' },
        { id: 3, title: 'Check-in', icon: 'account-check', screen: 'confirmacao', color: '#d97706' },
        { id: 4, title: 'Hoje', icon: 'clipboard-list-outline', screen: 'listaDia', color: '#6366f1' },
    ];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.content}>

                {/* 1. CABEÇALHO COM BOTÃO DE TEMA */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[styles.welcomeText, { color: theme.text }]}>Clínica Maria Auxiliadora</Text>
                            <Text style={[styles.dateText, { color: theme.textSecondary }]}>Gestão Operacional</Text>
                        </View>

                        {/* Botão para alternar Dark/Light Mode */}
                        <TouchableOpacity
                            onPress={toggleTheme}
                            style={{ padding: 10, borderRadius: 50, backgroundColor: isDark ? '#334155' : '#f1f5f9' }}
                        >
                            <MaterialCommunityIcons
                                name={isDark ? "weather-sunny" : "weather-night"}
                                size={24}
                                color={isDark ? "#fbbf24" : "#475569"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 2. NAVEGAÇÃO POR FUNÇÕES */}
                <View style={styles.funcoesContainer}>
                    {funcoesPrincipais.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.botaoFuncao, { backgroundColor: theme.card }]}
                            onPress={() => navigation.navigate(item.screen)}
                        >
                            <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                                <MaterialCommunityIcons name={item.icon as any} size={24} color="white" />
                            </View>
                            <Text style={[styles.textoFuncao, { color: theme.text }]}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* 3. DASHBOARD CENTRAL */}
                <View style={[styles.dashboardCentral, { backgroundColor: theme.card, borderColor: theme.border, borderWidth: isDark ? 1 : 0 }]}>
                    <Text style={[styles.dashboardTitulo, { color: theme.text }]}>Resumo do Dia</Text>

                    <View style={styles.statsGrid}>
                        <View style={[styles.statCard, { backgroundColor: isDark ? '#334155' : '#f8fafc' }]}>
                            <Text style={[styles.statNumero, { color: theme.text }]}>12</Text>
                            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Agendados</Text>
                        </View>
                        <View style={[styles.statCard, styles.statDestaque]}>
                            <Text style={styles.statNumero}>04</Text>
                            <Text style={styles.statLabel}>Na Espera</Text>
                        </View>
                    </View>

                    <View style={styles.statsGrid}>
                        <View style={[styles.statCard, { backgroundColor: isDark ? '#334155' : '#f8fafc' }]}>
                            <Text style={[styles.statNumero, { color: theme.text }]}>06</Text>
                            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Finalizados</Text>
                        </View>
                        <View style={[styles.statCard, { backgroundColor: isDark ? '#334155' : '#f8fafc' }]}>
                            <Text style={[styles.statNumero, { color: '#dc3545' }]}>02</Text>
                            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Cancelados</Text>
                        </View>
                    </View>
                </View>

                {/* 4. BOTÃO DE CANCELAMENTO */}
                <TouchableOpacity
                    style={[styles.botaoCancelamento, { backgroundColor: isDark ? '#450a0a' : '#fef2f2' }]}
                    onPress={() => navigation.navigate('cancelamento')}
                >
                    <MaterialCommunityIcons name="calendar-remove" size={20} color="#dc3545" />
                    <Text style={[styles.textoCancelamento, { color: '#dc3545' }]}>Gerenciar Cancelamentos</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default SecretariaHome;