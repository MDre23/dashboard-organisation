// src/app/owner/personnel/create/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';

export default function CreatePersonnelPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulaire d'ajout de personnel soumis (Design)");
  };

  const roleOptions = [
    { value: 'driver', label: 'Chauffeur' },
    { value: 'sub_agency_manager', label: 'Responsable de Sous-Agence' },
    { value: 'accountant', label: 'Comptable' },
    { value: 'planner', label: 'Agent de Planning' },
  ];

  const subAgencyOptions = [
    { value: 'agency_a', label: 'Sous-Agence A' },
    { value: 'agency_b', label: 'Sous-Agence B' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Ajouter du Personnel</h2>
      <Card>
        <CardHeader>
          <CardTitle>Nouveau Membre du Personnel</CardTitle>
          <CardDescription>Remplissez les détails pour ajouter un nouveau membre au personnel.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Nom Complet" placeholder="Ex: Marie Claire" required />
            <Input label="Email Professionnel" type="email" placeholder="marie.claire@example.com" required />
            <Input label="Numéro de Téléphone" type="tel" placeholder="+237 6XXXXXXXX" />
            <Select label="Rôle" options={roleOptions} required />
            <Select label="Affecté à la Sous-Agence" options={subAgencyOptions} required />
            <Button type="submit">Ajouter Personnel</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}