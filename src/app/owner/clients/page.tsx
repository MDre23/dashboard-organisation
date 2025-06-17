// src/app/owner/clients/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button'; // Pas de bouton "Ajouter" pour les clients ici, mais utile pour d'autres actions.
import Link from 'next/link';

export default function OwnerClientsPage() {
  const clients = [
    { id: 1, name: 'Client A', email: 'client.a@mail.com', lastBooking: '15/05/2025', agency: 'Sous-Agence Alpha' },
    { id: 2, name: 'Client B', email: 'client.b@mail.com', lastBooking: '01/06/2025', agency: 'Sous-Agence Beta' },
    { id: 3, name: 'Client C', email: 'client.c@mail.com', lastBooking: '20/04/2025', agency: 'Sous-Agence Alpha' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Gestion des Clients (Global)</h2>
        {/* <Link href="/owner/clients/create">
          <Button>Ajouter un Client</Button>
        </Link> */}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste de Tous les Clients</CardTitle>
          <CardDescription>Tableau complet des clients de l'organisation.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière Réservation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sous-Agence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map(client => (
                  <tr key={client.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.lastBooking}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.agency}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="link" className="text-blue-600 hover:text-blue-900">Voir Détails</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-800 border border-blue-200">
            <h4 className="font-semibold mb-2">Rapports Détaillés sur les Clients (Design Concept)</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Analyse des origines des clients (par sous-agence, par canal de réservation)</li>
              <li>Destinations les plus populaires</li>
              <li>Fréquence des réservations</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}