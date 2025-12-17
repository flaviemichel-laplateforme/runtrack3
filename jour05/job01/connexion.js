// Validation asynchrone du formulaire de connexion - Version moderne avec async/await
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('connexionForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Délai pour la validation asynchrone (simule un appel API)
    const VALIDATION_DELAY = 500;
    const DEBOUNCE_DELAY = 300;

    // Timers pour debounce
    const timers = {
        email: null,
        password: null
    };

    // ========== Fonctions de validation asynchrones ==========

    const validateEmail = async (email) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                    if (!email) {
                        throw new Error('L\'email est requis');
                    }
                    if (!emailRegex.test(email)) {
                        throw new Error('Format d\'email invalide');
                    }
                    if (email.length > 255) {
                        throw new Error('L\'email est trop long (max 255 caractères)');
                    }

                    resolve({ valid: true, message: '' });
                } catch (error) {
                    resolve({ valid: false, message: error.message });
                }
            }, VALIDATION_DELAY);
        });
    };

    const validatePassword = async (password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    if (!password) {
                        throw new Error('Le mot de passe est requis');
                    }
                    if (password.length < 8) {
                        throw new Error('Le mot de passe doit contenir au moins 8 caractères');
                    }

                    resolve({ valid: true, message: '' });
                } catch (error) {
                    resolve({ valid: false, message: error.message });
                }
            }, VALIDATION_DELAY);
        });
    };

    // ========== Fonction pour afficher les erreurs ==========

    const showError = (inputId, message) => {
        const errorElement = document.getElementById(`${inputId}-error`);
        const inputElement = document.getElementById(inputId);

        if (message) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            inputElement.classList.add('invalid');
            inputElement.classList.remove('valid');
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            inputElement.classList.remove('invalid');
            inputElement.classList.add('valid');
        }
    };

    // ========== Fonction de validation avec gestion d'erreurs ==========

    const handleValidation = async (validator, inputId, value) => {
        try {
            showError(inputId, '⏳ Validation en cours...');
            const result = await validator(value);
            showError(inputId, result.valid ? '' : result.message);
            return result;
        } catch (error) {
            console.error(`Erreur lors de la validation de ${inputId}:`, error);
            showError(inputId, 'Une erreur est survenue lors de la validation');
            return { valid: false, message: error.message };
        }
    };

    // ========== Fonction générique pour gérer les événements input ==========

    const setupInputValidation = (input, validator, inputId) => {
        input.addEventListener('input', function () {
            clearTimeout(timers[inputId]);
            const value = inputId === 'email' ? this.value.trim() : this.value;

            timers[inputId] = setTimeout(async () => {
                await handleValidation(validator, inputId, value);
            }, DEBOUNCE_DELAY);
        });

        input.addEventListener('blur', async function () {
            clearTimeout(timers[inputId]);
            const value = inputId === 'email' ? this.value.trim() : this.value;
            await handleValidation(validator, inputId, value);
        });
    };

    // ========== Configuration des validations ==========

    setupInputValidation(emailInput, validateEmail, 'email');
    setupInputValidation(passwordInput, validatePassword, 'password');

    // ========== Validation lors de la soumission du formulaire ==========

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            // Validation de tous les champs en parallèle avec Promise.all
            const [emailResult, passwordResult] = await Promise.all([
                validateEmail(emailInput.value.trim()),
                validatePassword(passwordInput.value)
            ]);

            // Afficher les erreurs
            showError('email', emailResult.valid ? '' : emailResult.message);
            showError('password', passwordResult.valid ? '' : passwordResult.message);

            // Si tous les champs sont valides
            if (emailResult.valid && passwordResult.valid) {
                // Récupération des données du formulaire
                const formData = {
                    email: emailInput.value.trim(),
                    password: passwordInput.value
                };

                console.log('Données de connexion:', formData);

                try {
                    // Simulation d'appel API pour la connexion
                    // const response = await fetch('connexion.php', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify(formData)
                    // });
                    //
                    // if (!response.ok) {
                    //     throw new Error('Erreur lors de la connexion');
                    // }
                    //
                    // const data = await response.json();
                    // console.log('Réponse serveur:', data);
                    //
                    // if (data.success) {
                    //     window.location.href = 'dashboard.php';
                    // } else {
                    //     throw new Error(data.message || 'Identifiants invalides');
                    // }

                    alert('Connexion réussie !');

                    // Réinitialisation du formulaire
                    form.reset();
                    emailInput.classList.remove('valid', 'invalid');
                    passwordInput.classList.remove('valid', 'invalid');
                } catch (error) {
                    console.error('Erreur lors de l\'envoi:', error);
                    alert('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
                }
            }
        } catch (error) {
            console.error('Erreur lors de la validation du formulaire:', error);
            alert('Une erreur est survenue lors de la validation. Veuillez réessayer.');
        }
    });

    // Protection contre le copier-coller dans le champ mot de passe (optionnel)
    passwordInput.addEventListener('paste', (e) => {
        // Vous pouvez choisir d'empêcher le copier-coller pour plus de sécurité
        // e.preventDefault();
        // showError('password', 'Le copier-coller n\'est pas autorisé pour le mot de passe');
    });

    // Protection contre les injections XSS
    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', function () {
            if (this.type === 'email' || this.type === 'text') {
                this.value = this.value.replace(/<|>/g, '');
            }
        });
    });
});
