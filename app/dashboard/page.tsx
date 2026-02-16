import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Users, FileText, CreditCard, TrendingUp, Plus, Calendar } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = createClient()
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  // Get stats (mock for now - will be real data later)
  const stats = {
    totalClients: 0,
    totalInvoices: 0,
    totalRevenue: 0,
    pendingInvoices: 0,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ClientFlow</span>
              </div>
              <nav className="ml-10 flex space-x-4">
                <Link href="/dashboard" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">
                  Tableau de bord
                </Link>
                <Link href="/dashboard/clients" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Clients
                </Link>
                <Link href="/dashboard/invoices" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Factures
                </Link>
                <Link href="/dashboard/settings" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Paramètres
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-700">
                Bonjour, <span className="font-semibold">{profile?.full_name || 'Utilisateur'}</span>
              </div>
              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Déconnexion
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Bienvenue sur ClientFlow, {profile?.full_name?.split(' ')[0] || 'Utilisateur'} 👋
          </h1>
          <p className="mt-2 text-gray-600">
            Gère tes clients et factures en toute simplicité
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Clients</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalClients}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/dashboard/clients/new"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Ajouter un client
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Factures</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalInvoices}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/dashboard/invoices/new"
                className="inline-flex items-center text-sm text-green-600 hover:text-green-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Créer une facture
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Chiffre d'affaires</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.totalRevenue.toLocaleString('fr-FR')} €
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Total encaissé
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">En attente</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingInvoices}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Factures non payées
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/dashboard/clients/new"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Ajouter un client</p>
                    <p className="text-sm text-gray-600">Nouveau client</p>
                  </div>
                </Link>
                <Link
                  href="/dashboard/invoices/new"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Créer une facture</p>
                    <p className="text-sm text-gray-600">Nouvelle facture</p>
                  </div>
                </Link>
                <Link
                  href="/dashboard/invoices"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Voir les factures</p>
                    <p className="text-sm text-gray-600">Toutes les factures</p>
                  </div>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <Calendar className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Paramètres</p>
                    <p className="text-sm text-gray-600">Configurer ton compte</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Prochaines étapes</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 mt-0.5">
                    <span className="text-xs font-medium text-blue-600">1</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Ajoute ton premier client</p>
                    <p className="text-sm text-gray-600">Commence par créer ton profil client</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mt-0.5">
                    <span className="text-xs font-medium text-green-600">2</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Crée ta première facture</p>
                    <p className="text-sm text-gray-600">Génère une facture pour un client</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 mt-0.5">
                    <span className="text-xs font-medium text-purple-600">3</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Configure les paiements</p>
                    <p className="text-sm text-gray-600">Optionnel : ajoute Stripe</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/dashboard/clients/new"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 text-center block"
                >
                  Commencer maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Activité récente</h2>
            <Link href="/dashboard/activity" className="text-sm text-blue-600 hover:text-blue-700">
              Voir tout
            </Link>
          </div>
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <Calendar className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-sm font-medium text-gray-900">Aucune activité récente</h3>
            <p className="mt-2 text-sm text-gray-500">
              Commence par ajouter ton premier client ou créer une facture
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}