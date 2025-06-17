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
    { name: 'Dashboard', href: '/dashboard/owner' }, // Sera ajusté par le layout parent
    { name: 'Sous-Agences', href: '/dashboard/owner/sub-agencies' },
    { name: 'Personnel', href: '/dashboard/owner/personnel' },
    { name: 'Bus', href: '/dashboard/owner/buses' },
    { name: 'Clients', href: '/dashboard/owner/clients' },
    { name: 'Voyages', href: '/dashboard/owner/trips' },
    { name: 'Finance', href: '/dashboard/owner/finance' },
    { name: 'Documents', href: '/dashboard/owner/documents' },
    { name: 'Notifications', href: '/dashboard/owner/notifications' },
    { name: 'Rôles', href: '/dashboard/owner/roles' },
    { name: 'Audit Trail', href: '/dashboard/owner/audit-trail' },
    { name: 'Tarifs', href: '/dashboard/owner/tariffs' },
  ];

  // Filtrer les navItems en fonction de la présence de subAgencyCity
  const displayedNavItems = subAgencyCity
    ? [
        { name: 'Dashboard', href: '/dashboard/sub-agency' },
        { name: 'Personnel', href: '/dashboard/sub-agency/personnel' },
        { name: 'Bus', href: '/dashboard/sub-agency/buses' },
        { name: 'Voyages', href: '/dashboard/sub-agency/trips' },
        { name: 'Rapports', href: '/dashboard/sub-agency/reports' },
        { name: 'Messages', href: '/dashboard/sub-agency/messages' },
        { name: 'Mon Profil', href: '/dashboard/sub-agency/profile' },
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