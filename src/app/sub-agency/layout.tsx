// src/app/dashboard/sub-agency/layout.tsx
'use client'; // Le layout doit être un Client Component pour utiliser localStorage

import { useEffect, useState } from 'react';
import Sidebar from '@/components/navigation/Sidebar'; // Assurez-vous du chemin exact

export default function SubAgencyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [organizationName, setOrganizationName] = useState('Chargement...');
  const [subAgencyCity, setSubAgencyCity] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Récupérer les informations depuis localStorage
    const orgName = localStorage.getItem('organizationName');
    const isSubAgency = localStorage.getItem('isSubAgency');
    const city = localStorage.getItem('subAgencyCity');

    if (orgName) {
      setOrganizationName(orgName);
    } else {
      setOrganizationName('Organisation Inconnue');
    }

    if (isSubAgency === 'true' && city) {
      setSubAgencyCity(city);
    } else {
      setSubAgencyCity(undefined); // S'assurer que la ville est vide si pas une sous-agence
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar organizationName={organizationName} subAgencyCity={subAgencyCity} />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}