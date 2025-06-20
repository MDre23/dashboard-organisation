

'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import KpiCard from '@/components/dashboard/KpiCard';
import ChartComponent from '@/components/dashboard/ChartComponent';
import RecentActivity from '@/components/dashboard/RecentActivity';

export default function OwnerDashboardPage() {
  // Données mockées pour le design
  const revenueData = {
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Revenus Mensuels (XAF)',
        data: [5000, 7000, 6000, 9000, 8000, 10000],
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // blue-500
      },
    ],
  };

  const profitData = {
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Profits Mensuels (XAF)',
        data: [2000, 3500, 2800, 4500, 3800, 5000],
        borderColor: 'rgba(16, 185, 129, 1)', // emerald-500
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
      },
    ],
  };

  const auditLogs = [
    { id: 1, action: 'Connexion de Responsable B', time: '10 mins ago' },
    { id: 2, action: 'Document mis à jour', time: '1 heure ago' },
    { id: 3, action: 'Nouveau bus ajouté', time: '3 heures ago' },
  ];

  const alerts = [
    { id: 1, message: 'Maintenance de bus #ABC-123 due le 25/06', type: 'warning' },
    { id: 2, message: 'Licence Sous-Agence X expire le 30/06', type: 'danger' },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Tableau de Bord du Propriétaire</h2>

      {/* Section KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Revenus Totaux" value="1.250.000 XAF" description="↑ 12% par rapport au mois dernier" />
        <KpiCard title="Profit Net" value="550.000 XAF" description="↑ 8% par rapport au mois dernier" variant="success" />
        <KpiCard title="Sous-Agences Actives" value="15 / 18" description="3 inactives" />
        <KpiCard title="Voyages en Cours" value="7" description="50 voyages ce mois-ci" />
      </div>

      {/* Graphiques Revenus et Profits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Revenus Mensuels Agrégés</CardTitle></CardHeader>
          <CardContent><ChartComponent type="bar" data={revenueData} /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Profits Mensuels Globaux</CardTitle></CardHeader>
          <CardContent><ChartComponent type="line" data={profitData} /></CardContent>
        </Card>
      </div>

      {/* Activité Récente et Alertes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={auditLogs} />
        <Card>
          <CardHeader><CardTitle>Alertes Actives</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {alerts.map(alert => (
                <li key={alert.id} className={`p-3 rounded-md ${alert.type === 'warning' ? 'bg-yellow-50 border border-yellow-200 text-yellow-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                  {alert.message}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
