// src/pages/ProjectsPage.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './ProjectsPage.module.css';
import { motion } from 'framer-motion';
import revelationImage from '../assets/images/revelation.png';
import feschImage from '../assets/images/fesch.png';

const projectsData = [
    {
        id: 1,
        title: "Révélation Radio",
        description: "Site vitrine pour une webradio catholique, présentation des émissions, lecteur audio intégré.",
        // Utiliser Punycode pour l'URL avec accent ou une alternative
        link: "https://xn--rvlation-bza.com",
        // ACTION REQUISE : Remplacer par le vrai chemin de ton image optimisée
        imageUrl: revelationImage
    },
    {
        id: 2,
        title: "Fesch 2025",
        description: "Site promotionnel pour le documentaire 'Fesch 2025, du non-sens au Mystère' réalisé par Samuel Dolbeau & Samuel Armnius.",
        link: "https://fesch2025.fr/",
        // ACTION REQUISE : Remplacer par le vrai chemin de ton image optimisée
        imageUrl: feschImage
    },
    // Ajouter d'autres projets ici avec leurs images
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

function ProjectsPage() {
    return (
        <>
            {/* SEO natif React 19 */}
            <title>Projets Web - Théo Lafont | Développeur Full Stack</title>
            <meta name="description" content="Découvrez les réalisations de Théo Lafont : sites web vitrines, applications React, intégrations backend. Voir les projets Révélation Radio, Fesch 2025, etc." />

            <div className={styles.projectsContainer}>
                <h2>Mes Réalisations</h2>
                <div className={styles.projectsGrid}>
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                imageUrl={project.imageUrl}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default ProjectsPage;