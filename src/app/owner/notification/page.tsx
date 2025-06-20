// src/app/owner/notifications/page.tsx
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TextArea } from '@/components/ui/TextArea';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export default function OwnerNotificationsPage() {
  const messages = [
    { id: 1, sender: 'Responsable Sous-Agence A', subject: 'Demande de Bus', content: 'Besoin d\'un bus supplémentaire pour demain.', date: '10/06/2025 10:30' },
    { id: 2, sender: 'Système', subject: 'Alerte Maintenance', content: 'Bus DEF-456 nécessite un entretien urgent.', date: '09/06/2025 15:00' },
  ];

  const alerts = [
    { id: 1, type: 'Maintenance', message: 'Maintenance de bus #ABC-123 due le 25/06', severity: 'warning' },
    { id: 2, type: 'Document', message: 'Licence Sous-Agence X expire le 30/06', severity: 'critical' },
    { id: 3, type: 'Planning', message: 'Chevauchement de chauffeur détecté sur voyage Y', severity: 'warning' },
    { id: 4, type: 'Performance', message: 'Marge bénéficiaire Sous-Agence B en baisse ce mois-ci', severity: 'info' },
  ];

  const receiverOptions = [
    { value: 'all', label: 'Tous les Responsables de Sous-Agences' },
    { value: 'agency_a_manager', label: 'Responsable Sous-Agence A' },
    { value: 'agency_b_manager', label: 'Responsable Sous-Agence B' },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Messagerie et Notifications</h2>

      <Card>
        <CardHeader>
          <CardTitle>Messagerie Interne</CardTitle>
          <CardDescription>Communiquez avec les responsables de sous-agences.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSendMessage} className="space-y-4 mb-6">
            <Select label="Destinataire(s)" options={receiverOptions} required />
            <Input label="Sujet du Message" placeholder="Ex: Rappel de procédure" required />
            <TextArea label="Contenu du Message" placeholder="Écrivez votre message ici..." rows={5} required />
            <Button type="submit">Envoyer Message</Button>
          </form>
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Messages Récents</h3>
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-800">{msg.sender}</span>
                  <span className="text-gray-500">{msg.date}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{msg.subject}</h4>
                <p className="text-gray-700 text-sm">{msg.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Centre d'Alertes et Notifications</CardTitle>
          <CardDescription>Toutes les alertes importantes du système.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map(alert => (
              <div
                key={alert.id}
                className={`p-3 rounded-md border ${
                  alert.severity === 'critical' ? 'bg-red-50 border-red-200 text-red-800' :
                  alert.severity === 'warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' :
                  'bg-blue-50 border-blue-200 text-blue-800'
                }`}
              >
                <p className="font-semibold">{alert.type}: {alert.message}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200">
            <h4 className="font-semibold mb-2">Paramètres d'Alertes (Design Concept)</h4>
            <p>Possibilité de configurer les types d'alertes à recevoir et leurs seuils.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}