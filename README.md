# Frontend Documentation for Amigo Chat App

## Overview

This document outlines the frontend architecture of the Amigo Chat App, developed with React.js. It serves as a guide for setup, deployment, and understanding the codebase's structure and features.

## This Project Features
* React.JS 
* Tailwind


## Prerequisites

- Node.js (LTS)
- Yarn or npm
- Git (for version control)

## Getting Started

1. Installation

    - Clone the repository: `git clone repository-url`
    - Install dependencies: `yarn install` or `npm install`

2. Running the application
    - Development server: `yarn dev` or `npm run dev`
    - Production build: `yarn build` or `npm run build`

## System Architecture

- App Directory: Utilizing React.js's file-based routing system.
- Components Directory: Reusable components such as buttons, input fields, etc.
- Public Directory: Static assets like images, logos, fonts, etc.
- Contexts Directory: React contexts for state management across the application.

## Features

- User Authentication: Registration and login flows with security considerations in backend
- Amigo Chat Box: Interactive Chat Box to talk to Amigo
- Settings Page: Ability for users change email or username
- Responsive Design: Adaptable UI for mobile, tablet, and desktop views.
- API Integration: Communication with backend services via RESTful APIs. (Java Spring & Python Microservice)

## Tailwind CSS for Styling

- Tailwind CSS used for styling our components, allowing for rapid UI development with its utility-first approach. It enables consistency in design while keeping the styling customizable and scalable.

## Reusable Components

- Reusable components to streamline the development process. This approach enhances the project's maintainability and allows for quicker iterations and feature implementations.



[//]: # (# Amigo-FE)


[//]: # ()
[//]: # (Chat App Front-End. This is a university project for my Web Development classes)

[//]: # ()
[//]: # (# Run these commands before proceeding)

[//]: # ()
[//]: # (npm i axios)

[//]: # ()
[//]: # (npm i react-router-dom)

[//]: # ()
[//]: # (npm install -d tailwindcss postcss autoprefixer)

[//]: # (npx tailwindcss init -p)

[//]: # ()
[//]: # (# Getting Started with Create React App)

[//]: # ()
[//]: # (This project was bootstrapped with [Create React App]&#40;https://github.com/facebook/create-react-app&#41;.)

[//]: # ()
[//]: # (## Available Scripts)

[//]: # ()
[//]: # (In the project directory, you can run:)

[//]: # ()
[//]: # (### `npm start`)

[//]: # ()

[//]: # (Open [http://localhost:3000]&#40;http://localhost:3000&#41; to view it in your browser.)

[//]: # ()

[//]: # (You may also see any lint errors in the console.)

[//]: # ()
[//]: # (### `npm test`)

[//]: # ()

[//]: # (See the section about [running tests]&#40;https://facebook.github.io/create-react-app/docs/running-tests&#41; for more)

[//]: # (information.)

[//]: # ()
[//]: # (### `npm run build`)

[//]: # ()

[//]: # (It correctly bundles React in production mode and optimizes the build for the best performance.)

[//]: # ()

[//]: # (Your app is ready to be deployed!)

[//]: # ()
[//]: # (See the section about [deployment]&#40;https://facebook.github.io/create-react-app/docs/deployment&#41; for more information.)

[//]: # ()
[//]: # (### `npm run eject`)

[//]: # ()
[//]: # (**Note: this is a one-way operation. Once you `eject`, you can't go back!**)

[//]: # ()
[//]: # (If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will)

[//]: # (remove the single build dependency from your project.)

[//]: # ()
[//]: # (Instead, it will copy all the configuration files and the transitive dependencies &#40;webpack, Babel, ESLint, etc&#41; right)

[//]: # (into your project so you have full control over them. All of the commands except `eject` will still work, but they will)

[//]: # (point to the copied scripts so you can tweak them. At this point you're on your own.)

[//]: # ()
[//]: # (You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you)

[//]: # (shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't)

[//]: # (customize it when you are ready for it.)

[//]: # ()
[//]: # (## Learn More)

[//]: # ()
[//]: # (You can learn more in)

[//]: # (the [Create React App documentation]&#40;https://facebook.github.io/create-react-app/docs/getting-started&#41;.)

[//]: # ()
[//]: # (To learn React, check out the [React documentation]&#40;https://reactjs.org/&#41;.)

[//]: # ()
[//]: # (### Code Splitting)

[//]: # ()
[//]: # (This section has moved)

[//]: # (here: [https://facebook.github.io/create-react-app/docs/code-splitting]&#40;https://facebook.github.io/create-react-app/docs/code-splitting&#41;)

[//]: # ()
[//]: # (### Analyzing the Bundle Size)

[//]: # ()
[//]: # (This section has moved)

[//]: # (here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size]&#40;https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size&#41;)

[//]: # ()
[//]: # (### Making a Progressive Web App)

[//]: # ()
[//]: # (This section has moved)

[//]: # (here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app]&#40;https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app&#41;)

[//]: # ()
[//]: # (### Advanced Configuration)

[//]: # ()
[//]: # (This section has moved)

[//]: # (here: [https://facebook.github.io/create-react-app/docs/advanced-configuration]&#40;https://facebook.github.io/create-react-app/docs/advanced-configuration&#41;)

[//]: # ()
[//]: # (### Deployment)

[//]: # ()
[//]: # (This section has moved)

[//]: # (here: [https://facebook.github.io/create-react-app/docs/deployment]&#40;https://facebook.github.io/create-react-app/docs/deployment&#41;)

[//]: # ()
[//]: # (### `npm run build` fails to minify)

[//]: # ()
[//]: # (This section has moved)

[//]: # (here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify]&#40;https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify&#41;)
