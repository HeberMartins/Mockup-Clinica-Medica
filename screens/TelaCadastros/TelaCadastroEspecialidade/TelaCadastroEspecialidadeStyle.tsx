import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor dinâmico no componente
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        // backgroundColor e borderBottomColor dinâmicos
    },
    botaoVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoVoltar: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 4,
        // color dinâmico
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        // color dinâmico
    },
    content: {
        padding: 16,
        paddingBottom: 40,
    },
    cardForm: {
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 24,
        // backgroundColor e borderColor dinâmicos
    },
    label: {
        fontSize: 12,
        fontWeight: '800',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        // color dinâmico
    },
    input: {
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        fontSize: 15,
        // backgroundColor, color e borderColor dinâmicos
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    botaoSalvar: {
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 2,
        // backgroundColor dinâmico
    },
    textoBotaoSalvar: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        textTransform: 'uppercase',
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        paddingLeft: 4,
        // color dinâmico
    },
    itemLista: {
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderLeftWidth: 5,
        borderLeftColor: '#7c3aed',
        borderWidth: 1,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        // backgroundColor e borderColor dinâmicos
    },
    nomeItem: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
        // color dinâmico
    },
    descItem: {
        fontSize: 13,
        lineHeight: 18,
        // color dinâmico
    },
    /* NOVO ESTILO PARA O BOTÃO EXCLUIR */
    botaoExcluir: {
        padding: 8,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});