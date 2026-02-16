# 🚀 ClientFlow - CRM Léger & Facturation

CRM simple et facturation pour artisans et indépendants. Développé avec Next.js 15, Supabase et Vercel.

## ✨ Fonctionnalités

- ✅ **Authentification** sécurisée avec Supabase Auth
- ✅ **Gestion clients** complète (CRUD)
- ✅ **Facturation** (devis, factures, PDF)
- ✅ **Dashboard** avec statistiques
- ✅ **Responsive design** mobile-first
- ✅ **100% gratuit** (Supabase free tier + Vercel)

## 🏗️ Architecture

- **Frontend** : Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Backend** : Supabase (PostgreSQL + Auth + Storage)
- **Hébergement** : Vercel
- **Base de données** : PostgreSQL (Supabase)

## 🚀 Déploiement rapide

### 1. Clone le projet
```bash
git clone https://github.com/pedrolitoto94350/clientflow.git
cd clientflow
```

### 2. Installe les dépendances
```bash
npm install
```

### 3. Configure les variables d'environnement
```bash
cp .env.example .env.local
```

Édite `.env.local` avec tes clés Supabase :
```env
NEXT_PUBLIC_SUPABASE_URL=https://zqzldzntiirqhczrujzt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpDYVQiLCJ0eXBlIjoiSldUIn0.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxemxken50aWlycWhjenJ1anp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MTQyNTQsImV4cCI6MjA1MjA5MDI1NH0.8WgtrqWrXyQv1v7QqY7v7W7v7W7v7W7v7W7v7W7v7W7
```

### 4. Configure la base de données Supabase

1. Va sur le [Dashboard Supabase](https://supabase.com/dashboard/project/zqzldzntiirqhczrujzt)
2. Navigue vers **SQL Editor**
3. Copie le contenu de `supabase-schema.sql`
4. Colle et exécute le SQL

### 5. Lance le projet en développement
```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

### 6. Déploie sur Vercel

```bash
# Connecte-toi à Vercel
vercel login

# Déploie
vercel --prod
```

Ou via l'interface web :
1. Va sur [Vercel](https://vercel.com)
2. Importe le repo GitHub
3. Configure les variables d'environnement
4. Déploie !

## 📁 Structure du projet

```
clientflow/
├── app/                    # Next.js App Router
│   ├── (auth)/           # Pages d'authentification
│   ├── dashboard/        # Dashboard et fonctionnalités
│   ├── api/              # API routes
│   └── auth/             # Routes d'authentification
├── components/           # Composants React réutilisables
├── lib/                  # Utilitaires et configurations
│   └── supabase/        # Client Supabase
├── public/               # Assets statiques
└── scripts/              # Scripts utilitaires
```

## 🔧 Configuration Supabase

### Tables créées :

1. **profiles** - Informations utilisateur
2. **clients** - Gestion des clients
3. **invoices** - Factures et devis
4. **invoice_items** - Lignes de facture

### Sécurité :
- Row Level Security (RLS) activée
- Chaque utilisateur ne voit que ses propres données
- Politiques de sécurité par défaut

## 🎨 Design System

- **Couleurs principales** : Bleu (#2563eb) pour l'action, gris pour le texte
- **Typography** : System fonts (Inter)
- **Espacement** : Tailwind spacing scale
- **Composants** : Design system cohérent

## 📱 Pages

- `/` - Landing page
- `/login` - Connexion
- `/register` - Inscription
- `/dashboard` - Tableau de bord
- `/dashboard/clients` - Gestion clients
- `/dashboard/invoices` - Facturation
- `/dashboard/settings` - Paramètres

## 🔒 Sécurité

- Authentification via Supabase Auth
- Sessions sécurisées
- HTTPS obligatoire
- Protection CSRF
- Validation des données côté serveur

## 🚀 Roadmap

### Phase 1 (Maintenant)
- [x] Authentification
- [x] Dashboard de base
- [x] Gestion clients (CRUD)
- [x] Facturation basique

### Phase 2 (Prochainement)
- [ ] Génération PDF des factures
- [ ] Intégration Stripe
- [ ] Rappels automatiques
- [ ] Statistiques avancées

### Phase 3 (Futur)
- [ ] Application mobile
- [ ] API publique
- [ ] Intégrations tierces
- [ ] Mode hors ligne

## 🤝 Contribution

1. Fork le projet
2. Crée une branche (`git checkout -b feature/amazing-feature`)
3. Commit tes changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvre une Pull Request

## 📄 Licence

MIT - Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [Next.js](https://nextjs.org) - Framework React
- [Supabase](https://supabase.com) - Backend open source
- [Vercel](https://vercel.com) - Hébergement
- [Tailwind CSS](https://tailwindcss.com) - CSS framework

---

**Développé avec ❤️ pour les artisans et indépendants** | **ClientFlow v0.1.0**