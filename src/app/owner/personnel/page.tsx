// src/app/owner/personnel/page.tsx (exemple)
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function OwnerPersonnelPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Gestion du Personnel (Global)</h2>
        <Link href="/owner/personnel/create"> {/* Adapter le lien pour la création */}
          <Button>Ajouter du Personnel</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste de Tout le Personnel</CardTitle>
          <CardDescription>Tableau consolidé des responsables de sous-agences et chauffeurs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sous-Agence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Exemple de ligne de données */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Responsable</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sous-Agence A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Actif
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="link" className="text-blue-600 hover:text-blue-900">Voir</Button>
                    <Button variant="link" className="ml-2 text-indigo-600 hover:text-indigo-900">Modifier</Button>
                  </td>
                </tr>
                {/* Plus de lignes ici */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}