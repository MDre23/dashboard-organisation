// src/app/sub-agency/buses/create/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';

export default function CreateSubAgencyBusPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulaire d'ajout de bus de sous-agence soumis (Design)");
  };

  const capacityOptions = [
    { value: '30', label: '30 places' },
    { value: '45', label: '45 places' },
    { value: '60', label: '60 places' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Ajouter un Nouveau Bus à ma Sous-Agence</h2>
      <Card>
        <CardHeader>
          <CardTitle>Détails du Bus</CardTitle>
          <CardDescription>Remplissez les informations pour ajouter un nouveau bus rattaché à votre sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Numéro d'Immatriculation" placeholder="Ex: FGH-987-IJ" required />
            <Input label="Marque et Modèle" placeholder="Ex: Toyota Coaster" required />
            <Select label="Capacité (Places)" options={capacityOptions} required />
            <Input label="Année de Fabrication" type="number" placeholder="Ex: 2018" required />
            <Input label="Kilométrage Actuel" type="number" placeholder="Ex: 200000" />
            <Button type="submit">Ajouter Bus</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}