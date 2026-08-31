# ⏰ O'Clock - Application de Gestion du Temps

Application web moderne de gestion du temps avec 4 modules complets : horloge, chronomètre, minuteur et système d'alarmes.

## 🎨 Aperçu

Interface élégante avec un thème néon subtil (cyan et orange) sur fond sombre dégradé. Design responsive et épuré pour une expérience utilisateur optimale.

## ✨ Fonctionnalités

### 🕐 Horloge
- Affichage de l'heure en temps réel
- Format HH:MM:SS
- Mise à jour automatique chaque seconde

### ⏱️ Chronomètre
- Démarrage/Pause/Réinitialisation
- Enregistrement des tours intermédiaires
- Bouton avec changement de couleur dynamique :
  - **Cyan** : État arrêté
  - **Orange** : État en marche
- Tableau des tours avec numérotation

### ⏲️ Minuteur
- Compte à rebours configurable
- Boutons de contrôle : Démarrer, Stop, Reset
- Ajustement rapide avec boutons ▲▼ (+/- 1 minute)
- Alert automatique à la fin du décompte

### 🔔 Réveil/Alarmes
- Ajout d'alarmes avec nom personnalisé
- Configuration de l'heure (format HH:MM)
- Affichage du temps restant ("Dans Xh Ymin")
- Gestion des alarmes pour le jour suivant
- Suppression individuelle par alarme
- Vérification automatique toutes les secondes
- Alert quand l'alarme sonne

## 🗂️ Structure du Projet

```
oclock/
│
├── index.html              # Page horloge
├── chronometre.html        # Page chronomètre
├── minuteur.html           # Page minuteur
├── reveil.html             # Page alarmes
│
└── assets/
    ├── css/
    │   └── style.css       # Styles centralisés
    │
    └── js/
        ├── horloge.js      # Logique horloge
        ├── chronometre.js  # Logique chronomètre
        ├── minuteur.js     # Logique minuteur
        └── reveil.js       # Logique alarmes
```

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles personnalisés avec effets néon
- **JavaScript Vanilla** : Logique sans frameworks
- **Bootstrap 5.3.8** : Layout responsive et composants
- **Google Fonts (Inter)** : Typographie moderne

## 🎨 Thème & Design

- **Couleurs principales** :
  - Néon cyan : `#00d4ff`
  - Néon orange : `#ff8800`
  - Fond dégradé : `#0a0a0f` → `#1a1a2e` → `#0f0f1e`
- **Effets** : 
  - Box shadows avec glow néon
  - Transitions fluides
  - Hover effects
- **Responsive** : Compatible mobile, tablette et desktop

## 🚀 Installation & Utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Serveur local (XAMPP, WAMP, Laragon, etc.) ou simplement ouvrir les fichiers HTML

### Lancement
1. Cloner ou télécharger le projet
2. Ouvrir `index.html` dans un navigateur
3. Naviguer entre les pages via le menu

### Utilisation
- **Horloge** : Affichage automatique de l'heure
- **Chronomètre** : Cliquer sur "Démarrer" puis "Tour" pour enregistrer un temps
- **Minuteur** : Utiliser ▲▼ pour ajuster, puis "Démarrer"
- **Alarmes** : Entrer un nom et une heure, cliquer "Ajouter une alarme"

## 📋 Fonctionnalités JavaScript

### Horloge (`horloge.js`)
```javascript
// Mise à jour toutes les secondes
setInterval(updateTime, 1000);
```

### Chronomètre (`chronometre.js`)
- `toggleChrono()` : Gestion marche/pause avec changement de classe CSS
- `enregistrerTour()` : Ajout des tours dans le tableau
- `resetChrono()` : Réinitialisation complète

### Minuteur (`minuteur.js`)
- `demarrerMinuteur()` : Lance le compte à rebours
- `afficherTemps()` : Format MM:SS
- Boutons +/- 60 secondes

### Réveil (`reveil.js`)
- `verifierAlarmes()` : Vérification continue
- `mettreAJourStatuts()` : Calcul du temps restant
- `supprimerReveil()` : Suppression individuelle

## 🎯 Bonnes Pratiques Implémentées

✅ Séparation HTML/CSS/JS  
✅ Code commenté et organisé  
✅ Nommage cohérent des variables  
✅ Responsive design  
✅ Gestion des erreurs  
✅ Interface utilisateur intuitive  

## 📱 Compatibilité

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔮 Améliorations Possibles

- [ ] Sauvegarde des alarmes avec localStorage
- [ ] Sons personnalisés pour alarmes/minuteur
- [ ] Notifications navigateur (API Notification)
- [ ] Thèmes multiples (clair/sombre)
- [ ] Format 12h/24h configurable
- [ ] Exportation des temps du chronomètre

## 👨‍💻 Auteur

Projet créé dans le cadre de la formation développement web - RunTrack3 Jour 12

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

Les bibliothèques tierces utilisées (Bootstrap, Google Fonts) ont leurs propres licences. Voir [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md).

---

**Développé avec ❤️ et beaucoup de ☕**
