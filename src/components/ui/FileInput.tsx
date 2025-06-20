//src/components/ui/FileInput.tsx

import React from 'react';
import { cn } from '@/lib/utils';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fileName?: string; // Pour afficher le nom du fichier sélectionné
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, error, className, id, fileName, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="flex items-center space-x-2">
          <label
            htmlFor={inputId}
            className={cn(
              "cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
              error && "border-red-500",
              className
            )}
          >
            Choisir un fichier
            <input
              type="file"
              id={inputId}
              className="sr-only" // Cache l'input natif
              ref={ref}
              {...props}
            />
          </label>
          {fileName && <span className="text-sm text-gray-500">{fileName}</span>}
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);
FileInput.displayName = "FileInput";

export { FileInput };