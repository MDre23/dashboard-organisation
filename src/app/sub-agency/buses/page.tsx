// src/app/sub-agency/buses/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SubAgencyBusesPage() {
  const buses = [
    { id: 1, registration: 'ABC-123', capacity: 45, status: 'Opérationnel' },
    { id: 2, registration: 'XYZ-789', capacity: 30, status: 'En Maintenance' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Gestion des Bus (Ma Sous-Agence)</h2>
        <Link href="/sub-agency/buses/create">
          <Button>Ajouter un Bus</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Bus de la Sous-Agence</CardTitle>
          <CardDescription>Vue d'ensemble des bus rattachés à cette sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Immatriculation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacité</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {buses.map(bus => (
                  <tr key={bus.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bus.registration}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.capacity} places</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bus.status === 'Opérationnel' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {bus.status}
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
          <div className="p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800 border border-yellow-200">
            <h4 className="font-semibold mb-2">Rappels de Maintenance (Design Concept)</h4>
            <p>Alertes spécifiques pour les entretiens à venir des bus de cette sous-agence.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}