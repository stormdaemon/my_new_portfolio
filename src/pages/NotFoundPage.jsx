// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import { AlertTriangle } from 'lucide-react';
// Pas d'import Helmet nécessaire

function NotFoundPage() {
    return (
        <>
            {/* SEO natif React 19 */}
            <title>404 Page Non Trouvée - Théo Lafont</title>
            <meta name="robots" content="noindex" /> {/* Indique aux robots de ne pas indexer cette page */}
            <meta name="description" content="Oops! La page que vous cherchez n'existe pas sur le portfolio de Théo Lafont." />


            <div className={styles.notFoundContainer}>
                <AlertTriangle size={80} className={styles.icon} />
                <h1 className={styles.title}>404</h1>
                <p className={styles.message}>Oops! Page non trouvée.</p>
                <p className={styles.suggestion}>
                    La page que vous recherchez a peut-être été déplacée ou n'existe plus.
                </p>
                <Link to="/" className={styles.homeButton}>
                    Retourner à l'accueil
                </Link>
            </div>
        </>
    );
}

export default NotFoundPage;