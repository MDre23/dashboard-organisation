import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const subAgencies = [
  { id: 1, name: 'Sous-Agence Douala', city: 'Douala', neighborhood: 'Bonamoussadi', coordinates: '4.05N, 9.70E', status: 'Active' },
  { id: 2, name: 'Sous-Agence Yaoundé', city: 'Yaoundé', neighborhood: 'Mfandena', coordinates: '3.85N, 11.50E', status: 'Active' },
  { id: 3, name: 'Sous-Agence Bafoussam', city: 'Bafoussam', neighborhood: 'Djemoum', coordinates: '5.47N, 10.42E', status: 'Inactive' },
];

export default function SubAgenciesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Gestion des Sous-Agences</h2>
        <Link href="/owner/sub-agencies/create">
          <Button>Ajouter une Sous-Agence</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Sous-Agences</CardTitle>
          <CardDescription>Vue d'ensemble de toutes les sous-agences enregistrées.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ville</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quartier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coordonnées</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subAgencies.map((agency) => (
                  <tr key={agency.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agency.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agency.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agency.neighborhood}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agency.coordinates}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${agency.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {agency.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="link" className="text-blue-600 hover:text-blue-900">Voir</Button>
                      <Button variant="link" className="ml-2 text-indigo-600 hover:text-indigo-900">Modifier</Button>
                      <Button variant="link" className="ml-2 text-red-600 hover:text-red-900">Désactiver</Button>
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