import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils'; // Assurez-vous que ce chemin est correct

interface KpiCardProps {
  title: string;
  value: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, description, variant = 'default' }) => {
  const variantClasses = {
    default: 'border-blue-200 text-blue-800',
    success: 'border-green-200 text-green-800',
    warning: 'border-yellow-200 text-yellow-800',
    danger: 'border-red-200 text-red-800',
  };

  return (
    <Card className={cn("flex flex-col", variantClasses[variant])}>
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end">
        <div className="text-3xl font-bold">{value}</div>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;