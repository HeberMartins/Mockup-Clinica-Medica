import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../../ThemeContext';
import { styles } from './TelaHomeAdmStyle';

const AdmHome = ({ navigation }: { navigation: any }) => {
    // Consumindo o tema global
    const { theme, toggleTheme, isDark } = useTheme();

    const secoes = [
        {
            titulo: 'Gestão Operacional',
            data: [
                { id: 1, title: 'Agenda Global', icon: 'calendar-multiselect', screen: 'agenda', color: '#0284c7' },
                { id: 2, title: 'Pacientes', icon: 'account-group', screen: 'listaPacientes', color: '#0f172a' },
            ]
        },
        {
            titulo: 'Configurações do Sistema',
            data: [
                { id: 3, title: 'Especialidades', icon: 'clipboard-plus', screen: 'cadastroEspec', color: '#7c3aed' },
                { id: 4, title: 'Usuários/Acessos', icon: 'shield-account', screen: 'gestaoUsuarios', color: '#475569' },
            ]
        }
    ];

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.content}>

                {/* HEADER COM BOTÃO DE ALTERNAR TEMA */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[styles.welcomeText, { color: theme.text }]}>Painel Administrativo</Text>
                            <Text style={[styles.statusText, { color: theme.textSecondary }]}>Acesso Total - Admin</Text>
                        </View>

                        <TouchableOpacity
                            onPress={toggleTheme}
                            style={{ padding: 10, borderRadius: 50, backgroundColor: isDark ? '#334155' : '#e2e8f0' }}
                        >
                            <MaterialCommunityIcons
                                name={isDark ? "weather-sunny" : "weather-night"}
                                size={24}
                                color={isDark ? "#fbbf24" : "#475569"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* DASHBOARD COM CORES ADAPTÁVEIS */}
                <View style={[styles.dashboardAdm, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <View style={styles.kpiItem}>
                        <Text style={[styles.kpiLabel, { color: theme.textSecondary }]}>Consultas Hoje</Text>
                        <Text style={[styles.kpiValue, { color: theme.text }]}>24</Text>
                    </View>
                    <View style={[styles.dividerV, { backgroundColor: theme.border }]} />
                    <View style={styles.kpiItem}>
                        <Text style={[styles.kpiLabel, { color: theme.textSecondary }]}>Novos Pacientes</Text>
                        <Text style={[styles.kpiValue, { color: theme.text }]}>08</Text>
                    </View>
                </View>

                {/* SEÇÕES E CARDS */}
                {secoes.map((secao, index) => (
                    <View key={index} style={styles.secaoContainer}>
                        <Text style={[styles.secaoTitulo, { color: theme.text }]}>{secao.titulo}</Text>
                        <View style={styles.grid}>
                            {secao.data.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[styles.cardAdm, { backgroundColor: theme.card, borderColor: theme.border }]}
                                    onPress={() => navigation.navigate(item.screen)}
                                >
                                    <MaterialCommunityIcons
                                        name={item.icon as any}
                                        size={28}
                                        color={isDark && item.color === '#0f172a' ? '#cbd5e1' : item.color}
                                    />
                                    <Text style={[styles.cardTextAdm, { color: theme.text }]}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}

            </ScrollView>
        </SafeAreaView>
    );
};

export default AdmHome;