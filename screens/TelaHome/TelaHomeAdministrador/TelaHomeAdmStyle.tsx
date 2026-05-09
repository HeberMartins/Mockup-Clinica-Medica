import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    content: {
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    statusText: {
        color: '#dc3545', // Vermelho para indicar nível crítico de acesso
        fontWeight: '600',
        fontSize: 12,
        textTransform: 'uppercase',
    },
    dashboardAdm: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        marginBottom: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    kpiItem: {
        alignItems: 'center',
    },
    kpiLabel: {
        fontSize: 12,
        color: '#64748b',
        marginBottom: 5,
    },
    kpiValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    dividerV: {
        width: 1,
        height: '100%',
        backgroundColor: '#e2e8f0',
    },
    secaoContainer: {
        marginBottom: 25,
    },
    secaoTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#475569',
        marginBottom: 12,
        marginLeft: 5,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    cardAdm: {
        backgroundColor: 'white',
        width: '48%',
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    cardTextAdm: {
        marginTop: 8,
        fontSize: 13,
        fontWeight: '600',
        color: '#334155',
        textAlign: 'center',
    },
});