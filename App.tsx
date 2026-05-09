import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext'; // Importe o contexto
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
import TelaCadastro from './screens/TelaCadastros/TelaCadastroCliente/TelaCadastroCliente';
import TelaCadastroEspecialidade from './screens/TelaCadastros/TelaCadastroEspecialidade/TelaCadastroEspecialidade';
import TelaCadastroUsuario from './screens/TelaCadastros/TelaCadastroUsuario/TelaCadastroUsuario';

interface Usuario {
  usuario: string;
  perfil: 'secretaria' | 'medico' | 'admin';
}

// Criamos um componente interno para usar o hook useTheme
function MainApp() {
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);
  const [telaAtiva, setTelaAtiva] = useState<string>('home');
  const [listaPacientes, setListaPacientes] = useState<any[]>([]);

  const { theme, toggleTheme, isDark } = useTheme();

  const navigation = {
    navigate: (screen: string) => setTelaAtiva(screen),
    goBack: () => setTelaAtiva('home'),
    replace: (screen: string) => setTelaAtiva(screen),
    toggleTheme: toggleTheme, // Permite trocar o tema de qualquer tela
    isDark: isDark
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

  // --- FLUXO MÉDICO ---
  if (usuarioLogado.perfil === 'medico') {
    switch (telaAtiva) {
      case 'realizacao': return <TelaRealizacaoConsulta onVoltar={() => setTelaAtiva('home')} />;
      case 'listaDia':
        return (
            <TelaListarConsultasDia
                onVoltar={() => setTelaAtiva('home')}
                onSelecionarConsulta={() => setTelaAtiva('realizacao')}
                perfilUsuario={usuarioLogado.perfil}
            />
        );
      default:
        return (
            <HomeMedico
                navigation={navigation}
                nomeMedico={usuarioLogado.usuario}
                onIniciarConsulta={() => setTelaAtiva('realizacao')}
            />
        );
    }
  }

  // --- FLUXO ADMINISTRADOR ---
  if (usuarioLogado.perfil === 'admin') {
    switch (telaAtiva) {
      case 'agenda': return <TelaMarcacaoConsulta onVoltar={navigation.goBack} />;
      case 'listaPacientes': return <TelaClientes clientes={listaPacientes} onNovoCliente={() => setTelaAtiva('cadastro')} onVoltar={navigation.goBack} />;
      case 'cadastroEspec': return <TelaCadastroEspecialidade onVoltar={navigation.goBack} />;
      case 'gestaoUsuarios': return <TelaCadastroUsuario onVoltar={navigation.goBack} />;
      default: return <AdmHome navigation={navigation} />;
    }
  }

  return null;
}

// O App exporta o Provider envolvendo o MainApp
export default function App() {
  return (
      <ThemeProvider>
        <MainApp />
      </ThemeProvider>
  );
}