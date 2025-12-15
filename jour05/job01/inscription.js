// Validation asynchrone du formulaire d'inscription
document.addEventListener('DOMContentLoaded', function () {
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

    // Timers pour debounce
    const timers = {};

    // ========== Fonctions de validation asynchrones ==========

    function validateNom(nom) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

                if (!nom) {
                    resolve({ valid: false, message: 'Le nom est requis' });
                } else if (nom.length < 2) {
                    resolve({ valid: false, message: 'Le nom doit contenir au moins 2 caractères' });
                } else if (nom.length > 50) {
                    resolve({ valid: false, message: 'Le nom est trop long (max 50 caractères)' });
                } else if (!nameRegex.test(nom)) {
                    resolve({ valid: false, message: 'Le nom contient des caractères invalides' });
                } else {
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    function validatePrenom(prenom) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

                if (!prenom) {
                    resolve({ valid: false, message: 'Le prénom est requis' });
                } else if (prenom.length < 2) {
                    resolve({ valid: false, message: 'Le prénom doit contenir au moins 2 caractères' });
                } else if (prenom.length > 50) {
                    resolve({ valid: false, message: 'Le prénom est trop long (max 50 caractères)' });
                } else if (!nameRegex.test(prenom)) {
                    resolve({ valid: false, message: 'Le prénom contient des caractères invalides' });
                } else {
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    function validateEmail(email) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                if (!email) {
                    resolve({ valid: false, message: 'L\'email est requis' });
                } else if (!emailRegex.test(email)) {
                    resolve({ valid: false, message: 'Format d\'email invalide' });
                } else if (email.length > 255) {
                    resolve({ valid: false, message: 'L\'email est trop long (max 255 caractères)' });
                } else {
                    // Simulation de vérification si l'email existe déjà
                    // Dans un cas réel, cela ferait un appel au serveur
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    function validatePassword(password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const hasUpperCase = /[A-Z]/.test(password);
                const hasLowerCase = /[a-z]/.test(password);
                const hasNumber = /[0-9]/.test(password);
                const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

                if (!password) {
                    resolve({ valid: false, message: 'Le mot de passe est requis' });
                } else if (password.length < 8) {
                    resolve({ valid: false, message: 'Le mot de passe doit contenir au moins 8 caractères' });
                } else if (!hasUpperCase) {
                    resolve({ valid: false, message: 'Le mot de passe doit contenir au moins une majuscule' });
                } else if (!hasLowerCase) {
                    resolve({ valid: false, message: 'Le mot de passe doit contenir au moins une minuscule' });
                } else if (!hasNumber) {
                    resolve({ valid: false, message: 'Le mot de passe doit contenir au moins un chiffre' });
                } else if (!hasSpecialChar) {
                    resolve({ valid: false, message: 'Le mot de passe doit contenir au moins un caractère spécial' });
                } else {
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    function validateConfirmPassword(password, confirmPassword) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!confirmPassword) {
                    resolve({ valid: false, message: 'Veuillez confirmer votre mot de passe' });
                } else if (password !== confirmPassword) {
                    resolve({ valid: false, message: 'Les mots de passe ne correspondent pas' });
                } else {
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    function validateAdresse(adresse) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!adresse) {
                    resolve({ valid: false, message: 'L\'adresse est requise' });
                } else if (adresse.length < 5) {
                    resolve({ valid: false, message: 'L\'adresse doit contenir au moins 5 caractères' });
                } else if (adresse.length > 200) {
                    resolve({ valid: false, message: 'L\'adresse est trop longue (max 200 caractères)' });
                } else {
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    function validateCodePostal(codePostal) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const codePostalRegex = /^[0-9]{5}$/;

                if (!codePostal) {
                    resolve({ valid: false, message: 'Le code postal est requis' });
                } else if (!codePostalRegex.test(codePostal)) {
                    resolve({ valid: false, message: 'Le code postal doit contenir exactement 5 chiffres' });
                } else {
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    // ========== Fonction pour afficher les erreurs ==========

    function showError(inputId, message) {
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
    }

    // ========== Configuration de la validation asynchrone pour chaque champ ==========

    // Validation du nom
    inputs.nom.addEventListener('input', function () {
        clearTimeout(timers.nom);
        const nom = this.value.trim();

        showError('nom', '⏳ Validation en cours...');

        timers.nom = setTimeout(async () => {
            const result = await validateNom(nom);
            showError('nom', result.valid ? '' : result.message);
        }, 300);
    });

    inputs.nom.addEventListener('blur', async function () {
        clearTimeout(timers.nom);
        const result = await validateNom(this.value.trim());
        showError('nom', result.valid ? '' : result.message);
    });

    // Validation du prénom
    inputs.prenom.addEventListener('input', function () {
        clearTimeout(timers.prenom);
        const prenom = this.value.trim();

        showError('prenom', '⏳ Validation en cours...');

        timers.prenom = setTimeout(async () => {
            const result = await validatePrenom(prenom);
            showError('prenom', result.valid ? '' : result.message);
        }, 300);
    });

    inputs.prenom.addEventListener('blur', async function () {
        clearTimeout(timers.prenom);
        const result = await validatePrenom(this.value.trim());
        showError('prenom', result.valid ? '' : result.message);
    });

    // Validation de l'email
    inputs.email.addEventListener('input', function () {
        clearTimeout(timers.email);
        const email = this.value.trim();

        showError('email', '⏳ Validation en cours...');

        timers.email = setTimeout(async () => {
            const result = await validateEmail(email);
            showError('email', result.valid ? '' : result.message);
        }, 300);
    });

    inputs.email.addEventListener('blur', async function () {
        clearTimeout(timers.email);
        const result = await validateEmail(this.value.trim());
        showError('email', result.valid ? '' : result.message);
    });

    // Validation du mot de passe
    inputs.password.addEventListener('input', function () {
        clearTimeout(timers.password);
        const password = this.value;

        showError('password', '⏳ Validation en cours...');

        timers.password = setTimeout(async () => {
            const result = await validatePassword(password);
            showError('password', result.valid ? '' : result.message);

            // Revalider la confirmation si elle a déjà été saisie
            if (inputs.confirmPassword.value) {
                const confirmResult = await validateConfirmPassword(password, inputs.confirmPassword.value);
                showError('confirmPassword', confirmResult.valid ? '' : confirmResult.message);
            }
        }, 300);
    });

    inputs.password.addEventListener('blur', async function () {
        clearTimeout(timers.password);
        const result = await validatePassword(this.value);
        showError('password', result.valid ? '' : result.message);
    });

    // Validation de la confirmation du mot de passe
    inputs.confirmPassword.addEventListener('input', function () {
        clearTimeout(timers.confirmPassword);
        const confirmPassword = this.value;

        showError('confirmPassword', '⏳ Validation en cours...');

        timers.confirmPassword = setTimeout(async () => {
            const result = await validateConfirmPassword(inputs.password.value, confirmPassword);
            showError('confirmPassword', result.valid ? '' : result.message);
        }, 300);
    });

    inputs.confirmPassword.addEventListener('blur', async function () {
        clearTimeout(timers.confirmPassword);
        const result = await validateConfirmPassword(inputs.password.value, this.value);
        showError('confirmPassword', result.valid ? '' : result.message);
    });

    // Validation de l'adresse
    inputs.adresse.addEventListener('input', function () {
        clearTimeout(timers.adresse);
        const adresse = this.value.trim();

        showError('adresse', '⏳ Validation en cours...');

        timers.adresse = setTimeout(async () => {
            const result = await validateAdresse(adresse);
            showError('adresse', result.valid ? '' : result.message);
        }, 300);
    });

    inputs.adresse.addEventListener('blur', async function () {
        clearTimeout(timers.adresse);
        const result = await validateAdresse(this.value.trim());
        showError('adresse', result.valid ? '' : result.message);
    });

    // Validation du code postal
    inputs.codePostal.addEventListener('input', function () {
        clearTimeout(timers.codePostal);
        let codePostal = this.value.trim();

        // Filtrer pour ne garder que les chiffres
        codePostal = codePostal.replace(/[^0-9]/g, '');
        this.value = codePostal;

        showError('codePostal', '⏳ Validation en cours...');

        timers.codePostal = setTimeout(async () => {
            const result = await validateCodePostal(codePostal);
            showError('codePostal', result.valid ? '' : result.message);
        }, 300);
    });

    inputs.codePostal.addEventListener('blur', async function () {
        clearTimeout(timers.codePostal);
        const result = await validateCodePostal(this.value.trim());
        showError('codePostal', result.valid ? '' : result.message);
    });

    // ========== Validation lors de la soumission du formulaire ==========

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Validation de tous les champs
        const results = {
            nom: await validateNom(inputs.nom.value.trim()),
            prenom: await validatePrenom(inputs.prenom.value.trim()),
            email: await validateEmail(inputs.email.value.trim()),
            password: await validatePassword(inputs.password.value),
            confirmPassword: await validateConfirmPassword(inputs.password.value, inputs.confirmPassword.value),
            adresse: await validateAdresse(inputs.adresse.value.trim()),
            codePostal: await validateCodePostal(inputs.codePostal.value.trim())
        };

        // Afficher toutes les erreurs
        Object.keys(results).forEach(key => {
            showError(key, results[key].valid ? '' : results[key].message);
        });

        // Vérifier si tous les champs sont valides
        const allValid = Object.values(results).every(result => result.valid);

        if (allValid) {
            alert('Inscription réussie !');

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

            // Ici, vous pouvez envoyer les données au serveur
            // fetch('inscription.php', { method: 'POST', body: JSON.stringify(formData) })

            // Réinitialisation du formulaire
            form.reset();
            Object.values(inputs).forEach(input => {
                input.classList.remove('valid', 'invalid');
            });
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
