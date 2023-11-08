# Application README

This repository contains a simple web application developed with Java, React, TypeScript, and WireMock. The application consists of three main components: `backend`, `frontend`, and `wiremock`. Below are the instructions for setting up and running each component of the application.

## Prerequisites

Before you start, ensure that you have the following software installed on your machine:

- Java
- Gradle
- Node.js
- npm

## Backend

The `backend` component is developed in Java and can be built and run using Gradle. To build the backend, open a terminal, navigate to the `backend` folder, and execute the following command:

```bash
gradle build
```

To run the backend application, use the following Gradle command:

```bash
gradle bootRun
```

To execute the unit tests for the backend, run the following command:

```bash
gradle test
```

## Frontend

The `frontend` component is developed in React, TypeScript, and Vite. To set up the frontend, open a terminal, navigate to the `frontend` folder, and execute the following command to install the dependencies:

```bash
npm install
```

To run the frontend development server, use the following command:

```bash
npm run dev
```

To run the tests for the frontend, execute the following command:

```bash
npm test
```

## WireMock
The `wiremock` folder contains the WireMock provided by Qikserve. No additional setup is required for this component.

## Shell Scripts
As a convenience, two shell scripts (`start.sh` and `build.sh`) have been provided to simplify the build and run process.

To build the project, execute the following command in the root folder:

```bash
./build.sh
```

Similarly, to `build` and `start` the project, execute the following command in the root folder:

```bash
./start.sh
```

Please note that running the scripts might take a few minutes to install the dependencies.

## Accessing the Application

After running the backend and frontend components, you can access the application in your browser at the URL http://localhost:5173/.