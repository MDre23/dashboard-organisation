// src/app/dashboard/owner/layout.tsx
'use client'; // Le layout doit être un Client Component pour utiliser localStorage

import { useEffect, useState } from 'react';
import Sidebar from '@/components/navigation/Sidebar'; // Assurez-vous du chemin exact

export default function OwnerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [organizationName, setOrganizationName] = useState('Chargement...');

  useEffect(() => {
    // Récupérer le nom de l'organisation depuis localStorage
    const name = localStorage.getItem('organizationName');
    if (name) {
      setOrganizationName(name);
    } else {
      // Gérer le cas où le nom n'est pas trouvé (ex: pas connecté)
      setOrganizationName('Organisation Inconnue');
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar organizationName={organizationName} />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}