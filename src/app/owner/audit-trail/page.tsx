// src/app/owner/audit-trail/page.tsx

'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export default function OwnerAuditTrailPage() {
  const auditLogs = [
    { id: 1, timestamp: '2025-06-11 10:00', user: 'Dre (Propriétaire)', action: 'Création de sous-agence: "Agence test"', ip: '192.168.1.1' },
    { id: 2, timestamp: '2025-06-11 09:30', user: 'Responsable Agence A', action: 'Modification profil chauffeur: "John Doe"', ip: '10.0.0.5' },
    { id: 3, timestamp: '2025-06-10 18:45', user: 'Dre (Propriétaire)', action: 'Téléchargement document: "Licence Principale 2024"', ip: '192.168.1.1' },
    { id: 4, timestamp: '2025-06-10 14:15', user: 'Agent de Planning Central', action: 'Création voyage: Douala-Yaoundé', ip: '10.0.0.10' },
  ];

  const userOptions = [
    { value: 'all', label: 'Tous les Utilisateurs' },
    { value: 'dre', label: 'Dre (Propriétaire)' },
    { value: 'sub_agency_a_manager', label: 'Responsable Agence A' },
  ];

  const actionTypeOptions = [
    { value: 'all', label: 'Tous les Types' },
    { value: 'creation', label: 'Création' },
    { value: 'modification', label: 'Modification' },
    { value: 'deletion', label: 'Suppression' },
    { value: 'login', label: 'Connexion' },
    { value: 'upload', label: 'Téléchargement' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Historique des Activités (Audit Trail Global)</h2>

      <Card>
        <CardHeader>
          <CardTitle>Journal des Activités</CardTitle>
          <CardDescription>Enregistrement détaillé de toutes les actions significatives.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Input label="Recherche par Mot-clé" placeholder="Rechercher une action..." />
            <Select label="Filtrer par Utilisateur" options={userOptions} />
            <Select label="Filtrer par Type d'Action" options={actionTypeOptions} />
            <Input label="Date Début" type="date" />
            <Input label="Date Fin" type="date" />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Heure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse IP</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {auditLogs.map(log => (
                  <tr key={log.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.timestamp}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{log.action}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-purple-50 rounded-lg text-sm text-purple-800 border border-purple-200">
            <h4 className="font-semibold mb-2">Utilité de l'Audit Trail (Design Concept)</h4>
            <p>Cet historique est crucial pour la traçabilité des opérations et la conformité, permettant de savoir qui a fait quoi, quand et d'où.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}