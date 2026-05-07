import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
 TouchableOpacity,
  Text,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import TelaLogin from './screens/TelaLogin/TelaLogin';

import TelaClientes from './screens/TelaClientes/TelaClientes';
import TelaCadastro from './screens/TelaCadastroCliente/TelaCadastroCliente';

import TelaMarcacaoConsulta from './screens/TelaConsultas/TelaMarcacaoConsulta/TelaMarcacaoConsulta';

import TelaConfirmacaoConsulta from './screens/TelaConsultas/TelaConfirmacaoConsulta/TelaConfirmacaoConsulta';

import TelaRealizacaoConsulta from './screens/TelaConsultas/TelaRealizacaoConsulta/TelaRealizacaoConsulta';

import TelaEncerramentoConsulta from './screens/TelaConsultas/TelaEncerramentoConsulta/TelaEncerramentoConsulta';

import TelaCancelamentoConsulta from './screens/TelaConsultas/TelaCancelamentoConsulta/TelaCancelamentoConsulta';

import TelaListarConsultasDia from './screens/TelaConsultas/TelaListarConsultasDia/TelaListarConsultasDia';

import { Cliente } from './components/ListaClientes/ListaClientes';

type TelaAtual =
  | 'lista'
  | 'cadastro'
  | 'marcacao'
  | 'confirmacao'
  | 'realizacao'
  | 'encerramento'
  | 'cancelamento'
  | 'listarConsultasDia';

type Perfil =
  | 'secretaria'
  | 'medico'
  | 'admin';

// Dados de login simulados
const USUARIOS = {
  admin: { usuario: 'admin', senha: 'admin123', perfil: 'admin' as Perfil },
  medico: { usuario: 'medico', senha: 'medico123', perfil: 'medico' as Perfil },
  secretaria: { usuario: 'secretaria', senha: 'sec123', perfil: 'secretaria' as Perfil },
};

export default function App() {
  const [logado, setLogado] = useState(false);

  const [perfil, setPerfil] =
    useState<Perfil>('secretaria');

  const [telaAtual, setTelaAtual] =
    useState<TelaAtual>('lista');

  const [mostrarConsulta, setMostrarConsulta] =
    useState(false);

  const [pacienteSelecionado, setPacienteSelecionado] =
    useState('');

  const [clientes, setClientes] = useState<Cliente[]>([
    {
      identificador: 1,
      nome: 'Harrier Du Bois',
      dtNascimento: '01/01/1930',
      email: 'tequila.sunset@rcm.com',
      telefone: '(41) 91951-0041',
      logradouro: 'Whirling-in-Rags',
      numero: 41,
      complemento: 'Quarto 3',
      bairro: 'Martinaise',
      cidade: 'Revachol',
      estado: 'JM',
    },
    {
      identificador: 2,
      nome: 'Kim Kitsuragi',
      dtNascimento: '02/02/1932',
      email: 'kim.kitsuragi@rcm.com',
      telefone: '(57) 98888-0057',
      logradouro: '57th Precinct',
      numero: 57,
      complemento: 'Motor Carriage',
      bairro: 'Jamrock',
      cidade: 'Revachol',
      estado: 'JM',
    },
  ]);

  const handleLogin = (
    usuario: string,
    senha: string,
    perfilSelecionado?: Perfil
  ) => {
    // Verifica se o usuário existe no sistema
    let userPerfil: Perfil | null = null;
    
    if (usuario === USUARIOS.admin.usuario && senha === USUARIOS.admin.senha) {
      userPerfil = USUARIOS.admin.perfil;
    } else if (usuario === USUARIOS.medico.usuario && senha === USUARIOS.medico.senha) {
      userPerfil = USUARIOS.medico.perfil;
    } else if (usuario === USUARIOS.secretaria.usuario && senha === USUARIOS.secretaria.senha) {
      userPerfil = USUARIOS.secretaria.perfil;
    }
    
    if (userPerfil) {
      setPerfil(userPerfil);
      setLogado(true);
      return true;
    }
    
    return false;
  };

  const abrirCadastro = () =>
    setTelaAtual('cadastro');

  const voltarParaLista = () =>
    setTelaAtual('lista');

  const lidarComSalvarCliente = (
    novoCliente: Cliente
  ) => {
    setClientes((clientesAtuais) => [
      ...clientesAtuais,
      novoCliente,
    ]);
  };

  const selecionarConsulta = (
    paciente: string
  ) => {
    setPacienteSelecionado(paciente);
    setMostrarConsulta(true);
  };

  // LOGIN
  if (!logado) {
    return (
      <TelaLogin 
        onLogin={handleLogin}
        nomeClinica="Clínica Maria Auxiliadora"
      />
    );
  }

  // MÉDICO - Apenas Realização de Consulta e Listar Consultas do Dia
  if (perfil === 'medico') {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        {/* Header com nome da clínica */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Clínica Maria Auxiliadora</Text>
          <Text style={styles.headerSubtitle}>Painel do Médico</Text>
        </View>

        <View style={styles.menuContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
              styles.menuScroll
            }
          >
            <TouchableOpacity
              style={[
                styles.menuButton,
                !mostrarConsulta && styles.menuButtonActive,
              ]}
              onPress={() => setMostrarConsulta(false)}
            >
              <Text
                style={[
                  styles.menuButtonText,
                  !mostrarConsulta && styles.menuButtonTextActive,
                ]}
              >
                Consultas do Dia
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.menuButton,
                mostrarConsulta && styles.menuButtonActive,
              ]}
              onPress={() => setMostrarConsulta(true)}
            >
              <Text
                style={[
                  styles.menuButtonText,
                  mostrarConsulta && styles.menuButtonTextActive,
                ]}
              >
                Realizar Consulta
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Botão de logout */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => setLogado(false)}
        >
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          {!mostrarConsulta ? (
            <TelaListarConsultasDia
              onSelecionarConsulta={
                selecionarConsulta
              }
            />
          ) : (
            <TelaRealizacaoConsulta
              onVoltar={() =>
                setMostrarConsulta(false)
              }
            />
          )}
        </View>
      </View>
    );
  }

  // SECRETÁRIA - Todos EXCETO Realização e Listar Consultas do Dia
  // ADMIN - Acesso TOTAL
  const isAdmin = perfil === 'admin';
  const isSecretaria = perfil === 'secretaria';

  // Definir quais telas cada perfil pode ver
  const podeVerListaClientes = true; // Todos podem ver
  const podeVerCadastro = true; // Todos podem ver
  const podeVerMarcacao = true; // Todos podem ver
  const podeVerConfirmacao = true; // Todos podem ver
  const podeVerRealizacao = isAdmin; // Apenas admin
  const podeVerEncerramento = true; // Todos podem ver
  const podeVerCancelamento = true; // Todos podem ver
  const podeVerListarConsultasDia = isAdmin; // Apenas admin

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header com nome da clínica e perfil */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Clínica Maria Auxiliadora</Text>
        <Text style={styles.headerSubtitle}>
          Painel do {isAdmin ? 'Administrador' : 'Secretária(o)'}
        </Text>
      </View>

      <View style={styles.menuContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            styles.menuScroll
          }
        >
          {podeVerListaClientes && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'lista' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('lista')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'lista' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Clientes
              </Text>
            </TouchableOpacity>
          )}

          {podeVerCadastro && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'cadastro' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('cadastro')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'cadastro' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Cadastro
              </Text>
            </TouchableOpacity>
          )}

          {podeVerMarcacao && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'marcacao' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('marcacao')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'marcacao' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Marcação
              </Text>
            </TouchableOpacity>
          )}

          {podeVerConfirmacao && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'confirmacao' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('confirmacao')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'confirmacao' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Confirmação
              </Text>
            </TouchableOpacity>
          )}

          {podeVerRealizacao && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'realizacao' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('realizacao')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'realizacao' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Realização
              </Text>
            </TouchableOpacity>
          )}

          {podeVerEncerramento && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'encerramento' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('encerramento')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'encerramento' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Encerramento
              </Text>
            </TouchableOpacity>
          )}

          {podeVerCancelamento && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'cancelamento' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('cancelamento')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'cancelamento' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Cancelamento
              </Text>
            </TouchableOpacity>
          )}

          {podeVerListarConsultasDia && (
            <TouchableOpacity
              style={[
                styles.menuButton,
                telaAtual === 'listarConsultasDia' &&
                  styles.menuButtonActive,
              ]}
              onPress={() =>
                setTelaAtual('listarConsultasDia')
              }
            >
              <Text
                style={[
                  styles.menuButtonText,
                  telaAtual === 'listarConsultasDia' &&
                    styles.menuButtonTextActive,
                ]}
              >
                Listar Consultas Dia
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>

      {/* Botão de logout */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => setLogado(false)}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        {telaAtual === 'lista' && (
          <TelaClientes
            clientes={clientes}
            onNovoCliente={abrirCadastro}
          />
        )}

        {telaAtual === 'cadastro' && (
          <TelaCadastro
            onVoltar={voltarParaLista}
            onSalvarCliente={
              lidarComSalvarCliente
            }
          />
        )}

        {telaAtual === 'marcacao' && (
          <TelaMarcacaoConsulta
            onVoltar={voltarParaLista}
          />
        )}

        {telaAtual === 'confirmacao' && (
          <TelaConfirmacaoConsulta
            onVoltar={voltarParaLista}
          />
        )}

        {telaAtual === 'realizacao' && (
          <TelaRealizacaoConsulta
            onVoltar={voltarParaLista}
          />
        )}

        {telaAtual === 'encerramento' && (
          <TelaEncerramentoConsulta
            onVoltar={voltarParaLista}
          />
        )}

        {telaAtual === 'cancelamento' && (
          <TelaCancelamentoConsulta
            onVoltar={voltarParaLista}
          />
        )}

        {telaAtual === 'listarConsultasDia' && (
          <TelaListarConsultasDia
            onSelecionarConsulta={selecionarConsulta}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  header: {
    backgroundColor: '#0284c7',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#e0f2fe',
    textAlign: 'center',
    marginTop: 4,
  },

  menuContainer: {
    height: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    justifyContent: 'center',
    marginTop: 8,
  },

  menuScroll: {
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },

  menuButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },

  menuButtonActive: {
    backgroundColor: '#0284c7',
    borderColor: '#0284c7',
  },

  menuButtonText: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '600',
  },

  menuButtonTextActive: {
    color: '#ffffff',
  },

  content: {
    flex: 1,
  },

  logoutButton: {
    position: 'absolute',
    top: 60,
    right: 16,
    backgroundColor: '#ef4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 999,
  },

  logoutText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});