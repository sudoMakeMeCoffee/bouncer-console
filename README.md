# Bouncer Console

A React single-page application (SPA) for the Bouncer admin console. Bootstrapped with Create React App and styled with Tailwind + CSS. This repository contains the web client, layouts, pages, and an API client used across the app.

Quick links

- Root manifest: [public/index.html](public/index.html)
- App entry: [`index`](src/index.js) ([src/index.js](src/index.js))
- Main app component: [`App`](src/App.js) ([src/App.js](src/App.js))
- Dashboard layout: [`DashboardLayout`](src/layouts/DashboardLayout.jsx) ([src/layouts/DashboardLayout.jsx](src/layouts/DashboardLayout.jsx))
- Public layout: [`PublicLayout`](src/layouts/PublicLayout.jsx) ([src/layouts/PublicLayout.jsx](src/layouts/PublicLayout.jsx))
- API helper: [src/api/axios.js](src/api/axios.js)
- Package scripts & dependencies: [package.json](package.json)
- This file: [README.md](README.md)

Table of contents

- Project snapshot
- Getting started
- Development commands
- Important files & structure
- Deployment
- Contributing

Project snapshot

- React SPA using Create React App
- Layout-driven pages (dashboard / public / auth)
- Reusable components under [src/components](src/components)
- API wrapper in [src/api/axios.js](src/api/axios.js)
- Tailwind + plain CSS for styling (see [tailwind.config.js](tailwind.config.js) and [src/index.css](src/index.css))

Getting started (development)

1. Install dependencies
   ```sh
   npm install
   ```
2. Start the development server
   ```sh
   npm start
   ```
3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

Development commands

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app from Create React App setup (one-way operation).

Important files & structure

- `public/index.html`: Root manifest
- `src/index.js`: App entry
- `src/App.js`: Main app component
- `src/layouts/DashboardLayout.jsx`: Dashboard layout
- `src/layouts/PublicLayout.jsx`: Public layout
- `src/api/axios.js`: API helper
- `package.json`: Package scripts & dependencies
- `README.md`: This file

Deployment
For deployment instructions, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/deployment).

Contributing
We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information on how to get involved.

Snapshots / Screenshots

Screenshots help reviewers and users quickly see the UI.

- Dashboard
  ![Dashboard snapshot](docs/screenshots/dashboard.png)

- Login
  ![Login snapshot](docs/screenshots/login.png)
