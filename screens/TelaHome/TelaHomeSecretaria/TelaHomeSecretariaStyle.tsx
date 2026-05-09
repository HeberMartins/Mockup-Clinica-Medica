import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor agora vem via inline style: theme.background
    },
    content: {
        padding: 20,
        paddingBottom: 40, // Espaço extra para o scroll
    },
    header: {
        width: '100%',
        marginBottom: 25,
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 22, // Reduzi levemente para não quebrar em telas menores
        fontWeight: 'bold',
        // color agora vem via inline style: theme.text
    },
    dateText: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 2,
        // color agora vem via inline style: theme.textSecondary
    },

    /* 2. NAVEGAÇÃO POR FUNÇÕES */
    funcoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    botaoFuncao: {
        width: '23%',
        paddingVertical: 15,
        borderRadius: 15, // Bordas mais arredondadas para um ar moderno
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // backgroundColor agora vem via inline style: theme.card
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
        fontWeight: '700',
        textAlign: 'center',
        // color agora vem via inline style: theme.text
    },

    /* 3. DASHBOARD CENTRAL */
    dashboardCentral: {
        width: '100%',
        borderRadius: 24,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        // backgroundColor, borderColor e borderWidth vêm via inline style
    },
    dashboardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        // color agora vem via inline style: theme.text
    },
    statsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    statCard: {
        width: '48%',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'transparent', // Base transparente
    },
    statDestaque: {
        backgroundColor: '#eff6ff',
        borderColor: '#bfdbfe',
    },
    statNumero: {
        fontSize: 24,
        fontWeight: '800',
        // color agora vem via inline style: theme.text (ou fixo se preferir destaque)
    },
    statLabel: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        // color agora vem via inline style: theme.textSecondary
    },

    /* 4. BOTÃO DE CANCELAMENTO */
    botaoCancelamento: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 18,
        width: '100%',
        borderRadius: 16,
        borderWidth: 1,
        // Cores (background e border) vêm via inline style
    },
    textoCancelamento: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 14,
        // color fixo: #dc3545
    },
});