// src/app/owner/trips/create/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { TextArea } from '@/components/ui/TextArea';

export default function CreateTripPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulaire de création de voyage soumis (Design)");
  };

  const agencyOptions = [
    { value: 'agency_a', label: 'Sous-Agence Alpha' },
    { value: 'agency_b', label: 'Sous-Agence Beta' },
  ];
  const busOptions = [
    { value: 'ABC-123', label: 'Bus ABC-123 (Douala)' },
    { value: 'DEF-456', label: 'Bus DEF-456 (Yaoundé)' },
  ];
  const driverOptions = [
    { value: 'john_doe', label: 'John Doe' },
    { value: 'jane_smith', label: 'Jane Smith' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Créer un Nouveau Voyage</h2>
      <Card>
        <CardHeader>
          <CardTitle>Assistant de Création de Voyage</CardTitle>
          <CardDescription>Planifiez un nouveau voyage étape par étape.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Informations de Base</h3>
            <Select label="Sous-Agence Responsable" options={agencyOptions} required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Ville de Départ" placeholder="Ex: Douala" required />
              <Input label="Ville d'Arrivée" placeholder="Ex: Yaoundé" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Date du Voyage" type="date" required />
              <Input label="Heure de Départ" type="time" required />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Affectation du Transport</h3>
            <Select label="Sélectionner un Bus" options={busOptions} required />
            <Select label="Sélectionner un Chauffeur" options={driverOptions} required />

            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Détails Supplémentaires</h3>
            <Input label="Capacité Maximale de Passagers" type="number" placeholder="Ex: 45" />
            <TextArea label="Notes Spéciales (itinéraire, arrêts)" placeholder="Détails de l'itinéraire, points d'arrêt." rows={3} />

            <Button type="submit">Créer le Voyage</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}