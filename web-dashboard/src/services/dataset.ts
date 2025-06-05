import Papa from 'papaparse';

/* ──────────────────────────────────────────────────────────────
   1) Estructura tipada del dataset Adult (UCI)
   ────────────────────────────────────────────────────────────── */
export interface AdultRow {
  age: number;
  workclass: string;
  fnlwgt: number;
  education: string;
  education_num: number;
  marital_status: string;
  occupation: string;
  relationship: string;
  race: string;
  sex: string;
  capital_gain: number;
  capital_loss: number;
  hours_per_week: number;
  native_country: string;
  income: string;          // "<=50K"  |  ">50K"
}

/* ──────────────────────────────────────────────────────────────
   2) Helper: mapea una fila (array de strings) a AdultRow
   ────────────────────────────────────────────────────────────── */
function mapToAdult(row: string[]): AdultRow {
  return {
    age:            +row[0],
    workclass:       row[1].trim(),
    fnlwgt:         +row[2],
    education:       row[3].trim(),
    education_num:  +row[4],
    marital_status:  row[5].trim(),
    occupation:      row[6].trim(),
    relationship:    row[7].trim(),
    race:            row[8].trim(),
    sex:             row[9].trim(),
    capital_gain:   +row[10],
    capital_loss:   +row[11],
    hours_per_week: +row[12],
    native_country:  row[13].trim(),
    income:          row[14].trim(),
  };
}

/* ──────────────────────────────────────────────────────────────
   3) Carga y convierte el fichero (asincrónico)
   ────────────────────────────────────────────────────────────── */
export async function loadAdult(): Promise<AdultRow[]> {
  // El archivo debe estar en:  public/data/adult.data
  const resp = await fetch('/data/adult.data');
  if (!resp.ok) throw new Error(`Error al descargar dataset: ${resp.status}`);

  const text = await resp.text();

  /* PapaParse devolverá un array de arrays (sin cabecera) */
  const { data } = Papa.parse<string[]>(text, {
    delimiter: ',',
    skipEmptyLines: true,
  });

  // Type guard: asegura que realmente es string[][]
  const rows = data as string[][];

  // Map a objetos AdultRow (ver helper arriba)
  return rows.map(mapToAdult);
}