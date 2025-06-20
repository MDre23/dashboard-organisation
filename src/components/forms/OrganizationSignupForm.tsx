//src/components/forms/OrganizationSignupForm.tsx

'use client'; // Indique que c'est un Client Component

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { FileInput } from '@/components/ui/FileInput';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

// Ces types seront remplacés par Zod et React Hook Form plus tard
interface SignupFormData {
  organizationName: string;
  organizationAddress: string;
  legalRegistrationNumber: string;
  ownerFullName: string;
  ownerEmail: string;
  ownerPhone: string;
  documentType: string;
  documentFile: File | null;
  password: string;
  confirmPassword: string;
}

const OrganizationSignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    organizationName: '',
    organizationAddress: '',
    legalRegistrationNumber: '',
    ownerFullName: '',
    ownerEmail: '',
    ownerPhone: '',
    documentType: 'license',
    documentFile: null,
    password: '',
    confirmPassword: '',
  });
  const [fileName, setFileName] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, documentFile: e.target.files![0] }));
      setFileName(e.target.files[0].name);
    } else {
      setFormData(prev => ({ ...prev, documentFile: null }));
      setFileName(undefined);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire Propriétaire Soumis (Design Seulement):', formData);
    alert('Formulaire Propriétaire Soumis ! (Ceci est juste un design)');
  };

  const documentOptions = [
    { value: 'license', label: 'Licence d\'Agence' },
    { value: 'registration', label: 'Certificat d\'Enregistrement' },
    { value: 'id', label: 'Pièce d\'Identité du Propriétaire' },
    { value: 'other', label: 'Autre' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inscription Propriétaire d'Organisation</CardTitle>
        <CardDescription>
          Enregistrez votre organisation et devenez propriétaire.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Informations sur l'Organisation</h3>
          <Input
            label="Nom de l'Organisation"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Ex: Ma Société de Transport"
            required
          />
          <Input
            label="Adresse du Siège Social"
            name="organizationAddress"
            value={formData.organizationAddress}
            onChange={handleChange}
            placeholder="Ex: 123 Rue Principale, Ville"
            required
          />
          <Input
            label="Numéro d'Enregistrement Légal"
            name="legalRegistrationNumber"
            value={formData.legalRegistrationNumber}
            onChange={handleChange}
            placeholder="Ex: RC/XYZ/2023"
            required
          />

          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Informations sur le Propriétaire</h3>
          <Input
            label="Nom Complet du Propriétaire"
            name="ownerFullName"
            value={formData.ownerFullName}
            onChange={handleChange}
            placeholder="Ex: Jean Dupont"
            required
          />
          <Input
            label="Adresse E-mail"
            name="ownerEmail"
            type="email"
            value={formData.ownerEmail}
            onChange={handleChange}
            placeholder="Ex: jean.dupont@example.com"
            required
          />
          <Input
            label="Numéro de Téléphone"
            name="ownerPhone"
            type="tel"
            value={formData.ownerPhone}
            onChange={handleChange}
            placeholder="Ex: +237 6XXXXXXXX"
            required
          />

          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Pièces Légales</h3>
          <Select
            label="Type de Document"
            name="documentType"
            options={documentOptions}
            value={formData.documentType}
            onChange={handleChange}
            required
          />
          <FileInput
            label="Télécharger le Document Numérisé"
            name="documentFile"
            onChange={handleFileChange}
            fileName={fileName}
            accept=".pdf,.jpg,.png"
          />
          <p className="text-sm text-gray-500">Formats acceptés : PDF, JPG, PNG.</p>

          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Sécurité</h3>
          <Input
            label="Mot de passe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mot de passe"
            required
          />
          <Input
            label="Confirmation du Mot de passe"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmer le mot de passe"
            required
          />

          <Button type="submit" className="w-full">
            S'inscrire
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrganizationSignupForm;