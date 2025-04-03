// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Importer useLocation
import { AnimatePresence, motion } from 'framer-motion'; // Importer AnimatePresence et motion
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'; // Styles globaux

// Définir l'animation de transition de page
const pageTransition = {
    initial: { opacity: 0, x: -50 }, // État initial: invisible et légèrement à gauche
    animate: { opacity: 1, x: 0 },    // État animé: visible et à la position 0
    exit: { opacity: 0, x: 50, transition: { duration: 0.2 } } // État de sortie: invisible et légèrement à droite
};

// Un composant wrapper pour appliquer l'animation à chaque page individuellement
const PageWrapper = ({ children }) => (
    <motion.div
        initial="initial"         // Applique l'état initial défini dans pageTransition
        animate="animate"         // Applique l'état animé défini dans pageTransition
        exit="exit"               // Applique l'état de sortie défini dans pageTransition
        variants={pageTransition} // Utilise les définitions de variants ci-dessus
        transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }} // Type et durée de la transition (ajustable)
        style={{ position: 'relative' }} // Peut aider à gérer le positionnement pendant les transitions
    >
        {children} {/* Affiche le contenu de la page actuelle */}
    </motion.div>
);


// Un composant qui gère les routes et leur animation
function AnimatedRoutes() {
    // useLocation hook pour obtenir l'objet location actuel
    // Indispensable pour que AnimatePresence détecte les changements d'URL
    const location = useLocation();

    return (
        // AnimatePresence détecte quand un composant enfant direct (identifié par sa clé) est ajouté ou retiré du DOM
        <AnimatePresence mode='wait'>
            {/*
             * Routes a besoin de location et d'une clé unique (pathname)
             * pour que AnimatePresence puisse comparer l'ancienne et la nouvelle route
             * et déclencher les animations d'entrée/sortie.
            */}
            <Routes location={location} key={location.pathname}>
                {/* Chaque page est enveloppée dans PageWrapper pour appliquer l'animation */}
                <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                <Route path="/a-propos" element={<PageWrapper><AboutPage /></PageWrapper>} />
                <Route path="/projets" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                {/* Ajouter une route 404 ici si nécessaire, également dans PageWrapper */}
            </Routes>
        </AnimatePresence>
    );
}


// Composant principal de l'application
function App() {
    return (
        // Le Router englobe toute l'application
        <Router>
            {/* Navbar est en dehors de AnimatedRoutes, donc elle ne s'anime pas lors des transitions de page */}
            <Navbar />
            {/* Le contenu principal où les pages animées seront rendues */}
            <main>
                {/* Utilise le composant qui gère les routes animées */}
                <AnimatedRoutes />
            </main>
            {/* Footer est aussi en dehors, il reste fixe */}
            <Footer />
        </Router>
    );
}

export default App;