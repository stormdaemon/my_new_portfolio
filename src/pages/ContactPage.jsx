// src/pages/ContactPage.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactPage.module.css';
import { Mail, Phone, Send, CheckCircle, AlertTriangle } from 'lucide-react'; // AlertTriangle pour erreur générique si besoin
// Pas d'import Helmet nécessaire

// --- Composant Formulaire ---
function ContactForm() {
    // ACTION REQUISE : Remplacé "VOTRE_ID_FORMSPREE" par votre identifiant Formspree
    const [state, handleSubmit] = useForm("mqapybbd"); // <--- MODIFICATION ICI

    // Affichage en cas de succès
    if (state.succeeded) {
        return (
            <div className={styles.successMessage}>
                <CheckCircle size={48} color="var(--primary-color)" />
                <h3>Message envoyé avec succès !</h3>
                <p>Merci pour votre message. Je reviendrai vers vous dès que possible.</p>
            </div>
        );
    }

    // Affichage en cas d'erreur générale (autre que validation de champ)
    // On vérifie si state.errors existe, n'a pas d'erreur de champ spécifique (pour ne pas doubler),
    // et a des erreurs générales de formulaire.
    if (state.errors && !state.errors.fieldErrors && state.errors.formErrors?.length > 0) {
        return (
            <div className={styles.errorMessageGeneral}>
                <AlertTriangle size={32} color="#ff7f50"/> {/* Couleur Corail pour l'alerte */}
                <h3>Erreur lors de l'envoi</h3>
                <p>Une erreur est survenue ({state.errors.formErrors[0].message || 'Veuillez réessayer'}). Vous pouvez aussi me contacter par email ou téléphone.</p>
                {/* Affiche le message d'erreur de Formspree si disponible */}
            </div>
        )
    }

    // Affichage du formulaire
    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3>Laissez-moi un message :</h3>
            <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input id="name" type="text" name="name" required disabled={state.submitting} />
                {/* Affiche les erreurs spécifiques au champ 'name' */}
                <ValidationError prefix="Nom" field="name" errors={state.errors} className={styles.errorMessage} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required disabled={state.submitting} />
                {/* Affiche les erreurs spécifiques au champ 'email' */}
                <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.errorMessage} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required disabled={state.submitting}></textarea>
                {/* Affiche les erreurs spécifiques au champ 'message' */}
                <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.errorMessage} />
            </div>
            {/* Affiche les erreurs générales ici aussi, au cas où elles ne sont pas liées à un champ mais empêchent l'envoi */}
            {state.errors && state.errors.formErrors?.length > 0 && state.errors.fieldErrors &&
                <div className={styles.errorMessage}>
                    {state.errors.formErrors.map(error => <p key={error.code}>{error.message}</p>)}
                </div>
            }
            <button type="submit" className={styles.submitButton} disabled={state.submitting}>
                {state.submitting ? 'Envoi en cours...' : <>Envoyer <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></>}
            </button>
        </form>
    );
}

// --- Composant Page Contact ---
function ContactPage() {
    return (
        <>
            {/* SEO natif React 19 */}
            <title>Contact - Théo Lafont | Développeur Full Stack</title>
            <meta name="description" content="Contactez Théo Lafont, développeur web full stack. Disponible pour discuter de vos projets via email (tlafont49@gmail.com), téléphone (07 68 51 95 68) ou formulaire." />

            <div className={styles.contactContainer}>
                <h2>Contactez-moi</h2>
                <p className={styles.intro}>
                    Intéressé par mon profil ? Besoin d'un développeur pour votre projet ?
                    N'hésitez pas à utiliser les méthodes ci-dessous ou le formulaire.
                </p>

                <div className={styles.contactMethods}>
                    <div className={styles.method}>
                        <Mail size={20} className={styles.icon} />
                        <a href="mailto:tlafont49@gmail.com">tlafont49@gmail.com</a>
                    </div>
                    <div className={styles.method}>
                        <Phone size={20} className={styles.icon} />
                        <a href="tel:0768519568">07 68 51 95 68</a>
                    </div>
                </div>

                {/* Affichage du formulaire */}
                <ContactForm />

            </div>
        </>
    );
}
export default ContactPage;