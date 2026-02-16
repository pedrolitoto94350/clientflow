import Link from 'next/link'
import { ArrowRight, Users, FileText, CreditCard, BarChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ClientFlow</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Connexion
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Commencer gratuitement
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            CRM léger et facturation pour{' '}
            <span className="text-blue-600">artisans et indépendants</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Gère tes clients, crée des devis, facture en quelques clics. Simple, rapide, et 100% gratuit.
            Conçu spécialement pour les artisans qui veulent se concentrer sur leur métier.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center"
            >
              Essayer gratuitement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              En savoir plus <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tout ce dont tu as besoin, rien de plus
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Une solution complète sans la complexité des gros logiciels
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Gestion clients</h3>
              <p className="mt-2 text-gray-600">
                Centralise toutes les informations de tes clients en un seul endroit
              </p>
            </div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Devis & Factures</h3>
              <p className="mt-2 text-gray-600">
                Crée des devis professionnels et transforme-les en factures en un clic
              </p>
            </div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Paiements</h3>
              <p className="mt-2 text-gray-600">
                Accepte les paiements en ligne avec Stripe (optionnel)
              </p>
            </div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <BarChart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Statistiques</h3>
              <p className="mt-2 text-gray-600">
                Suis ton chiffre d'affaires et tes meilleurs clients
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à simplifier ta gestion ?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Rejoins les artisans qui utilisent déjà ClientFlow
            </p>
            <div className="mt-8">
              <Link
                href="/register"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50"
              >
                Créer mon compte gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              Aucune carte bancaire requise • 100% gratuit
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-lg bg-blue-600 flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">ClientFlow</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 md:mt-0">
              © {new Date().getFullYear()} ClientFlow. Conçu avec ❤️ pour les artisans.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}