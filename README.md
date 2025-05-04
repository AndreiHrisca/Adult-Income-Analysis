# Adult‑Income‑Analysis

Análisis exploratorio y modelado preliminar del **conjunto de datos Adult (Censo de EE. UU. 1994)** para predecir si una persona percibe ingresos superiores a 50 000 USD anuales a partir de variables socio‑demográficas.

> Proyecto: **Análisis Exploratorio de los Datos**  
> Autor/a: **Andrei Ionut Hrisca**  
> Fecha: **4 de mayo de 2025**

---

## Tabla de contenido
1. [Descripción](#descripción)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Requisitos e instalación](#requisitos-e-instalación)
4. [Ejecución rápida](#ejecución-rápida)
5. [Scripts disponibles](#scripts-disponibles)
6. [Dataset](#dataset)
7. [Resultados y gráficos](#resultados-y-gráficos)
8. [To‑Do / Próximos pasos](#to-do--próximos-pasos)
9. [Autor/a](#autora)
10. [Licencia](#licencia)

---

## Descripción

Este repositorio contiene:

* **Carga y limpieza** del dataset Adult (UCI Machine Learning).
* **Análisis exploratorio** (estadísticas descriptivas, gráficos univariantes y multivariantes).
* **Visualizaciones** clave:  
  - Distribución de edad (`age`).  
  - Horas trabajadas por semana (`hours_per_week`).  
  - Ganancia de capital (`capital_gain`).  
  - Frecuencia de niveles educativos (`education`).
* **Scripts independientes** para cada gráfico y un script `analysis.py` general.


---

## Requisitos e instalación
- invoke -> https://www.pyinvoke.org/
- numpy -> https://numpy.org/
- pandas -> https://pandas.pydata.org/
- matplotlib -> https://matplotlib.org/
- scikit-learn -> https://scikit-learn.org/stable/index.html
- jupyter -> https://jupyter.org/

## Dataset
Becker, B. & Kohavi, R. (1996). Adult [Dataset].
UCI Machine Learning Repository. https://doi.org/10.24432/C5XW20.