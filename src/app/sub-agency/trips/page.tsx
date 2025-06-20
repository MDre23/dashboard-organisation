// src/app/sub-agency/trips/page.tsx
'use-client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SubAgencyTripsPage() {
  const trips = [
    { id: 1, origin: 'Douala', destination: 'Yaoundé', date: '10/06/2025', time: '08:00', bus: 'ABC-123', driver: 'Marc Olivier' },
    { id: 2, origin: 'Douala', destination: 'Kribi', date: '11/06/2025', time: '10:00', bus: 'GHI-789', driver: 'Jean Luc' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Planning de Voyages (Ma Sous-Agence)</h2>
        <Link href="/sub-agency/trips/create">
          <Button>Créer un Nouveau Voyage</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Voyages de la Sous-Agence</CardTitle>
          <CardDescription>Calendrier ou liste des voyages planifiés par cette sous-agence.</CardDescription>
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
            <h4 className="font-semibold mb-2">Assistant de Création de Voyage & Alertes d'Anomalie (Design Concept)</h4>
            <p>Un formulaire pas-à-pas pour faciliter la planification et des notifications pour les problèmes spécifiques à cette sous-agence.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}