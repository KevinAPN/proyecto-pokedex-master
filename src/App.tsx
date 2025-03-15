import React from "react";
import { PokemonProvider } from "./context/PokemonContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./assets/router/routes";
import Footer from "./components/Footer";
import "./App.css";

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`app-container ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
      <PokemonProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </PokemonProvider>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
