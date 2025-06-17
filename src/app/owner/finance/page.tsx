// src/app/owner/finance/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export default function OwnerFinancePage() {
  const handleSubmitExpense = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dépense enregistrée (Design)");
  };

  const expenseCategories = [
    { value: 'fuel', label: 'Carburant' },
    { value: 'salaries', label: 'Salaires' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'rent', label: 'Loyer' },
    { value: 'other', label: 'Autre' },
  ];

  const subAgencyOptions = [
    { value: 'global', label: 'Organisation Globale' },
    { value: 'agency_a', label: 'Sous-Agence Alpha' },
    { value: 'agency_b', label: 'Sous-Agence Beta' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Gestion Financière Interne</h2>

      <Card>
        <CardHeader>
          <CardTitle>Saisie des Dépenses</CardTitle>
          <CardDescription>Enregistrez toutes les dépenses de l'organisation.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitExpense} className="space-y-4">
            <Input label="Montant de la Dépense (XAF)" type="number" placeholder="Ex: 50000" required />
            <Select label="Catégorie de Dépense" options={expenseCategories} required />
            <Input label="Description" placeholder="Ex: Achat de carburant pour bus XYZ" required />
            <Input label="Date de la Dépense" type="date" required />
            <Select label="Affecté à" options={subAgencyOptions} required />
            <Button type="submit">Enregistrer Dépense</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comptes de Profits et Pertes (Design Concept)</CardTitle>
          <CardDescription>Rapports détaillés des profits et pertes par période et par sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 rounded-lg text-sm text-blue-800 border border-blue-200">
            <p>Ici, des graphiques et des tableaux interactifs afficheraient les profits et pertes globaux et par sous-agence.</p>
            <p className="mt-2">Filtrage par : Période (Mensuel, Trimestriel, Annuel), Sous-Agence.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Budgétisation & Rapports Personnalisés (Design Concept)</CardTitle>
          <CardDescription>Outils pour créer et suivre des budgets, et générer des rapports financiers personnalisés.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-green-50 rounded-lg text-sm text-green-800 border border-green-200">
            <p>Cette section proposerait des interfaces pour :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>La création et le suivi de budgets (globaux et par sous-agence).</li>
              <li>La génération de rapports personnalisés (flux de trésorerie, balance des comptes, etc.).</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}