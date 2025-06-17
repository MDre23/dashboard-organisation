// src/app/sub-agency/personnel/create/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';

export default function CreateSubAgencyPersonnelPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulaire d'ajout de chauffeur soumis (Design)");
  };

  const licenseTypeOptions = [
    { value: 'catB', label: 'Catégorie B' },
    { value: 'catC', label: 'Catégorie C' },
    { value: 'catD', label: 'Catégorie D' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Ajouter un Nouveau Chauffeur</h2>
      <Card>
        <CardHeader>
          <CardTitle>Détails du Chauffeur</CardTitle>
          <CardDescription>Remplissez les informations pour ajouter un nouveau chauffeur à votre sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Nom Complet" placeholder="Ex: Paul Martin" required />
            <Input label="Numéro de Permis de Conduire" placeholder="Ex: 123456789X" required />
            <Select label="Catégorie de Permis" options={licenseTypeOptions} required />
            <Input label="Date d'Expiration du Permis" type="date" required />
            <Input label="Numéro de Téléphone" type="tel" placeholder="+237 6XXXXXXXX" />
            <Input label="Adresse E-mail (Optionnel)" type="email" placeholder="paul.martin@example.com" />
            <Button type="submit">Ajouter Chauffeur</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}