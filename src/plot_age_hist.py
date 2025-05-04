import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Función de carga.
def load_data(data_path: str) -> pd.DataFrame:
    column_names = [
        "age", "workclass", "fnlwgt", "education", "education_num",
        "marital_status", "occupation", "relationship", "race",
        "sex", "capital_gain", "capital_loss", "hours_per_week",
        "native_country", "income"
    ]
    return pd.read_csv(
        data_path, header=None, names=column_names, na_values="?", sep=",", skipinitialspace=True
    )

def main():
    data_path = os.path.join(os.path.dirname(__file__), "..", "data", "adult.data")
    df = load_data(data_path)

    plt.figure(figsize=(8, 6))
    sns.histplot(df["age"].dropna(), kde=True, bins=30)
    plt.title("Distribución de age")
    plt.xlabel("Edad (años)")
    plt.ylabel("Frecuencia")
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    main()
