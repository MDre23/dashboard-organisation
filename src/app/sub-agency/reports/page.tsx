// src/app/sub-agency/reports/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export default function SubAgencyReportsPage() {
  const reportTypeOptions = [
    { value: 'travel_performance', label: 'Performance des Voyages' },
    { value: 'detailed_revenue', label: 'Revenus Détaillés' },
    { value: 'bus_utilization', label: 'Utilisation des Bus' },
  ];

  const periodOptions = [
    { value: 'monthly', label: 'Mensuel' },
    { value: 'quarterly', label: 'Trimestriel' },
    { value: 'annual', label: 'Annuel' },
    { value: 'custom', label: 'Personnalisé' },
  ];

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Rapport généré (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Rapports et Analyses (Ma Sous-Agence)</h2>

      <Card>
        <CardHeader>
          <CardTitle>Générer un Rapport</CardTitle>
          <CardDescription>Accédez à des analyses de performance spécifiques à votre sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerateReport} className="space-y-4">
            <Select label="Type de Rapport" options={reportTypeOptions} required />
            <Select label="Période" options={periodOptions} required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Date de Début (si personnalisé)" type="date" />
              <Input label="Date de Fin (si personnalisé)" type="date" />
            </div>
            <Button type="submit">Générer Rapport</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exemple de Rapport : Performance des Voyages</CardTitle>
          <CardDescription>Analyse des voyages effectués par votre sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200">
            <h4 className="font-semibold mb-2">Métriques Clés (Design Concept)</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Nombre total de passagers transportés.</li>
              <li>Taux d'occupation moyen des bus.</li>
              <li>Voyages les plus rentables / moins rentables.</li>
              <li>Destinations les plus fréquentes.</li>
            </ul>
            <p className="mt-4">Des graphiques et des tableaux interactifs seraient affichés ici.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}