// src/pages/HomePage.jsx
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Pas d'import Helmet nécessaire

// Variants pour les animations (objets de configuration)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // Délai entre l'animation de chaque enfant
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Départ: 20px plus bas et invisible
    visible: {
        y: 0, // Arrivée: position initiale
        opacity: 1, // Arrivée: visible
        transition: { type: 'spring', stiffness: 100 } // Animation de type ressort
    }
};

function HomePage() {
    return (
        <>
            {/* SEO géré nativement par React 19 */}
            <title>Théo Lafont - Développeur Full Stack Créatif | Portfolio</title>
            <meta name="description" content="Bienvenue sur le portfolio de Théo Lafont, développeur full stack React, Node.js, PHP. Découvrez mes réalisations web et compétences." />

            <motion.div
                className={styles.hero}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants} className={styles.title}>
                    Théo Lafont
                    <motion.span variants={itemVariants} className={styles.subtitle}>
                        Développeur Full Stack Créatif
                    </motion.span>
                </motion.h1>
                <motion.p variants={itemVariants} className={styles.description}>
                    Passionné par la création d'expériences web intuitives et performantes,
                    du backend solide au frontend interactif.
                </motion.p>
                <motion.div variants={itemVariants} className={styles.ctaButtons}>
                    <Link to="/projets" className={styles.ctaPrimary}>Voir mes projets</Link>
                    <Link to="/contact" className={styles.ctaSecondary}>Me contacter</Link>
                </motion.div>
            </motion.div>
        </>
    );
}
export default HomePage;