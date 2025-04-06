import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

def load_data(data_path: str) -> pd.DataFrame:
    """
    Carga el dataset Adult en un DataFrame de pandas.
    data_path: ruta del archivo 'adult.data' (o el que desees).
    """
    # Ajusta los nombres de las columnas si lo requieres, basándote en adult.names
    column_names = [
        "age", "workclass", "fnlwgt", "education", "education_num",
        "marital_status", "occupation", "relationship", "race",
        "sex", "capital_gain", "capital_loss", "hours_per_week",
        "native_country", "income"
    ]

    df = pd.read_csv(data_path, header=None, names=column_names, na_values="?", sep=",", skipinitialspace=True)
    return df

def main():
    # Construye la ruta al archivo 'adult.data'
    # Si estás en 'src', subes un nivel para llegar a la carpeta raíz y luego entras a 'data'
    data_path = os.path.join(os.path.dirname(__file__), "..", "data", "adult.data")

    # Cargar datos
    df = load_data(data_path)

    # Inspección rápida del DataFrame
    print("Primeras filas del DataFrame:")
    print(df.head())

    print("\nInformación general del DataFrame:")
    print(df.info())

    # Histograma de la variable 'age'
    plt.figure(figsize=(8, 6))
    sns.histplot(data=df, x="age", kde=True)
    plt.title("Distribución de la Edad")
    plt.xlabel("Edad")
    plt.ylabel("Frecuencia")
    plt.tight_layout()
    plt.show()

    # Gráfico de barras para la variable 'workclass'
    plt.figure(figsize=(8, 6))
    sns.countplot(data=df, x="workclass")
    plt.title("Frecuencia por Tipo de Trabajo")
    plt.xlabel("Tipo de Trabajo")
    plt.ylabel("Cuenta")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

    # Puedes crear más gráficos para seguir explorando

if __name__ == "__main__":
    main()