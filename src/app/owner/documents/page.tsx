// src/app/owner/documents/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileInput } from '@/components/ui/FileInput';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export default function OwnerDocumentsPage() {
  const documents = [
    { id: 1, name: 'Licence Agence Principale', type: 'Licence', expiry: '31/12/2025', owner: 'Organisation Globale' },
    { id: 2, name: 'Assurance Bus ABC-123', type: 'Assurance Bus', expiry: '30/09/2025', owner: 'Sous-Agence Alpha' },
    { id: 3, name: 'Contrat Chauffeur Jane Smith', type: 'Contrat Personnel', expiry: '31/01/2026', owner: 'Sous-Agence Beta' },
  ];

  const documentTypeOptions = [
    { value: 'license', label: 'Licence d\'Agence' },
    { value: 'bus_insurance', label: 'Assurance Bus' },
    { value: 'personnel_contract', label: 'Contrat Personnel' },
    { value: 'sub_agency_legal', label: 'Document Légal Sous-Agence' },
    { value: 'other', label: 'Autre' },
  ];

  const subAgencyOptions = [
    { value: 'global', label: 'Organisation Globale' },
    { value: 'agency_a', label: 'Sous-Agence Alpha' },
    { value: 'agency_b', label: 'Sous-Agence Beta' },
  ];

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Document téléchargé (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Gestion des Documents Légaux et Administratifs</h2>

      <Card>
        <CardHeader>
          <CardTitle>Télécharger un Nouveau Document</CardTitle>
          <CardDescription>Ajoutez de nouveaux documents à votre bibliothèque sécurisée.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <Input label="Nom du Document" placeholder="Ex: Licence de Transport 2025" required />
            <Select label="Type de Document" options={documentTypeOptions} required />
            <Input label="Date d'Expiration" type="date" />
            <Select label="Appartient à" options={subAgencyOptions} required />
            <FileInput label="Choisir le fichier" name="documentFile" accept=".pdf,.doc,.docx,.jpg,.png" required />
            <Button type="submit">Télécharger Document</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bibliothèque de Documents</CardTitle>
          <CardDescription>Espace sécurisé pour le stockage numérique et suivi des expirations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expire le</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriétaire</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map(doc => (
                  <tr key={doc.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${new Date(doc.expiry.split('/').reverse().join('-')) < new Date(new Date().setMonth(new Date().getMonth() + 2)) ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {doc.expiry}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.owner}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="link" className="text-blue-600 hover:text-blue-900">Voir</Button>
                      <Button variant="link" className="ml-2 text-indigo-600 hover:text-indigo-900">Modifier</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800 border border-yellow-200">
            <h4 className="font-semibold mb-2">Suivi des Expirations (Design Concept)</h4>
            <p>Un tableau de bord dédié afficherait les dates d'expiration avec des alertes configurables.</p>
            <p className="mt-2">Fonctionnalités de catégorisation et de recherche pour les documents.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}