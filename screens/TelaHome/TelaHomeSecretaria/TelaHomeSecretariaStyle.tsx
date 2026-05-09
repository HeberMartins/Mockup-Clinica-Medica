import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f5f9', // Tom de cinza azulado claro
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        marginBottom: 25,
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    dateText: {
        fontSize: 14,
        color: '#64748b',
    },

    /* 2. NAVEGAÇÃO POR FUNÇÕES (SUPERIOR) */
    funcoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    botaoFuncao: {
        backgroundColor: 'white',
        width: '23%', // Ajustado para caber 4 em linha
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    iconCircle: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    textoFuncao: {
        fontSize: 10,
        fontWeight: '600',
        color: '#334155',
        textAlign: 'center',
    },

    /* 3. DASHBOARD CENTRAL */
    dashboardCentral: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    dashboardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 20,
        textAlign: 'center',
    },
    statsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    statCard: {
        backgroundColor: '#f8fafc',
        width: '48%',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    statDestaque: {
        backgroundColor: '#eff6ff',
        borderColor: '#bfdbfe',
    },
    statNumero: {
        fontSize: 24,
        fontWeight: '800',
        color: '#0284c7',
    },
    statLabel: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 2,
        fontWeight: '500',
    },

    /* 4. BOTÃO DE CANCELAMENTO */
    botaoCancelamento: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        padding: 15,
        width: '100%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fecaca',
        backgroundColor: '#fff1f2',
    },
    textoCancelamento: {
        color: '#dc3545',
        fontWeight: 'bold',
        marginLeft: 10,
    },
});