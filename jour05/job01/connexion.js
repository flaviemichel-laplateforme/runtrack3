// Validation asynchrone du formulaire de connexion
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('connexionForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Délai pour la validation asynchrone (simule un appel API)
    const VALIDATION_DELAY = 500;

    // Timers pour debounce
    let emailTimer;
    let passwordTimer;

    // Fonction de validation de l'email
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
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    // Fonction de validation du mot de passe
    function validatePassword(password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!password) {
                    resolve({ valid: false, message: 'Le mot de passe est requis' });
                } else if (password.length < 8) {
                    resolve({ valid: false, message: 'Le mot de passe doit contenir au moins 8 caractères' });
                } else {
                    resolve({ valid: true, message: '' });
                }
            }, VALIDATION_DELAY);
        });
    }

    // Fonction pour afficher les erreurs
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

    // Validation asynchrone de l'email avec debounce
    emailInput.addEventListener('input', function () {
        clearTimeout(emailTimer);
        const email = this.value.trim();

        // Afficher un indicateur de chargement
        showError('email', '⏳ Validation en cours...');

        emailTimer = setTimeout(async () => {
            const result = await validateEmail(email);
            showError('email', result.valid ? '' : result.message);
        }, 300);
    });

    // Validation asynchrone du mot de passe avec debounce
    passwordInput.addEventListener('input', function () {
        clearTimeout(passwordTimer);
        const password = this.value;

        // Afficher un indicateur de chargement
        showError('password', '⏳ Validation en cours...');

        passwordTimer = setTimeout(async () => {
            const result = await validatePassword(password);
            showError('password', result.valid ? '' : result.message);
        }, 300);
    });

    // Validation au blur (perte de focus)
    emailInput.addEventListener('blur', async function () {
        clearTimeout(emailTimer);
        const result = await validateEmail(this.value.trim());
        showError('email', result.valid ? '' : result.message);
    });

    passwordInput.addEventListener('blur', async function () {
        clearTimeout(passwordTimer);
        const result = await validatePassword(this.value);
        showError('password', result.valid ? '' : result.message);
    });

    // Validation lors de la soumission du formulaire
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Validation de tous les champs
        const emailResult = await validateEmail(emailInput.value.trim());
        const passwordResult = await validatePassword(passwordInput.value);

        showError('email', emailResult.valid ? '' : emailResult.message);
        showError('password', passwordResult.valid ? '' : passwordResult.message);

        // Si tous les champs sont valides
        if (emailResult.valid && passwordResult.valid) {
            alert('Connexion réussie !');

            // Récupération des données du formulaire
            const formData = {
                email: emailInput.value.trim(),
                password: passwordInput.value
            };

            console.log('Données de connexion:', formData);

            // Ici, vous pouvez envoyer les données au serveur
            // fetch('connexion.php', { method: 'POST', body: JSON.stringify(formData) })

            // Réinitialisation du formulaire
            form.reset();
            emailInput.classList.remove('valid');
            passwordInput.classList.remove('valid');
        }
    });

    // Protection contre le copier-coller dans le champ mot de passe (optionnel)
    passwordInput.addEventListener('paste', function (e) {
        // Vous pouvez choisir d'empêcher le copier-coller pour plus de sécurité
        // e.preventDefault();
        // showError('password', 'Le copier-coller n\'est pas autorisé pour le mot de passe');
    });
});
