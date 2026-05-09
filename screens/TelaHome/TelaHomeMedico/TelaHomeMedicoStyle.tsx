import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor agora é dinâmico no componente
    },
    headerMedico: {
        padding: 20,
        paddingTop: 50, // Ajuste para não ficar colado no topo
        borderBottomWidth: 1,
        // backgroundColor e borderBottomColor agora são dinâmicos
    },
    saudacao: {
        fontSize: 22,
        fontWeight: 'bold',
        // color dinâmico
    },
    subtitulo: {
        fontSize: 14,
        marginTop: 4,
        // color dinâmico
    },
    lista: { padding: 16 },
    card: {
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderWidth: 1, // Adicionado para suportar a borda do tema
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, // Garante que o texto não empurre o botão para fora
    },
    hora: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 16
    },
    pacienteNome: {
        fontSize: 16,
        fontWeight: '600'
    },
    tipoConsulta: {
        fontSize: 12
    },
    botaoAtender: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 2,
    },
    textoBotaoAtender: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase'
    },

    /* --- ESTILO ADICIONADO --- */
    statusBadge: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 6,
        backgroundColor: 'rgba(0,0,0,0.05)', // Um fundo bem sutil para destacar o status
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 90,
    },
    /* ------------------------ */

    statusTexto: {
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    vazio: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16
    },
});