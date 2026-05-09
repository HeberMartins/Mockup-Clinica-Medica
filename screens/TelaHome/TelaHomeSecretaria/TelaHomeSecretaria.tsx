import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './TelaHomeSecretariaStyle';

const SecretariaHome = ({ navigation }: { navigation: any }) => {

    // Lista atualizada: Removido o item do "Caixa"const funcoesPrincipais = [
    const funcoesPrincipais = [
        { id: 1, title: 'Pacientes', icon: 'account-multiple-plus', screen: 'lista', color: '#0284c7' },
        { id: 2, title: 'Agenda', icon: 'calendar-clock', screen: 'marcacao', color: '#059669' },
        { id: 3, title: 'Check-in', icon: 'account-check', screen: 'confirmacao', color: '#d97706' },
        { id: 4, title: 'Hoje', icon: 'clipboard-list-outline', screen: 'listaDia', color: '#6366f1' }, // NOVO BOTÃO
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                {/* 1. CABEÇALHO */}
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Clínica Maria Auxiliadora</Text>
                    <Text style={styles.dateText}>Gestão Operacional</Text>
                </View>

                {/* 2. NAVEGAÇÃO POR FUNÇÕES */}
                <View style={styles.funcoesContainer}>
                    {funcoesPrincipais.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.botaoFuncao}
                            onPress={() => navigation.navigate(item.screen)}
                        >
                            <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                                <MaterialCommunityIcons name={item.icon as any} size={24} color="white" />
                            </View>
                            <Text style={styles.textoFuncao}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* 3. DASHBOARD CENTRAL */}
                <View style={styles.dashboardCentral}>
                    <Text style={styles.dashboardTitulo}>Resumo do Dia</Text>

                    <View style={styles.statsGrid}>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumero}>12</Text>
                            <Text style={styles.statLabel}>Agendados</Text>
                        </View>
                        <View style={[styles.statCard, styles.statDestaque]}>
                            <Text style={styles.statNumero}>04</Text>
                            <Text style={styles.statLabel}>Na Espera</Text>
                        </View>
                    </View>

                    <View style={styles.statsGrid}>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumero}>06</Text>
                            <Text style={styles.statLabel}>Finalizados</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={[styles.statNumero, {color: '#dc3545'}]}>02</Text>
                            <Text style={styles.statLabel}>Cancelados</Text>
                        </View>
                    </View>
                </View>

                {/* 4. BOTÃO DE CANCELAMENTO */}
                <TouchableOpacity
                    style={styles.botaoCancelamento}
                    onPress={() => navigation.navigate('cancelamento')}
                >
                    <MaterialCommunityIcons name="calendar-remove" size={20} color="#dc3545" />
                    <Text style={styles.textoCancelamento}>Gerenciar Cancelamentos</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default SecretariaHome;