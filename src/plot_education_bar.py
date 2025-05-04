import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

def load_data(data_path: str) -> pd.DataFrame:
    column_names = [
        "age", "workclass", "fnlwgt", "education", "education_num",
        "marital_status", "occupation", "relationship", "race",
        "sex", "capital_gain", "capital_loss", "hours_per_week",
        "native_country", "income"
    ]
    return pd.read_csv(data_path, header=None, names=column_names, na_values="?", sep=",", skipinitialspace=True)

def main():
    data_path = os.path.join(os.path.dirname(__file__), "..", "data", "adult.data")
    df = load_data(data_path)

    plt.figure(figsize=(10, 6))
    order = df["education"].value_counts().index
    sns.countplot(data=df, x="education", order=order)
    plt.title("Distribución de la variable education")
    plt.xlabel("Nivel educativo")
    plt.ylabel("Frecuencia")
    plt.xticks(rotation=45, ha="right")
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    main()
