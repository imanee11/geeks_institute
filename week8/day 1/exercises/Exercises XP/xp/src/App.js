import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import './index.css';
import CharacterCounter from './components/CharacterCounter';

const ThemedContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Hello, Theme Switcher!</h1>
      <ThemeSwitcher />

      <h1>🌟 Exercise 2: Implement a Character Counter</h1>
      <CharacterCounter/>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
    
  );
};

export default App;
