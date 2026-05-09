import React, { useState } from 'react';
import TelaLogin from './screens/TelaLogin/TelaLogin';
import SecretariaHome from './screens/TelaHome/TelaHomeSecretaria/TelaHomeSecretaria';
import AdmHome from './screens/TelaHome/TelaHomeAdministrador/TelaHomeAdm';
import HomeMedico from './screens/TelaHome/TelaHomeMedico/TelaHomeMedico';

// Imports das sub-telas
import TelaMarcacaoConsulta from './screens/TelaConsultas/TelaMarcacaoConsulta/TelaMarcacaoConsulta';
import TelaConfirmacaoConsulta from './screens/TelaConsultas/TelaConfirmacaoConsulta/TelaConfirmacaoConsulta';
import TelaCancelamentoConsulta from './screens/TelaConsultas/TelaCancelamentoConsulta/TelaCancelamentoConsulta';
import TelaEncerramentoConsulta from './screens/TelaConsultas/TelaEncerramentoConsulta/TelaEncerramentoConsulta';
import TelaListarConsultasDia from './screens/TelaConsultas/TelaListarConsultasDia/TelaListarConsultasDia';
import TelaRealizacaoConsulta from './screens/TelaConsultas/TelaRealizacaoConsulta/TelaRealizacaoConsulta';
import TelaClientes from './screens/TelaClientes/TelaClientes';
import TelaCadastro from './screens/TelaCadastroCliente/TelaCadastroCliente';

interface Usuario {
  usuario: string;
  perfil: 'secretaria' | 'medico' | 'admin';
}

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);
  const [telaAtiva, setTelaAtiva] = useState<string>('home');
  const [listaPacientes, setListaPacientes] = useState<any[]>([]);

  // Sistema de navegação manual consistente
  const navigation = {
    navigate: (screen: string) => setTelaAtiva(screen),
    goBack: () => setTelaAtiva('home'),
    replace: (screen: string) => setTelaAtiva(screen),
  };

  if (!usuarioLogado) {
    return (
        <TelaLogin
            onLogin={(u, s, p) => {
              setUsuarioLogado({ usuario: u, perfil: p });
              setTelaAtiva('home');
              return true;
            }}
        />
    );
  }

  // --- FLUXO SECRETÁRIA ---
  if (usuarioLogado.perfil === 'secretaria') {
    switch (telaAtiva) {
      case 'lista': return <TelaClientes clientes={listaPacientes} onNovoCliente={() => setTelaAtiva('cadastro')} onVoltar={navigation.goBack} />;
      case 'cadastro': return <TelaCadastro onSalvarCliente={(n) => { setListaPacientes([...listaPacientes, n]); setTelaAtiva('lista'); }} onVoltar={() => setTelaAtiva('lista')} />;
      case 'marcacao': return <TelaMarcacaoConsulta onVoltar={navigation.goBack} />;
      case 'confirmacao': return <TelaConfirmacaoConsulta onVoltar={navigation.goBack} />;
      case 'cancelamento': return <TelaCancelamentoConsulta onVoltar={navigation.goBack} />;
      case 'encerramento': return <TelaEncerramentoConsulta onVoltar={navigation.goBack} />;
      case 'listaDia': return <TelaListarConsultasDia onVoltar={navigation.goBack} onSelecionarConsulta={() => {}} perfilUsuario={usuarioLogado.perfil} />;
      default: return <SecretariaHome navigation={navigation} />;
    }
  }

  // --- FLUXO MÉDICO (Ajustado para evitar duplicação) ---
  if (usuarioLogado.perfil === 'medico') {
    switch (telaAtiva) {
      case 'realizacao':
        // Médico volta para a Home após atender ou clicar em voltar
        return <TelaRealizacaoConsulta onVoltar={() => setTelaAtiva('home')} />;

      case 'listaDia':
        // Caso a secretária ou médico queiram apenas ver a lista
        return (
            <TelaListarConsultasDia
                onVoltar={() => setTelaAtiva('home')}
                onSelecionarConsulta={() => setTelaAtiva('realizacao')}
                perfilUsuario={usuarioLogado.perfil}
            />
        );

      case 'home':
      default:
        return (
            <HomeMedico
                navigation={navigation}
                nomeMedico={usuarioLogado.usuario}
                onIniciarConsulta={() => setTelaAtiva('realizacao')} // LEVA DIRETO PARA O ATENDIMENTO
            />
        );
    }
  }

  return <AdmHome navigation={navigation} />;
}