// src/app/owner/trips/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function OwnerTripsPage() {
  const trips = [
    { id: 1, origin: 'Douala', destination: 'Yaoundé', date: '10/06/2025', time: '08:00', bus: 'ABC-123', driver: 'John Doe', agency: 'Sous-Agence Alpha' },
    { id: 2, origin: 'Yaoundé', destination: 'Bafoussam', date: '10/06/2025', time: '14:00', bus: 'DEF-456', driver: 'Jane Smith', agency: 'Sous-Agence Beta' },
    { id: 3, origin: 'Douala', destination: 'Kribi', date: '11/06/2025', time: '10:00', bus: 'GHI-789', driver: 'Peter Jones', agency: 'Sous-Agence Alpha' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Planning de Voyages (Global)</h2>
        <Link href="/owner/trips/create">
          <Button>Créer un Nouveau Voyage</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vue d'Ensemble des Plannings</CardTitle>
          <CardDescription>Calendrier ou liste centralisée de tous les voyages de l'organisation.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origine</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chauffeur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sous-Agence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {trips.map(trip => (
                  <tr key={trip.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trip.origin}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.destination}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.bus}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.driver}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.agency}</td>
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
            <h4 className="font-semibold mb-2">Fonctionnalités Avancées de Planning (Design Concept)</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Analyse de Rentabilité par Voyage (revenus vs coûts)</li>
              <li>Alertes d'Anomalie de Planning (chevauchements, incohérences)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}