# VENDOZA — Version 1.0

## Contenu
- `index.html` : application web responsive, en français.
- `manifest.webmanifest` : paramètres d'installation PWA.
- `sw.js` : cache hors-ligne de base.

## Mise en ligne sur GitHub Pages
1. Décompressez l'archive.
2. Dans le dépôt GitHub VENDOZA, choisissez **Add file > Upload files**.
3. Téléversez les trois fichiers à la racine du dépôt (pas dans un sous-dossier).
4. Validez avec **Commit changes**.
5. Dans **Settings > Pages**, sélectionnez **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
6. Attendez la publication et ouvrez l'adresse GitHub Pages.

## Limites importantes de cette V1
Cette version est une base fonctionnelle locale : les données sont conservées dans le navigateur de l'appareil. Elle ne possède pas encore de comptes sécurisés, de synchronisation entre appareils ni de paiement Mobile Money réel.
Pour en faire un SaaS commercial multi-commerces, il faudra connecter Supabase (authentification, base de données et règles d'accès) puis intégrer les API officielles des opérateurs de paiement. Ne publiez jamais une clé secrète Supabase dans le code du navigateur.
