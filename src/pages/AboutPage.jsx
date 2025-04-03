// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';
import { motion } from 'framer-motion';
// Pas d'import Helmet nécessaire

const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP', 'React', 'Vite', 'Express.js',
    'MongoDB', 'MySQL', 'PostgreSQL', 'Ruby', 'Ruby on Rails', 'Laravel',
    'Node.js', 'npm', 'yarn', 'Python', 'Debian (Linux)'
];

// Variants pour les animations au scroll
const sectionVariants = {
    hidden: { opacity: 0, x: -50 }, // Arrive de la gauche
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};
const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

function AboutPage() {
    return (
        <>
            {/* SEO natif React 19 */}
            <title>À Propos - Théo Lafont | Développeur Full Stack</title>
            <meta name="description" content="Découvrez Théo Lafont, développeur full stack de 24 ans passionné par React, Node.js, PHP et l'écosystème web. Compétences techniques et parcours." />

            <div className={styles.aboutContainer}>
                <motion.section
                    className={styles.aboutIntro}
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2>À Propos de Moi</h2>
                    <p>
                        Je m'appelle Théo Lafont, j'ai 24 ans et je suis un développeur Full Stack
                        passionné par la construction d'applications web de A à Z. J'aime
                        autant concevoir des interfaces utilisateur interactives et modernes avec React
                        que développer des API REST robustes et des bases de données efficaces.
                    </p>
                    <p>
                        Curieux et autodidacte, je suis toujours à la recherche de nouvelles
                        technologies et de meilleures pratiques pour améliorer mes compétences
                        et livrer des produits de qualité.
                    </p>
                </motion.section>

                <motion.section
                    className={styles.skills}
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3>Mes Compétences Techniques</h3>
                    <motion.div
                        className={styles.skillCloud}
                        variants={skillsContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className={styles.skillTag}
                                variants={skillTagVariants}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.section>

                <motion.section
                    className={styles.timeline}
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3>Parcours</h3>
                    {/* TODO: Remplacer ce paragraphe par de vrais éléments de timeline */}
                    <p>Détails sur les études, formations et expériences professionnelles à ajouter ici pour construire une timeline visuelle.</p>
                </motion.section>
            </div>
        </>
    );
}
export default AboutPage;