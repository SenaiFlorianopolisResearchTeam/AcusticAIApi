<div align="center">
  <img align="center" src="imgs/logo.png" alt="Team logo" width="300"> 
</div>

#

<div align="center">

[![Roboflow Universe Dataset](https://app.roboflow.com/images/download-dataset-badge.svg)](https://universe.roboflow.com/senai-qb205/trafficai)

This project was designed to simplify the counting and classification of cars for road analysis purposes, featuring a user-friendly interface and a precise system. Alongside this, it provides analyses that will assist users when evaluating a project.

</div>

## Evaluation of the model

Metrics that was used to evaluate that was written with python, pyTorch(YOLOv8), supervision and opencv:

$$
MSE = \frac{1}{n} \sum_{i=1}^{n} (Y_i - \hat{Y}_i)^2
$$

$$
R^2 = 1 - \frac{SSR}{SST}
$$

$$
mAP = \text{Mean Average Precision}
$$

## MainFolder ( Setup files )

## AI ( artificial inteligence ) 

In the AI folder, you'll find the computer vision model responsible for vehicle counting and classification, along with a Flask server that serves this model. The model was developed using a specialized dataset tailored for large-scale vehicle classification on highways. It was built using PyTorch and YOLOv8.

.env pattern:

```bash
ai-key=key
backend-key=key

DB_HOST=host
DB_PORT=5432
DB_NAME=databasename
DB_USERNAME=username
DB_PASSWORD=password
```

## Backend

In this folder, you will find the API responsible for managing user sessions, as well as handling their registration and login processes. This API has been developed using Fastify, incorporating type-safety concepts along with the PostgresJS ORM. Additionally, the backend of my project will oversee all control and utilization of the AI API.

.env pattern:

```bash
ai-key=key
backend-key=key
JWT-ket=key

DB_HOST=host
DB_PORT=5432
DB_NAME=databasename
DB_USERNAME=username
DB_PASSWORD=password
```

## Frontend

I built my frontend using Next.js 13, incorporating App Router and TypeScript. To ensure type safety during development, I utilized SCSS for styling. For data fetching, I integrated React Query. To validate the data flowing in and out of the application, I employed Zod. As for handling forms, I chose to work with React Hook Form.

.env pattern:

## Members

- lucas garcez

```bash
ai-key=key
backend-key=key
```
