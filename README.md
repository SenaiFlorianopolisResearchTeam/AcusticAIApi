<div align="center">
  <img align="center" src="imgs/logo.png" alt="Team logo" width="300"> 
</div>

#

<div align="center">

[![Roboflow Universe Dataset](https://app.roboflow.com/images/download-dataset-badge.svg)](https://universe.roboflow.com/senai-qb205/trafficai)
[![Docker tests](https://github.com/fullzer4/AcustticAI/actions/workflows/docker-images.yml/badge.svg)](https://github.com/fullzer4/AcustticAI/actions/workflows/docker-images.yml)
[![Node.js tests](https://github.com/fullzer4/AcustticAI/actions/workflows/backend.yml/badge.svg)](https://github.com/fullzer4/AcustticAI/actions/workflows/backend.js.yml)
[![Python tests](https://github.com/fullzer4/AcustticAI/actions/workflows/python-ai.yml/badge.svg)](https://github.com/fullzer4/AcustticAI/actions/workflows/python-ai.yml)
[![Next.js tests](https://github.com/fullzer4/AcustticAI/actions/workflows/nextjs.yml/badge.svg)](https://github.com/fullzer4/AcustticAI/actions/workflows/nextjs.yml)
[![Security tests](https://github.com/fullzer4/AcustticAI/actions/workflows/security-test.yml/badge.svg)](https://github.com/fullzer4/AcustticAI/actions/workflows/security-test.yml)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=acusttic-ai&style=plastic)

</div>

This project was designed to simplify the counting and classification of cars for road analysis purposes, featuring a user-friendly interface and a precise system. Alongside this, it provides analyses that will assist users when evaluating a project.

## AI ( artificial inteligence ) 

In the AI folder, you'll find the computer vision model responsible for vehicle counting and classification, along with a Flask server that serves this model. The model was developed using a specialized dataset tailored for large-scale vehicle classification on highways. It was built using PyTorch and YOLOv8.

.env pattern:

```bash

```

## Backend

In this folder, you will find the API responsible for managing user sessions, as well as handling their registration and login processes. This API has been developed using Fastify, incorporating type-safety concepts along with the PostgresJS ORM. Additionally, the backend of my project will oversee all control and utilization of the AI API.

.env pattern:

```bash
DB_HOST=host
DB_PORT=5432
DB_NAME=databasename
DB_USERNAME=username
DB_PASSWORD=password
```

## Frontend

I built my frontend using Next.js 13, incorporating App Router and TypeScript. To ensure type safety during development, I utilized SCSS for styling. For data fetching, I integrated React Query. To validate the data flowing in and out of the application, I employed Zod. As for handling forms, I chose to work with React Hook Form.

.env pattern:

```bash

```
