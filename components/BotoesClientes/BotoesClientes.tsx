import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { styles } from './BotoesClientesStyle'

interface BotaoNovoClienteProps {
  onPress: () => void;
  label: string;
  style?: ViewStyle; 
}

const BotaoNovoCliente: React.FC<BotaoNovoClienteProps> = ({ onPress, label, style }) => {
  return (
    <TouchableOpacity 
      style={[styles.botao, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.textoBotao}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BotaoNovoCliente;