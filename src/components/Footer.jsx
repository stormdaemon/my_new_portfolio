// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                {/* ACTION REQUISE : Remplace par TES liens */}
                <a href="https://github.com/VOTRE_GITHUB" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub de Théo Lafont">
                    <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/VOTRE_LINKEDIN" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn de Théo Lafont">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:tlafont49@gmail.com" aria-label="Envoyer un email à Théo Lafont">
                    <Mail size={24} />
                </a>
            </div>
            <p className={styles.copyright}>
                © {currentYear} Théo Lafont. Tous droits réservés.
            </p>
        </footer>
    );
}

export default Footer;