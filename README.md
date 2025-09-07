# Bouncer – AaaS Console

🌐[**Live Demo**](https://bouncer-psi.vercel.app)

🔗[**Backend Repo**](https://github.com/sudoMakeMeCoffee/bouncer-api)  

The **Bouncer Authentication-as-a-Service (AaaS) Console** is the **frontend client** for managing apps, API keys, and authentication flows. This repository contains the **UI, layouts, pages, and API client** that power the admin experience.  

![Dashboard snapshot](docs/screenshots/home.png)  

---

## 🌐 About the Project  

Bouncer provides **Authentication-as-a-Service (AaaS)** for developers who want to integrate authentication without building it from scratch.  

With Bouncer, developers can:  
- **Register applications** and obtain API keys  
- **Authenticate users** within their applications  
- **Manage tokens** (issue, validate, and revoke)  
- **Leverage the console** to manage apps and track activity  

### 🔑 Key Features  

- **App Registration**: Create and manage apps directly in the console  
- **API Key Management**: Securely provision unique keys for each app  
- **Authentication Flows** (via API):  
  - Register new users  
  - Log in and obtain access tokens  
  - Log out and revoke sessions  
  - Verify authentication state  
- **Dashboard Console**: Manage apps, users, and monitor API usage  
- **Frontend Architecture**:  
  - React SPA  
  - Layout-driven pages (Dashboard / Public / Auth)  
  - Tailwind + custom CSS styling  
  - Reusable components for scalability  

---

## 📂 Quick Links  

- Root manifest: [public/index.html](public/index.html)  
- App entry: [src/index.js](src/index.js)  
- Main component: [src/App.js](src/App.js)  
- Dashboard layout: [src/layouts/DashboardLayout.jsx](src/layouts/DashboardLayout.jsx)  
- Public layout: [src/layouts/PublicLayout.jsx](src/layouts/PublicLayout.jsx)  
- API helper: [src/api/axios.js](src/api/axios.js)  
- Scripts & dependencies: [package.json](package.json)  
- Documentation: [README.md](README.md)  

---

## 📸 Screenshots  

  ![Dashboard snapshot](docs/screenshots/dashboard.png)  

  ![Login snapshot](docs/screenshots/login.png)  

  ![Docs snapshot](docs/screenshots/start.png)  

 
