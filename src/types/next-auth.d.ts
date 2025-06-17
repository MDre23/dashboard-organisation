// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role?: string; // Ajout du rôle
      organizationId?: string; // Ajout de l'ID de l'organisation
      // Ajoutez toute autre propriété personnalisée que vous stockez dans la session
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role?: string; // Ajout du rôle pour l'objet User du provider
    organizationId?: string; // Ajout de l'ID de l'organisation pour l'objet User du provider
    // Ajoutez toute autre propriété personnalisée de votre modèle User de Prisma
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role?: string; // Ajout du rôle au JWT
    organizationId?: string; // Ajout de l'ID de l'organisation au JWT
    // Ajoutez toute autre propriété que vous mettez dans le token JWT
  }
}