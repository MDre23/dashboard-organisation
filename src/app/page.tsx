// src/app/page.tsx

import LoginForm from '@/components/forms/LoginForm'; // Assurez-vous que le chemin est correct

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-50"> {/* Ajout d'un fond léger */}
      <div className="w-full max-w-md mx-auto p-6 md:p-8 lg:p-10 bg-white rounded-lg shadow-xl border border-gray-200"> {/* Conteneur pour le formulaire */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-900">
          Connectez-vous
        </h1>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-gray-600">
          Pas encore de compte ? <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">Créer un compte</a>
        </p>
      </div>
    </main>
  );
}