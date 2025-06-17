// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Fonction pour combiner les classes Tailwind de manière intelligente
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}