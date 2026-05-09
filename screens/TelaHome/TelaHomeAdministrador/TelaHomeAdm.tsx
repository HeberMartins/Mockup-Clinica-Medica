import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaHomeAdmStyle';

const AdmHome = ({ navigation }: { navigation: any }) => {

    const secoes = [
        {
            titulo: 'Gestão Operacional',
            data: [
                { id: 1, title: 'Agenda Global', icon: 'calendar-multiselect', screen: 'agenda', color: '#0284c7' },
                { id: 2, title: 'Pacientes', icon: 'account-group', screen: 'listaPacientes', color: '#0f172a' },
            ]
        },
        {
            titulo: 'Cadastros Mestres',
            data: [
                { id: 3, title: 'Médicos', icon: 'doctor', screen: 'cadastroMedico', color: '#059669' },
                { id: 4, title: 'Especialidades', icon: 'clipboard-plus', screen: 'cadastroEspec', color: '#7c3aed' },
                { id: 5, title: 'Usuários/Sistema', icon: 'shield-account', screen: 'gestaoUsuarios', color: '#475569' },
            ]
        },
        {
            titulo: 'Financeiro e Relatórios',
            data: [
                { id: 6, title: 'Faturamento', icon: 'finance', screen: 'relatorios', color: '#d97706' },
                { id: 7, title: 'Logs de Acesso', icon: 'history', screen: 'logs', color: '#dc3545' },
            ]
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Painel Administrativo</Text>
                    <Text style={styles.statusText}>Acesso Total - Admin</Text>
                </View>

                {/* Dashboard de Visão Geral (KPIs do Administrador) */}
                <View style={styles.dashboardAdm}>
                    <View style={styles.kpiItem}>
                        <Text style={styles.kpiLabel}>Atendimentos/Mês</Text>
                        <Text style={styles.kpiValue}>342</Text>
                    </View>
                    <View style={styles.dividerV} />
                    <View style={styles.kpiItem}>
                        <Text style={styles.kpiLabel}>Receita Estimada</Text>
                        <Text style={[styles.kpiValue, {color: '#059669'}]}>R$ 42k</Text>
                    </View>
                </View>

                {/* Mapeamento das Seções de Controle */}
                {secoes.map((secao, index) => (
                    <View key={index} style={styles.secaoContainer}>
                        <Text style={styles.secaoTitulo}>{secao.titulo}</Text>
                        <View style={styles.grid}>
                            {secao.data.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.cardAdm}
                                    onPress={() => navigation.navigate(item.screen)}
                                >
                                    <MaterialCommunityIcons name={item.icon as any} size={28} color={item.color} />
                                    <Text style={styles.cardTextAdm}>{item.title}</Text>
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