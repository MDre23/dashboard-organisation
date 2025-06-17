// src/app/owner/roles/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Select } from '@/components/ui/Select';

export default function OwnerRolesPage() {
  const roles = [
    { id: 1, name: 'Responsable de Sous-Agence', permissions: ['view_agency_data', 'manage_agency_personnel', 'manage_agency_buses', 'manage_agency_trips'] },
    { id: 2, name: 'Comptable Global', permissions: ['view_global_finance', 'enter_expenses', 'generate_reports'] },
    { id: 3, name: 'Agent de Planning Central', permissions: ['view_global_trips', 'create_global_trips', 'edit_global_trips'] },
  ];

  const availablePermissions = [
    { id: 'view_agency_data', label: 'Consulter les données de sous-agence' },
    { id: 'manage_agency_personnel', label: 'Gérer le personnel de sa sous-agence' },
    { id: 'manage_agency_buses', label: 'Gérer les bus de sa sous-agence' },
    { id: 'manage_agency_trips', label: 'Gérer les voyages de sa sous-agence' },
    { id: 'view_global_finance', label: 'Consulter les finances globales' },
    { id: 'enter_expenses', label: 'Saisir les dépenses' },
    { id: 'generate_reports', label: 'Générer des rapports' },
    { id: 'view_global_trips', label: 'Consulter tous les plannings de voyages' },
    { id: 'create_global_trips', label: 'Créer des voyages globaux' },
    { id: 'edit_global_trips', label: 'Modifier les voyages globaux' },
    { id: 'upload_documents', label: 'Télécharger des documents légaux' },
    { id: 'manage_roles', label: 'Gérer les rôles et permissions' },
  ];

  const handleCreateRole = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Nouveau rôle créé (Design)");
  };

  const handleAssignRole = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Rôle assigné à l'utilisateur (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Gestion des Rôles et Permissions</h2>

      <Card>
        <CardHeader>
          <CardTitle>Créer un Nouveau Rôle Personnalisé</CardTitle>
          <CardDescription>Définissez de nouveaux rôles avec des permissions spécifiques.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateRole} className="space-y-4">
            <Input label="Nom du Rôle" placeholder="Ex: Assistant Administratif" required />
            <h3 className="text-md font-semibold text-gray-700 mt-4 mb-2">Permissions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {availablePermissions.map(perm => (
                <Checkbox key={perm.id} label={perm.label} name={`permission_${perm.id}`} />
              ))}
            </div>
            <Button type="submit">Créer Rôle</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Rôles Existants</CardTitle>
          <CardDescription>Aperçu des rôles et de leurs permissions associées.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions Clés</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {roles.map(role => (
                  <tr key={role.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{role.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {role.permissions.slice(0, 2).join(', ')} {role.permissions.length > 2 && '...'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="link" className="text-blue-600 hover:text-blue-900">Modifier</Button>
                      <Button variant="link" className="ml-2 text-red-600 hover:text-red-900">Supprimer</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assigner un Rôle à un Utilisateur</CardTitle>
          <CardDescription>Attribuez des rôles personnalisés au personnel.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAssignRole} className="space-y-4">
            <Input label="Email de l'Utilisateur" type="email" placeholder="utilisateur@example.com" required />
            <Select label="Sélectionner le Rôle" options={roles.map(r => ({ value: r.name, label: r.name }))} required />
            <Button type="submit">Assigner Rôle</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}