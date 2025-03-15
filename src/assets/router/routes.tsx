import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import PokedexPage from '../../pages/Pokedex'; // Página con la lista de Pokémon
import PokemonDetails from '../../pages/PokemonDetails';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
