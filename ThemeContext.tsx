import React, { createContext, useState, useContext } from 'react';

// Definição das cores
const lightTheme = {
    background: '#f8fafc',
    card: '#ffffff',
    text: '#1e293b',
    textSecondary: '#64748b', // Cinza médio para contraste suave no fundo claro
    primary: '#0284c7',
    border: '#e2e8f0'
};

const darkTheme = {
    background: '#0f172a',
    card: '#1e293b',
    text: '#f8fafc',
    textSecondary: '#94a3b8', // Cinza azulado claro para não "sumir" no fundo escuro
    primary: '#38bdf8',
    border: '#334155'
};

const ThemeContext = createContext({
    theme: lightTheme,
    isDark: false,
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? darkTheme : lightTheme;

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);