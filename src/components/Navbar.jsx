import React, { useState, useEffect } from 'react'; // Importer useState et useEffect
import { Link, NavLink, useLocation } from 'react-router-dom'; // useLocation pour fermer le menu au changement de page
import styles from './Navbar.module.css'; // Assure-toi que l'import est correct

function Navbar() {
    // État pour savoir si le menu mobile est ouvert ou fermé
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Pour détecter les changements de page

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour fermer le menu (utile quand on clique sur un lien)
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Effet pour fermer le menu quand l'URL change
    useEffect(() => {
        closeMenu(); // Ferme le menu à chaque navigation
    }, [location]); // Se déclenche quand location change


    return (
        // On utilise `styles.navbar` venant du fichier CSS Module
        <nav className={styles.navbar}>

            {/* Le logo (lien vers l'accueil) */}
            <div className={styles.logo}>
                <Link to="/" onClick={closeMenu}> {/* Ferme aussi le menu au clic sur le logo */}
                    Théo Lafont
                </Link>
            </div>


            {/* Bouton Hamburger pour mobile */}
            {/* Applique la classe 'active' au burger si le menu est ouvert */}
            <button
                className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation" // Important pour l'accessibilité
                aria-expanded={isMenuOpen}     // Indique l'état aux lecteurs d'écran
            >
                {/* Les 3 lignes du burger */}
                <div></div>
                <div></div>
                <div></div>
            </button>

            {/* La liste des liens de navigation */}
            {/* Applique la classe 'open' à la liste si le menu est ouvert */}
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                    <NavLink
                        to="/"
                        // Applique 'styles.active' si le lien est actif (via NavLink)
                        className={({ isActive }) => (isActive ? styles.active : '')}
                        onClick={closeMenu} // Ferme le menu au clic sur un lien
                        end // Assure que '/' n'est actif que pour la page d'accueil exacte
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/a-propos"
                        className={({ isActive }) => (isActive ? styles.active : '')}
                        onClick={closeMenu}
                    >
                        À Propos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projets"
                        className={({ isActive }) => (isActive ? styles.active : '')}
                        onClick={closeMenu}
                    >
                        Projets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? styles.active : '')}
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;