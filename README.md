# Highnet CV

A personal portfolio and CV website built with Angular, showcasing professional experience and projects.

## Live Demo

Visit the live site at: [highnetcv.xyz](https://www.highnetcv.xyz)

## Features

- Responsive design with Material UI components
- Dynamic CV viewer/download functionality
- Project showcase with links to live demos
- Integrated social media links (GitHub, LinkedIn)
- Mobile-friendly layout

## Technologies Used

- Angular 19
- Angular Material
- TypeScript
- SCSS
- Firebase Hosting

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
- You have a Windows/Linux/Mac machine.
- You have installed the [Angular CLI](https://angular.io/cli) globally: `npm install -g @angular/cli`
- You have installed the [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli) globally: `npm install -g firebase-tools` (if you plan to deploy)

## Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:highnet/highnet-cv.git
    cd highnet-cv
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    The application will be available at `http://localhost:4200/`.
    ```bash
    npm start
    ```

## Building the Project

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. This command uses the `production` configuration.

## Running Tests

To execute the unit tests via Karma, run:

```bash
npm test
```

## Linting

To lint the project files, run:

```bash
npm run lint
```

## Deployment

This project is deployed using Firebase Hosting.

1.  Ensure you have Firebase CLI installed and configured.
2.  Login to Firebase (if you haven't already):
    ```bash
    firebase login
    ```
3.  Deploy the application:
    ```bash
    npm run deploy
    ```
    This command will build the application and deploy it to Firebase.
