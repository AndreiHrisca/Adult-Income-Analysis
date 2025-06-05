import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { type AdultRow, loadAdult } from '../services/dataset';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

/* ╭──────────────── Diccionario ES ───────────────╮ */
const LABEL_ES: Record<keyof AdultRow, string> = {
  age:            'Edad',
  workclass:      'Tipo de empleo',
  fnlwgt:         'Peso muestral',
  education:      'Nivel educativo',
  education_num:  'Años de educación',
  marital_status: 'Estado civil',
  occupation:     'Ocupación',
  relationship:   'Relación familiar',
  race:           'Raza',
  sex:            'Sexo',
  capital_gain:   'Ganancia de capital',
  capital_loss:   'Pérdida de capital',
  hours_per_week: 'Horas/semana',
  native_country: 'País de origen',
  income:         'Ingreso',
};
/* ╰───────────────────────────────────────────────╯ */

const NUMERIC_COLS = new Set<keyof AdultRow>([
  'age',
  'fnlwgt',
  'education_num',
  'capital_gain',
  'capital_loss',
  'hours_per_week',
]);

type Dataset = Record<keyof AdultRow, unknown[]>;

/* ---------- helpers ---------- */
function binNumeric(values: number[], bins = 12) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const step = (max - min) / bins || 1;

  const counts = Array(bins).fill(0) as number[];
  values.forEach(v => {
    const idx = Math.min(bins - 1, Math.floor((v - min) / step));
    counts[idx] += 1;
  });

  const labels = counts.map((_, i) =>
    `${Math.round(min + i * step)}–${Math.round(min + (i + 1) * step)}`
  );

  return { labels, counts };
}

function countCategorical(values: string[]) {
  const map = new Map<string, number>();
  values.forEach(v => map.set(v, (map.get(v) ?? 0) + 1));
  const labels = [...map.keys()];
  const counts = labels.map(l => map.get(l)!);
  return { labels, counts };
}

/* ---------- componente ---------- */
export default function AdultDashboard() {
  const [data, setData] = useState<Dataset | null>(null);

  /* carga única del dataset */
  useEffect(() => {
    loadAdult().then(rows => {
      const cols: Dataset = {} as Dataset;
      (Object.keys(rows[0]) as (keyof AdultRow)[]).forEach(c => {
        cols[c] = rows.map(r => r[c]);
      });
      setData(cols);
    });
  }, []);

  if (!data) {
    return <p className="text-center mt-10">Cargando datos…</p>;
  }

  return (
    <div className="dashboard">
      {(Object.entries(data) as [keyof AdultRow, unknown[]][]).map(
        ([col, values]) => {
          /* tipo de variable → labels + counts */
          const isNumeric = NUMERIC_COLS.has(col);
          const { labels, counts } = isNumeric
            ? binNumeric(values as number[])
            : countCategorical(values as string[]);

          const esLabel = LABEL_ES[col];

          const chartData = {
            labels,
            datasets: [
              {
                label: esLabel,   // leyenda en español
                data: counts,
                backgroundColor: 'rgba(148,163,184,0.4)', // slate-400 40 %
                borderColor: 'rgba(148,163,184,0.9)',     // slate-400 90 %
                borderWidth: 1,
              },
            ],
          };

          return (
            <div
              key={String(col)}
              className="bg-white p-4 rounded-2xl shadow flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-2 text-center">
                {esLabel}
              </h2>

              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' }, // cámbialo a display:false si no quieres leyenda
                  },
                }}
              />
            </div>
          );
        }
      )}
    </div>
  );
}