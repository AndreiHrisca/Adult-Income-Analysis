from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

# Configurar CORS para permitir peticiones desde Angular (localhost:4200)
origins = [
    "http://localhost:4200",
    "http://127.0.0.1:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   # Permitir estos orígenes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/workclass")
def get_workclass_data():
    """
    Carga el dataset 'adult.data', agrega la cantidad de registros por categoría
    de 'workclass' y retorna la información en formato JSON.
    """
    # Ruta al archivo de datos; asegúrate de que la carpeta 'data' esté en la raíz
    data_path = "data/adult.data"

    # Definir nombres de columna (según el archivo adult.names)
    column_names = [
        "age", "workclass", "fnlwgt", "education", "education_num",
        "marital_status", "occupation", "relationship", "race",
        "sex", "capital_gain", "capital_loss", "hours_per_week",
        "native_country", "income"
    ]

    # Cargar datos y tratar valores faltantes
    df = pd.read_csv(data_path, header=None, names=column_names, na_values="?", sep=",", skipinitialspace=True)

    # Agregar conteo por 'workclass'
    workclass_counts = df['workclass'].value_counts().reset_index()
    workclass_counts.columns = ["workclass", "count"]

    # Convertir a lista de diccionarios
    data = workclass_counts.to_dict(orient="records")
    return data