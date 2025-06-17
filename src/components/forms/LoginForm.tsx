// src/components/forms/LoginForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
// Assurez-vous que tous les imports de Shadcn/UI sont corrects

interface LoginFormData {
  email: string;
  password: string;
  isSubAgency: boolean;
  organizationName?: string;
  subAgencyCity?: string;
  subAgencyAccessCode?: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    isSubAgency: false,
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // --- Logique de connexion simulée ---
    if (formData.email === 'owner@example.com' && formData.password === 'password123') {
      // Connexion réussie pour l'Owner
      console.log('Connexion réussie ! Redirection vers le dashboard owner...');
      // Stocker le nom de l'organisation pour l'owner
      localStorage.setItem('organizationName', 'Buca Voyage');
      localStorage.removeItem('isSubAgency'); // S'assurer que ce n'est pas considéré comme une sous-agence
      localStorage.removeItem('subAgencyCity');
      router.push('owner');
    } else if (
      formData.isSubAgency &&
      formData.email === 'subagency@example.com' && // Nouvel email de test pour sous-agence
      formData.password === 'password123' &&
      formData.organizationName === 'Buca Voyage' && // Nom de l'organisation principale
      formData.subAgencyCity === 'Douala' && // Ville de la sous-agence
      formData.subAgencyAccessCode === 'SUB001' // Code d'accès de la sous-agence
    ) {
      // Connexion réussie pour la sous-agence
      console.log('Connexion réussie ! Redirection vers le dashboard sous-agence...');
      // Stocker les informations de la sous-agence
      localStorage.setItem('organizationName', formData.organizationName);
      localStorage.setItem('isSubAgency', 'true');
      localStorage.setItem('subAgencyCity', formData.subAgencyCity);
      router.push('sub-agency');
    }
    else {
      setError('Email ou mot de passe incorrect, ou informations de sous-agence invalides.');
      console.log('Échec de connexion : Identifiants invalides.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connexion</CardTitle>
        <CardDescription>
          Connectez-vous à votre compte.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Input
            label="Adresse E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre.email@example.com"
            required
          />
          <Input
            label="Mot de passe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mot de passe"
            required
          />

          <Checkbox
            label="Se connecter en tant que sous-agence"
            name="isSubAgency"
            checked={formData.isSubAgency}
            onChange={handleChange}
          />

          {formData.isSubAgency && (
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700">Informations Sous-Agence</p>
              <Input
                label="Nom de l'Organisation Principale"
                name="organizationName"
                value={formData.organizationName || ''}
                onChange={handleChange}
                placeholder="Nom de l'organisation"
                required={formData.isSubAgency}
              />
              <Input
                label="Ville de la Sous-Agence"
                name="subAgencyCity"
                value={formData.subAgencyCity || ''}
                onChange={handleChange}
                placeholder="Ex: Douala"
                required={formData.isSubAgency}
              />
              <Input
                label="Code d'Accès de la Sous-Agence"
                name="subAgencyAccessCode"
                value={formData.subAgencyAccessCode || ''}
                onChange={handleChange}
                placeholder="Code unique de la sous-agence"
                required={formData.isSubAgency}
              />
            </div>
          )}
          <Button type="submit" className="w-full">
            Se Connecter
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;