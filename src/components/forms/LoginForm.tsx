// src/components/forms/LoginForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Checkbox } from '@/components/ui/Checkbox';
import { Select } from '@/components/ui/Select';
import { toast } from 'sonner';

interface SelectOption {
    value: string;
    label: string;
}

const LoginForm: React.FC = () => {
  const router = useRouter();

  const [isSubAgency, setIsSubAgency] = useState<boolean>(false);

  const [ownerOrgName, setOwnerOrgName] = useState<string>('');
  const [ownerPassword, setOwnerPassword] = useState<string>('');

  const [subAgencyOrgName, setSubAgencyOrgName] = useState<string>('');
  const [subAgencyCity, setSubAgencyCity] = useState<string>('');
  const [subAgencyPoste, setSubAgencyPoste] = useState<string>('');
  const [subAgencyAccessCode, setSubAgencyAccessCode] = useState<string>('');

  const posteOptions: SelectOption[] = [
    { value: '', label: 'Sélectionner votre poste' },
    { value: 'Responsable de la sous-agence', label: 'Responsable de la sous-agence' },
    { value: 'Chauffeur', label: 'Chauffeur' },
  ];

  const handleOwnerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tentative de connexion Owner:', { ownerOrgName, ownerPassword });

    if (ownerOrgName === 'MonOrganisationPrincipale' && ownerPassword === 'password') {
      localStorage.setItem('userRole', 'OWNER');
      // --- IMPORTANT pour l'Owner ---
      localStorage.setItem('organizationName', ownerOrgName); // Stocke le nom de l'organisation
      localStorage.setItem('isSubAgency', 'false'); // Indique que ce n'est PAS une sous-agence
      localStorage.removeItem('subAgencyCity'); // S'assurer que cette clé est propre pour l'owner

      toast.success('Connexion Owner réussie !');
      router.push('owner');
    } else {
      toast.error('Nom d\'organisation ou mot de passe incorrect.');
    }
  };

  const handleSubAgencyLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tentative de connexion Sous-Agence:', {
      subAgencyOrgName,
      subAgencyCity,
      subAgencyPoste,
      subAgencyAccessCode,
    });

    if (
      subAgencyOrgName === 'MaSousAgence' &&
      subAgencyCity === 'Yaoundé' &&
      subAgencyAccessCode === '12345' &&
      subAgencyPoste !== ''
    ) {
      // --- TRÈS IMPORTANT pour la Sous-Agence ---
      localStorage.setItem('organizationName', subAgencyOrgName); // Stocke le nom de la sous-agence comme organisation
      localStorage.setItem('isSubAgency', 'true'); // Indique que c'est une sous-agence
      localStorage.setItem('subAgencyCity', subAgencyCity); // Stocke la ville de la sous-agence

      if (subAgencyPoste === 'Responsable de la sous-agence') {
        localStorage.setItem('userRole', 'SUB_AGENCY_MANAGER');
        toast.success('Connexion Responsable Sous-Agence réussie !');
        router.push(`./sub-agency?city=${subAgencyCity.toLowerCase()}`);
      } else if (subAgencyPoste === 'Chauffeur') {
        localStorage.setItem('userRole', 'STAFF');
        localStorage.setItem('staffType', 'CHAUFFEUR');
        toast.success('Connexion Chauffeur réussie ! Redirection vers le tableau de bord du chauffeur.');
        router.push('/dashboard/driver');
      }
    } else {
      toast.error('Informations de sous-agence ou code d\'accès incorrects.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Connexion au Dashboard Buca Transport
        </h2>

        <div className="mb-6 flex items-center space-x-2">
          <Checkbox
            id="isSubAgency"
            checked={isSubAgency}
            onChange={(e) => {
              setIsSubAgency(e.target.checked);
              setOwnerOrgName('');
              setOwnerPassword('');
              setSubAgencyOrgName('');
              setSubAgencyCity('');
              setSubAgencyPoste('');
              setSubAgencyAccessCode('');
            }}
          />
          <Label htmlFor="isSubAgency" className="text-gray-700">
            Nous sommes une sous-agence
          </Label>
        </div>

        {!isSubAgency ? (
          <form onSubmit={handleOwnerLogin} className="space-y-4">
            <div>
              <Label htmlFor="ownerOrgName">Nom de l'organisation</Label>
              <Input
                id="ownerOrgName"
                type="text"
                placeholder="Nom de l'organisation principale"
                value={ownerOrgName}
                onChange={(e) => setOwnerOrgName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="ownerPassword">Mot de passe</Label>
              <Input
                id="ownerPassword"
                type="password"
                placeholder="Votre mot de passe"
                value={ownerPassword}
                onChange={(e) => setOwnerPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter (Owner)
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSubAgencyLogin} className="space-y-4">
            <div>
              <Label htmlFor="subAgencyOrgName">Nom de l'organisation (Sous-Agence)</Label>
              <Input
                id="subAgencyOrgName"
                type="text"
                placeholder="Nom de votre sous-agence"
                value={subAgencyOrgName}
                onChange={(e) => setSubAgencyOrgName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="subAgencyCity">Ville</Label>
              <Input
                id="subAgencyCity"
                type="text"
                placeholder="Ville de la sous-agence (ex: Yaoundé)"
                value={subAgencyCity}
                onChange={(e) => setSubAgencyCity(e.target.value)}
                required
              />
            </div>
            <div>
              <Select
                id="subAgencyPoste"
                label="Poste"
                options={posteOptions}
                value={subAgencyPoste}
                onChange={(e) => setSubAgencyPoste(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="subAgencyAccessCode">Code d'accès</Label>
              <Input
                id="subAgencyAccessCode"
                type="text"
                placeholder="Le code d'accès de votre sous-agence"
                value={subAgencyAccessCode}
                onChange={(e) => setSubAgencyAccessCode(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter (Sous-Agence)
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;