//src/composents/navigation/Navbar.tsx

'use client';
import React from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Exemple d'icônes

interface NavbarProps {
  userType: 'owner' | 'sub-agency';
}

const Navbar: React.FC<NavbarProps> = ({ userType }) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-800">
        {userType === 'owner' ? 'Propriétaire' : 'Responsable Sous-Agence'}
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-blue-600 transition-colors">
          <FaBell className="text-xl" />
        </button>
        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <FaUserCircle className="text-2xl" />
            <span>Mon Compte</span>
          </button>
          {/* Menu déroulant pour le profil (invisible par défaut) */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a>
            <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 flex items-center">
              <FaSignOutAlt className="mr-2" /> Déconnexion
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;