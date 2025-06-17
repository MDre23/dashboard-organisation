// src/app/sub-agency/messages/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TextArea } from '@/components/ui/TextArea';
import { Input } from '@/components/ui/Input';

export default function SubAgencyMessagesPage() {
  const messages = [
    { id: 1, sender: 'Propriétaire de l\'Organisation', subject: 'Nouvelle Réglementation Bus', content: 'Veuillez prendre connaissance des nouvelles directives concernant l\'entretien des bus.', date: '10/06/2025 09:00' },
    { id: 2, sender: 'Propriétaire de l\'Organisation', subject: 'Réunion Trimestrielle', content: 'Rappel de la réunion trimestrielle des responsables, le 20 Juin.', date: '05/06/2025 14:00' },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé au propriétaire (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Messagerie (Ma Sous-Agence)</h2>

      <Card>
        <CardHeader>
          <CardTitle>Envoyer un Message au Propriétaire</CardTitle>
          <CardDescription>Communiquez directement avec le propriétaire de l'organisation.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSendMessage} className="space-y-4">
            <Input label="Sujet du Message" placeholder="Ex: Question sur le planning" required />
            <TextArea label="Contenu du Message" placeholder="Écrivez votre message ici..." rows={5} required />
            <Button type="submit">Envoyer Message</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Boîte de Réception</CardTitle>
          <CardDescription>Messages reçus du propriétaire de l'organisation.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
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
    </div>
  );
}