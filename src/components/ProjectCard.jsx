// src/components/ProjectCard.jsx
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, link, imageUrl }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={`Aperçu du projet ${title}`} className={styles.image} />
                <div className={styles.overlay}>Voir le projet</div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </a>
    );
}
export default ProjectCard;