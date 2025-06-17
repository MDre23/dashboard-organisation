// src/app/owner/sub-agencies/create/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { TextArea } from '@/components/ui/TextArea';

export default function CreateSubAgencyPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulaire de création de sous-agence soumis (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Créer une Nouvelle Sous-Agence</h2>
      <Card>
        <CardHeader>
          <CardTitle>Détails de la Nouvelle Sous-Agence</CardTitle>
          <CardDescription>Remplissez les informations pour ajouter une nouvelle sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Nom de la Sous-Agence" placeholder="Ex: Agence Lumière" required />
            <Input label="Adresse Complète" placeholder="Ex: 456 Avenue des Fleurs, Ville" required />
            <Input label="Email de Contact" type="email" placeholder="contact@agencelumiere.com" required />
            <Input label="Téléphone de Contact" type="tel" placeholder="+237 6XXXXXXXX" />
            <TextArea label="Description (optionnel)" placeholder="Informations supplémentaires sur la sous-agence" rows={3} />
            {/* Le code d'accès unique sera généré côté backend */}
            <Button type="submit">Créer Sous-Agence</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}