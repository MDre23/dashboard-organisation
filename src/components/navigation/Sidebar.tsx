// src/components/navigation/Sidebar.tsx
'use client'; // Ce composant aura besoin d'être un Client Component s'il a de l'interactivité future

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Pour surligner le lien actif

interface SidebarProps {
  organizationName: string;
  subAgencyCity?: string; // Optionnel, pour la sous-agence
}

const Sidebar: React.FC<SidebarProps> = ({ organizationName, subAgencyCity }) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/owner' }, // Sera ajusté par le layout parent
    { name: 'Sous-Agences', href: '/owner/sub-agencies' },
    { name: 'Personnel', href: '/owner/personnel' },
    { name: 'Bus', href: '/owner/buses' },
    { name: 'Clients', href: '/owner/clients' },
    { name: 'Voyages', href: '/owner/trips' },
    { name: 'Finance', href: '/owner/finance' },
    { name: 'Documents', href: '/owner/documents' },
    { name: 'Notifications', href: '/owner/notifications' },
    { name: 'Rôles', href: '/owner/roles' },
    { name: 'Audit Trail', href: '/owner/audit-trail' },
    { name: 'Tarifs', href: '/owner/tariffs' },
  ];

  // Filtrer les navItems en fonction de la présence de subAgencyCity
  const displayedNavItems = subAgencyCity
    ? [
        { name: 'Dashboard', href: '/sub-agency' },
        { name: 'Personnel', href: '/sub-agency/personnel' },
        { name: 'Bus', href: '/sub-agency/buses' },
        { name: 'Voyages', href: '/sub-agency/trips' },
        { name: 'Rapports', href: '/sub-agency/reports' },
        { name: 'Messages', href: '/sub-agency/messages' },
        { name: 'Mon Profil', href: '/sub-agency/profile' },
      ]
    : navItems;

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold">
          {organizationName}
          {subAgencyCity && <span className="block text-sm text-gray-400">({subAgencyCity})</span>}
        </h2>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {displayedNavItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <div
              className={`flex items-center p-2 rounded-md transition-colors duration-200
                ${pathname === item.href ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;