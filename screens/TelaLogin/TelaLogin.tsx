import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { styles } from './TelaLoginStyle';

interface Props {
  onLogin: (usuario: string, senha: string, perfil: 'secretaria' | 'medico' | 'admin') => boolean;
}

const CREDENCIAIS = {
  admin: { usuario: 'admin', senha: 'admin123', perfil: 'admin' as const },
  medico: { usuario: 'medico', senha: 'medico123', perfil: 'medico' as const },
  secretaria: { usuario: 'secretaria', senha: 'sec123', perfil: 'secretaria' as const },
};

export default function TelaLogin({ onLogin }: Props) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState<'secretaria' | 'medico' | 'admin'>(
    'secretaria'
  );

  const handleLogin = () => {
    if (usuario.trim() === '' || senha.trim() === '') {
      Alert.alert(
        'Erro',
        'Por favor, preencha todos os campos.'
      );
      return;
    }

    let credencialValida = false;
    let perfilValido: 'secretaria' | 'medico' | 'admin' | null = null;

    if (usuario === CREDENCIAIS.admin.usuario && senha === CREDENCIAIS.admin.senha) {
      credencialValida = true;
      perfilValido = CREDENCIAIS.admin.perfil;
    } else if (usuario === CREDENCIAIS.medico.usuario && senha === CREDENCIAIS.medico.senha) {
      credencialValida = true;
      perfilValido = CREDENCIAIS.medico.perfil;
    } else if (usuario === CREDENCIAIS.secretaria.usuario && senha === CREDENCIAIS.secretaria.senha) {
      credencialValida = true;
      perfilValido = CREDENCIAIS.secretaria.perfil;
    }

    if (credencialValida && perfilValido) {
      if (perfilValido !== perfil) {
        Alert.alert(
          'Erro',
          `Este usuário não tem permissão de ${perfil === 'admin' ? 'Administrador' : perfil === 'medico' ? 'Médico' : 'Secretária'}. 
          
Credenciais corretas:
- Admin: admin / admin123
- Médico: medico / medico123
- Secretária: secretaria / sec123`
        );
        return;
      }
      
      onLogin(usuario, senha, perfil);
    } else {
      Alert.alert(
        'Erro',
        'Usuário ou senha inválidos!\n\nCredenciais disponíveis:\n👑 Admin: admin / admin123\n👨‍⚕️ Médico: medico / medico123\n📋 Secretária: secretaria / sec123'
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.clinicName}>
          CLÍNICA MARIA AUXILIADORA
        </Text>

        <Text style={styles.logo}>
          SISTEMA CLÍNICO
        </Text>

        <Text style={styles.subtitle}>
          Bem-vindo ao Atendimento
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Usuário
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Senha
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Perfil de Acesso
          </Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={perfil}
              onValueChange={(itemValue) =>
                setPerfil(itemValue)
              }
              style={styles.picker}
            >
              <Picker.Item
                label="Administrador"
                value="admin"
              />
              <Picker.Item
                label="Médico"
                value="medico"
              />
              <Picker.Item
                label="Secretária"
                value="secretaria"
              />
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            ENTRAR
          </Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Credenciais para teste:</Text>
          <Text style={styles.infoText}>👑 Admin: admin / admin123</Text>
          <Text style={styles.infoText}>👨‍⚕️ Médico: medico / medico123</Text>
          <Text style={styles.infoText}>📋 Secretária: secretaria / sec123</Text>
        </View>
      </View>
    </View>
  );
}