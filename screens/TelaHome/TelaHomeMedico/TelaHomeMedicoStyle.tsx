import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f4f8' },
    headerMedico: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        marginBottom: 10,
    },
    saudacao: { fontSize: 22, fontWeight: 'bold', color: '#0f172a' },
    subtitulo: { fontSize: 14, color: '#64748b', marginTop: 4 },
    lista: { padding: 16 },
    card: {
        backgroundColor: '#ffffff',
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
    },
    cardCancelado: { opacity: 0.6, backgroundColor: '#f1f5f9' },
    infoContainer: { flexDirection: 'row', alignItems: 'center' },
    hora: { fontSize: 16, fontWeight: 'bold', color: '#0284c7', marginRight: 16 },
    pacienteNome: { fontSize: 16, fontWeight: '600', color: '#1e293b' },
    tipoConsulta: { fontSize: 12, color: '#64748b' },
    botaoAtender: {
        backgroundColor: '#0284c7',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    textoBotaoAtender: { color: '#ffffff', fontWeight: 'bold', fontSize: 12 },
    statusTexto: { fontSize: 12, fontWeight: 'bold' },
    statusAviso: { color: '#f59e0b' }, // Amarelo para Aguardando
    statusErro: { color: '#ef4444' },  // Vermelho para Cancelado
    vazio: { textAlign: 'center', marginTop: 40, color: '#94a3b8' },
});