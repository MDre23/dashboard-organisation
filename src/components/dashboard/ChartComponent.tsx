// src/components/dashboard/ChartComponent.tsx
'use client';

import React from 'react';
// Importez les composants de Chart.js si vous l'avez installé
// import { Bar, Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// Enregistrez les composants Chart.js si vous l'avez installé
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    fill?: boolean;
  }[];
}

interface ChartComponentProps {
  type: 'bar' | 'line';
  data: ChartData;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ type, data }) => {
  // Options de base pour les graphiques
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //     title: {
  //       display: false,
  //       text: 'Chart Title',
  //     },
  //   },
  // };

  return (
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300 text-gray-500">
      {/* Remplacement du graphique réel par un placeholder */}
      <p>Zone pour le graphique ({type}). Installez react-chartjs-2 pour le voir.</p>
      {/* {type === 'bar' && <Bar data={data} options={options} />}
      {type === 'line' && <Line data={data} options={options} />} */}
    </div>
  );
};

export default ChartComponent;