# 🐛 Guide de débogage - Calendrier

## Problème : Les demandes n'apparaissent pas dans le calendrier

### ✅ Étapes de vérification

#### 1. Ouvrir la console du navigateur
- Appuyez sur **F12** dans Chrome/Edge
- Allez dans l'onglet **Console**

#### 2. Vérifier les données dans localStorage

Tapez dans la console :

```javascript
// Voir les demandes en attente
console.log("Demandes en attente:", JSON.parse(localStorage.getItem("pendingRequests")));

// Voir les demandes approuvées
console.log("Demandes approuvées:", JSON.parse(localStorage.getItem("approvedRequests")));

// Voir l'utilisateur connecté
console.log("Utilisateur:", JSON.parse(sessionStorage.getItem("currentUser")));
```

#### 3. Vérifier le chargement des événements

Après avoir créé une demande, vous devriez voir dans la console :
```
✅ Nouvelle demande créée: {id: 1736276400000, people: "John Doe", ...}
📋 Total demandes en attente: 1
📅 Événements chargés: [{...}, {...}]
📊 Nombre total d'événements: 6
```

#### 4. Si les événements ne s'affichent toujours pas

##### A. Vérifier que le calendrier est bien initialisé
```javascript
// Dans la console
console.log(window.calendarInstance);
// Doit afficher un objet, pas undefined
```

##### B. Vérifier le format des événements
```javascript
// Dans la console, après connexion
async function testEvents() {
    const events = await getAllEvents();
    console.log("Format des événements:", events);
    
    // Chaque événement doit avoir :
    // - id (nombre)
    // - start (format: "2026-01-15 09:00")
    // - end (format: "2026-01-15 17:00")
    // - title (texte)
    // - people (tableau de noms)
}
testEvents();
```

#### 5. Tester la création manuelle d'une demande

Dans la console :
```javascript
// Créer une demande de test
const testRequest = {
    id: Date.now(),
    people: "Test User",
    start: "2026-01-15 10:00",
    end: "2026-01-15 16:00",
    title: "Test demande",
    description: "Test",
    location: "Salle test",
    status: "pending"
};

// Sauvegarder
const pending = JSON.parse(localStorage.getItem("pendingRequests")) || [];
pending.push(testRequest);
localStorage.setItem("pendingRequests", JSON.stringify(pending));

// Recharger la page
location.reload();
```

#### 6. Nettoyer les données de test

Si vous avez trop de données de test :
```javascript
// ATTENTION : Cela supprime TOUTES les demandes
localStorage.removeItem("pendingRequests");
localStorage.removeItem("approvedRequests");
location.reload();
```

---

## 🔍 Problèmes courants

### Problème 1 : "getAllEvents is not defined"
**Cause :** Le fichier `calendrier.js` n'est pas chargé
**Solution :** Vérifier que le script est bien importé dans le HTML

### Problème 2 : Les événements sont undefined
**Cause :** Le format de date est incorrect
**Solution :** Vérifier que les dates sont au format "YYYY-MM-DD HH:MM"

### Problème 3 : Le calendrier est vide
**Cause :** L'initialisation asynchrone ne s'est pas terminée
**Solution :** Attendre 2 secondes et rafraîchir (F5)

### Problème 4 : Erreur "Cannot read property 'set' of undefined"
**Cause :** window.calendarInstance n'existe pas
**Solution :** Recharger la page complètement (Ctrl + Shift + R)

---

## 📋 Checklist de débogage

- [ ] Utilisateur connecté (vérifier sessionStorage)
- [ ] Demande créée (vérifier localStorage["pendingRequests"])
- [ ] Console sans erreur (F12 → Console)
- [ ] calendarInstance existe (console.log(window.calendarInstance))
- [ ] getAllEvents() retourne des données
- [ ] Format des événements correct (id, start, end, title)
- [ ] Page rechargée après création de demande

---

## 🚀 Solution rapide

Si rien ne fonctionne :

1. **Vider le cache :**
   - Chrome : Ctrl + Shift + Delete → Tout effacer
   - Ou en navigation privée (Ctrl + Shift + N)

2. **Recharger complètement :**
   - Ctrl + Shift + R (hard reload)

3. **Vérifier les fichiers :**
   - `calendrier.js` est bien chargé
   - `getAllEvents()` existe
   - Pas d'erreur JavaScript dans la console

4. **Tester avec des données fixes :**
   - Créer un événement directement dans `request.json`
   - Vérifier qu'il s'affiche

---

## 📞 Si le problème persiste

Envoyer dans la console :
```javascript
// Rapport de débogage complet
console.log("=== RAPPORT DE DÉBOGAGE ===");
console.log("Utilisateur:", sessionStorage.getItem("currentUser"));
console.log("Demandes en attente:", localStorage.getItem("pendingRequests"));
console.log("Demandes approuvées:", localStorage.getItem("approvedRequests"));
console.log("Calendrier:", window.calendarInstance);
console.log("getAllEvents existe:", typeof getAllEvents);
```

Copier le résultat et analyser les valeurs.
