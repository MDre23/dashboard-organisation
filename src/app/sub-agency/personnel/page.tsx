// src/app/sub-agency/personnel/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SubAgencyPersonnelPage() {
  const personnel = [
    { id: 1, name: 'Jean Pierre', role: 'Responsable', status: 'Actif' },
    { id: 2, name: 'Marc Olivier', role: 'Chauffeur', status: 'Actif' },
    { id: 3, name: 'Sophie Martin', role: 'Chauffeur', status: 'En Congé' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Gestion du Personnel (Ma Sous-Agence)</h2>
        <Link href="/sub-agency/personnel/create">
          <Button>Ajouter un Chauffeur</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste du Personnel de la Sous-Agence</CardTitle>
          <CardDescription>Vue d'ensemble des chauffeurs et du responsable de cette sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {personnel.map(p => (
                  <tr key={p.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${p.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="link" className="text-blue-600 hover:text-blue-900">Voir</Button>
                      <Button variant="link" className="ml-2 text-indigo-600 hover:text-indigo-900">Modifier</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}