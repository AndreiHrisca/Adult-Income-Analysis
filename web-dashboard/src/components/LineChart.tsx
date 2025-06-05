import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

import { type AdultRow, loadAdult } from '../services/dataset';

// registra los elementos de Chart.js una única vez
Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function LineChart() {
  const [rows, setRows] = useState<AdultRow[]>([]);

  // carga el dataset al montar el componente
  useEffect(() => {
    loadAdult().then(setRows);
  }, []);

  /** ─────────── Datos para la gráfica ─────────── */
  // cuenta cuántas personas hay en cada edad
  const ageCounts = new Map<number, number>();
  rows.forEach((r) => {
    ageCounts.set(r.age, (ageCounts.get(r.age) ?? 0) + 1);
  });

  // ordena las edades ascendentemente
  const ages = [...ageCounts.keys()].sort((a, b) => a - b);
  const counts = ages.map((age) => ageCounts.get(age)!);

  const data = {
    labels: ages.map(String), // ejes X: edades como string
    datasets: [
      {
        label: 'Número de personas',
        data: counts,
        fill: false,
        tension: 0.25, // suaviza la curva
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Personas' },
      },
      x: {
        title: { display: true, text: 'Edad (años)' },
      },
    },
  };

  return (
    <div className="">
      <Line data={data} options={options} />
    </div>
  );
}