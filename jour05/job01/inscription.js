// Validation asynchrone du formulaire d'inscription - Version moderne avec async/await
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inscriptionForm');
    const inputs = {
        nom: document.getElementById('nom'),
        prenom: document.getElementById('prenom'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        confirmPassword: document.getElementById('confirmPassword'),
        adresse: document.getElementById('adresse'),
        codePostal: document.getElementById('codePostal')
    };

    // Délai pour la validation asynchrone
    const VALIDATION_DELAY = 500;
    const DEBOUNCE_DELAY = 300;

    // Timers pour debounce
    const timers = {};

    // ========== Fonctions de validation asynchrones ==========

    const validateNom = async (nom) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

                    if (!nom) {
                        throw new Error('Le nom est requis');
                    }
                    if (nom.length < 2) {
                        throw new Error('Le nom doit contenir au moins 2 caractères');
                    }
                    if (nom.length > 50) {
                        throw new Error('Le nom est trop long (max 50 caractères)');
                    }
                    if (!nameRegex.test(nom)) {
                        throw new Error('Le nom contient des caractères invalides');
                    }

                    resolve({ valid: true, message: '' });
                } catch (error) {
                    resolve({ valid: false, message: error.message });
                }
            }, VALIDATION_DELAY);
        });
    };

    const validatePrenom = async (prenom) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

                    if (!prenom) {
                        throw new Error('Le prénom est requis');
                    }
                    if (prenom.length < 2) {
                        throw new Error('Le prénom doit contenir au moins 2 caractères');
                    }
                    if (prenom.length > 50) {
                        throw new Error('Le prénom est trop long (max 50 caractères)');
                    }
                    if (!nameRegex.test(prenom)) {
                        throw new Error('Le prénom contient des caractères invalides');
                    }

                    resolve({ valid: true, message: '' });
                } catch (error) {
                    resolve({ valid: false, message: error.message });
                }
            }, VALIDATION_DELAY);
        });
    };

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

                    // Simulation de vérification si l'email existe déjà
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
                    const hasUpperCase = /[A-Z]/.test(password);
                    const hasLowerCase = /[a-z]/.test(password);
                    const hasNumber = /[0-9]/.test(password);
                    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

                    if (!password) {
                        throw new Error('Le mot de passe est requis');
                    }
                    if (password.length < 8) {
                        throw new Error('Le mot de passe doit contenir au moins 8 caractères');
                    }
                    if (!hasUpperCase) {
                        throw new Error('Le mot de passe doit contenir au moins une majuscule');
                    }
                    if (!hasLowerCase) {
                        throw new Error('Le mot de passe doit contenir au moins une minuscule');
                    }
                    if (!hasNumber) {
                        throw new Error('Le mot de passe doit contenir au moins un chiffre');
                    }
                    if (!hasSpecialChar) {
                        throw new Error('Le mot de passe doit contenir au moins un caractère spécial');
                    }

                    resolve({ valid: true, message: '' });
                } catch (error) {
                    resolve({ valid: false, message: error.message });
                }
            }, VALIDATION_DELAY);
        });
    };

    const validateConfirmPassword = async (password, confirmPassword) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    if (!confirmPassword) {
                        throw new Error('Veuillez confirmer votre mot de passe');
                    }
                    if (password !== confirmPassword) {
                        throw new Error('Les mots de passe ne correspondent pas');
                    }

                    resolve({ valid: true, message: '' });
                } catch (error) {
                    resolve({ valid: false, message: error.message });
                }
            }, VALIDATION_DELAY);
        });
    };

    const validateAdresse = async (adresse) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    if (!adresse) {
                        throw new Error('L\'adresse est requise');
                    }
                    if (adresse.length < 5) {
                        throw new Error('L\'adresse doit contenir au moins 5 caractères');
                    }
                    if (adresse.length > 200) {
                        throw new Error('L\'adresse est trop longue (max 200 caractères)');
                    }

                    resolve({ valid: true, message: '' });
                } catch (error) {
                    resolve({ valid: false, message: error.message });
                }
            }, VALIDATION_DELAY);
        });
    };

    const validateCodePostal = async (codePostal) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    const codePostalRegex = /^[0-9]{5}$/;

                    if (!codePostal) {
                        throw new Error('Le code postal est requis');
                    }
                    if (!codePostalRegex.test(codePostal)) {
                        throw new Error('Le code postal doit contenir exactement 5 chiffres');
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

    // ========== Configuration de la validation asynchrone pour chaque champ ==========

    // Fonction générique pour gérer les événements input avec debounce
    const setupInputValidation = (input, validator, inputId) => {
        input.addEventListener('input', function () {
            clearTimeout(timers[inputId]);
            const value = this.value.trim();

            timers[inputId] = setTimeout(async () => {
                await handleValidation(validator, inputId, value);
            }, DEBOUNCE_DELAY);
        });

        input.addEventListener('blur', async function () {
            clearTimeout(timers[inputId]);
            await handleValidation(validator, inputId, this.value.trim());
        });
    };

    // Configuration des validations
    setupInputValidation(inputs.nom, validateNom, 'nom');
    setupInputValidation(inputs.prenom, validatePrenom, 'prenom');
    setupInputValidation(inputs.email, validateEmail, 'email');
    setupInputValidation(inputs.adresse, validateAdresse, 'adresse');

    // Validation du mot de passe avec revalidation de la confirmation
    inputs.password.addEventListener('input', function () {
        clearTimeout(timers.password);
        const password = this.value;

        timers.password = setTimeout(async () => {
            try {
                await handleValidation(validatePassword, 'password', password);

                // Revalider la confirmation si elle a déjà été saisie
                if (inputs.confirmPassword.value) {
                    await handleValidation(
                        (val) => validateConfirmPassword(password, val),
                        'confirmPassword',
                        inputs.confirmPassword.value
                    );
                }
            } catch (error) {
                console.error('Erreur validation password:', error);
            }
        }, DEBOUNCE_DELAY);
    });

    inputs.password.addEventListener('blur', async function () {
        clearTimeout(timers.password);
        await handleValidation(validatePassword, 'password', this.value);
    });

    // Validation de la confirmation du mot de passe
    inputs.confirmPassword.addEventListener('input', function () {
        clearTimeout(timers.confirmPassword);
        const confirmPassword = this.value;

        timers.confirmPassword = setTimeout(async () => {
            await handleValidation(
                (val) => validateConfirmPassword(inputs.password.value, val),
                'confirmPassword',
                confirmPassword
            );
        }, DEBOUNCE_DELAY);
    });

    inputs.confirmPassword.addEventListener('blur', async function () {
        clearTimeout(timers.confirmPassword);
        await handleValidation(
            (val) => validateConfirmPassword(inputs.password.value, val),
            'confirmPassword',
            this.value
        );
    });

    // Validation du code postal avec filtrage des caractères
    inputs.codePostal.addEventListener('input', function () {
        clearTimeout(timers.codePostal);
        let codePostal = this.value.trim();

        // Filtrer pour ne garder que les chiffres
        codePostal = codePostal.replace(/[^0-9]/g, '');
        this.value = codePostal;

        timers.codePostal = setTimeout(async () => {
            await handleValidation(validateCodePostal, 'codePostal', codePostal);
        }, DEBOUNCE_DELAY);
    });

    inputs.codePostal.addEventListener('blur', async function () {
        clearTimeout(timers.codePostal);
        await handleValidation(validateCodePostal, 'codePostal', this.value.trim());
    });

    // ========== Validation lors de la soumission du formulaire ==========

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            // Validation de tous les champs en parallèle avec Promise.all
            const validations = await Promise.all([
                validateNom(inputs.nom.value.trim()),
                validatePrenom(inputs.prenom.value.trim()),
                validateEmail(inputs.email.value.trim()),
                validatePassword(inputs.password.value),
                validateConfirmPassword(inputs.password.value, inputs.confirmPassword.value),
                validateAdresse(inputs.adresse.value.trim()),
                validateCodePostal(inputs.codePostal.value.trim())
            ]);

            const results = {
                nom: validations[0],
                prenom: validations[1],
                email: validations[2],
                password: validations[3],
                confirmPassword: validations[4],
                adresse: validations[5],
                codePostal: validations[6]
            };

            // Afficher toutes les erreurs
            Object.keys(results).forEach(key => {
                showError(key, results[key].valid ? '' : results[key].message);
            });

            // Vérifier si tous les champs sont valides
            const allValid = Object.values(results).every(result => result.valid);

            if (allValid) {
                // Récupération des données du formulaire
                const formData = {
                    nom: inputs.nom.value.trim(),
                    prenom: inputs.prenom.value.trim(),
                    email: inputs.email.value.trim(),
                    password: inputs.password.value,
                    adresse: inputs.adresse.value.trim(),
                    codePostal: inputs.codePostal.value.trim()
                };

                console.log('Données d\'inscription:', formData);

                try {
                    // Simulation d'envoi au serveur
                    // const response = await fetch('inscription.php', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify(formData)
                    // });
                    //
                    // if (!response.ok) {
                    //     throw new Error('Erreur lors de l\'inscription');
                    // }
                    //
                    // const data = await response.json();
                    // console.log('Réponse serveur:', data);

                    alert('Inscription réussie !');

                    // Réinitialisation du formulaire
                    form.reset();
                    Object.values(inputs).forEach(input => {
                        input.classList.remove('valid', 'invalid');
                    });
                } catch (error) {
                    console.error('Erreur lors de l\'envoi:', error);
                    alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
                }
            }
        } catch (error) {
            console.error('Erreur lors de la validation du formulaire:', error);
            alert('Une erreur est survenue lors de la validation. Veuillez réessayer.');
        }
    });

    // Protection contre les injections XSS et nettoyage des données
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', function () {
            // Empêcher les balises HTML dans les champs texte
            if (this.type === 'text' || this.type === 'email') {
                this.value = this.value.replace(/<|>/g, '');
            }
        });
    });
});
