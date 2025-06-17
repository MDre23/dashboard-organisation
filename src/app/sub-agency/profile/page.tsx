// src/app/sub-agency/profile/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function SubAgencyProfilePage() {
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profil mis à jour (Design)");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Mon Profil et Documents (Sous-Agence)</h2>

      <Card>
        <CardHeader>
          <CardTitle>Informations du Profil</CardTitle>
          <CardDescription>Gérez vos informations personnelles et de contact.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <Input label="Nom Complet" value="Jean Pierre" readOnly />
            <Input label="Adresse E-mail" value="jean.pierre@agence-alpha.com" readOnly />
            <Input label="Numéro de Téléphone" placeholder="+237 6XXXXXXXX" />
            <Input label="Rôle" value="Responsable de Sous-Agence" readOnly />
            <Input label="Sous-Agence" value="Sous-Agence Alpha" readOnly />
            <Button type="submit">Mettre à Jour le Profil</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documents de la Sous-Agence</CardTitle>
          <CardDescription>Accédez aux documents légaux et administratifs spécifiques à votre sous-agence.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200">
            <p className="font-semibold mb-2">Documents (Exemple - Non Modifiables par la Sous-Agence):</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Licence d'Exploitation (Expire le: 31/12/2025) <Button variant="link" size="sm">Voir</Button></li>
              <li>Assurance Locaux (Expire le: 30/09/2025) <Button variant="link" size="sm">Voir</Button></li>
              <li>Contrat de Partenariat avec l'Organisation (Permanent) <Button variant="link" size="sm">Voir</Button></li>
            </ul>
            <p className="mt-4 text-orange-700">Ces documents sont gérés et mis à jour par le propriétaire de l'organisation.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}