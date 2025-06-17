// src/app/sub-agency/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import KpiCard from '@/components/dashboard/KpiCard';
import ChartComponent from '@/components/dashboard/ChartComponent';
import RecentActivity from '@/components/dashboard/RecentActivity';

export default function SubAgencyDashboardPage() {
  // Données mockées pour le design de la sous-agence
  const revenueData = {
    labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Revenus Mensuels Sous-Agence (XAF)',
        data: [1500, 2000, 1800, 2500, 2200, 3000],
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // blue-500
      },
    ],
  };

  const activityLogs = [
    { id: 1, action: 'Nouveau chauffeur ajouté', time: '5 mins ago' },
    { id: 2, action: 'Voyage Douala-Yaoundé créé', time: '1 heure ago' },
    { id: 3, action: 'Bus XYZ-789 mis à jour', time: '2 heures ago' },
  ];

  const alerts = [
    { id: 1, message: 'Maintenance du bus ABC-123 à venir le 20/06', type: 'warning' },
    { id: 2, message: 'Message du Propriétaire: Nouvelle politique de carburant', type: 'info' },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Tableau de Bord de ma Sous-Agence</h2>

      {/* Section KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KpiCard title="Revenus du Mois" value="300.000 XAF" description="↑ 5% par rapport au mois dernier" />
        <KpiCard title="Voyages Effectués" value="25" description="↑ 3 voyages cette semaine" />
        <KpiCard title="Bus Actifs" value="5 / 6" description="1 bus en maintenance" />
      </div>

      {/* Graphique Revenus */}
      <Card>
        <CardHeader><CardTitle>Revenus Mensuels de ma Sous-Agence</CardTitle></CardHeader>
        <CardContent><ChartComponent type="bar" data={revenueData} /></CardContent>
      </Card>

      {/* Activité Récente et Alertes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={activityLogs} />
        <Card>
          <CardHeader><CardTitle>Alertes et Notifications</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {alerts.map(alert => (
                <li key={alert.id} className={`p-3 rounded-md ${alert.type === 'warning' ? 'bg-yellow-50 border border-yellow-200 text-yellow-800' : 'bg-blue-50 border border-blue-200 text-blue-800'}`}>
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