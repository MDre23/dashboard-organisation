// src/app/owner/tariffs/page.tsx
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export default function OwnerTariffsPage() {
  const tariffs = [
    { id: 1, name: 'Tarif Standard Douala-Yaoundé', amount: '10.000 XAF', type: 'Standard', route: 'Douala-Yaoundé' },
    { id: 2, name: 'Tarif Nuit Yaoundé-Bafoussam', amount: '12.500 XAF', type: 'Nuit', route: 'Yaoundé-Bafoussam' },
    { id: 3, name: 'Tarif VIP Douala-Kribi', amount: '15.000 XAF', type: 'VIP', route: 'Douala-Kribi' },
  ];

  const typeOptions = [
    { value: 'standard', label: 'Standard' },
    { value: 'vip', label: 'VIP' },
    { value: 'night', label: 'Nuit' },
    { value: 'promo', label: 'Promotionnel' },
  ];

  const routeOptions = [
    { value: 'dla-yde', label: 'Douala - Yaoundé' },
    { value: 'yde-baf', label: 'Yaoundé - Bafoussam' },
    { value: 'dla-kri', label: 'Douala - Kribi' },
  ];

  const handleCreateTariff = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Nouveau tarif créé (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Tarifs et Contrats Internes</h2>

      <Card>
        <CardHeader>
          <CardTitle>Créer un Nouveau Tarif de Voyage</CardTitle>
          <CardDescription>Définissez les structures tarifaires pour vos voyages.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateTariff} className="space-y-4">
            <Input label="Nom du Tarif" placeholder="Ex: Tarif Fête de Fin d'Année" required />
            <Input label="Montant (XAF)" type="number" placeholder="Ex: 12000" required />
            <Select label="Type de Tarif" options={typeOptions} required />
            <Select label="Route / Destination" options={routeOptions} required />
            <Input label="Date de Début (Optionnel)" type="date" />
            <Input label="Date de Fin (Optionnel)" type="date" />
            <Button type="submit">Créer Tarif</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Tarifs Existants</CardTitle>
          <CardDescription>Vue d'ensemble de toutes les structures tarifaires définies.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tariffs.map(tariff => (
                  <tr key={tariff.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tariff.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tariff.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tariff.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tariff.route}</td>
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
    </div>
  );
}