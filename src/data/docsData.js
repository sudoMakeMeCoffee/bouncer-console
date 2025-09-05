const docsData = {
  register: {
    title: "Registration",
    description:
      "Use this endpoint to register a new user under your application. You must include your `x-api-key` in the headers to authenticate the request.",
    method: "POST",
    path: "/api/v1/users/register",
    requestBody: `{
  "email": "test@example.com",
  "password": "12345678"
}`,
    headers: ["Content-Type: application/json", "x-api-key: YOUR_API_KEY"],
    fetchCode: `
fetch("https://api.example.com/users/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY"
  },
  body: JSON.stringify({ email: "test@example.com", password: "12345678" })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    axiosCode: `
import axios from "axios";

axios.post("https://api.example.com/users/register", {
  email: "test@example.com",
  password: "12345678"
}, {
  headers: { "x-api-key": "YOUR_API_KEY" },
  withCredentials: true
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`,
    response: `{
  "success": true,
  "message": "User registered successfully.",
  "data": {
    "id": "64f1a2b5e9f1e",
    "email": "test@example.com",
    "createdAt": "2025-09-05T10:15:30Z"
  },
  "errors": null
}`,
  },

  login: {
    title: "Login",
    description:
      "Authenticate a user with email and password. Returns a JWT access token stored in an HTTP-only cookie.",
    method: "POST",
    path: "/api/v1/users/login",
    requestBody: `{
  "email": "test@example.com",
  "password": "12345678"
}`,
    fetchCode: `
fetch("https://api.example.com/users/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY"
  },
  body: JSON.stringify({ email: "test@example.com", password: "12345678" }),
  credentials: "include"
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    axiosCode: `
import axios from "axios";

axios.post("https://api.example.com/users/login", {
  email: "test@example.com",
  password: "12345678"
}, {
  headers: { "x-api-key": "YOUR_API_KEY" },
  withCredentials: true
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`,
    response: `{
  "success": true,
  "message": "Login successful.",
  "data": {
    "id": "64f1a2b5e9f1e",
    "email": "test@example.com"
  }
}`,
  },

  logout: {
    title: "Logout",
    description:
      "Clears the user’s authentication cookies, effectively logging them out.",
    method: "POST",
    path: "/api/v1/users/logout",
    fetchCode: `
fetch("https://api.example.com/users/logout", {
  method: "POST",
  headers: { "x-api-key": "YOUR_API_KEY" },
  credentials: "include"
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    axiosCode: `
import axios from "axios";

axios.post("https://api.example.com/users/logout", {}, {
  headers: { "x-api-key": "YOUR_API_KEY" },
  withCredentials: true
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`,
    response: `{
  "success": true,
  "message": "User logged out successfully."
}`,
  },

  auth: {
    title: "Check Authentication",
    description:
      "Verify if the current user is authenticated using the access token.",
    method: "GET",
    path: "/api/v1/users/check-auth",
    fetchCode: `
fetch("https://api.example.com/users/check-auth", {
  method: "GET",
  headers: { "x-api-key": "YOUR_API_KEY" },
  credentials: "include"
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    axiosCode: `
import axios from "axios";

axios.get("https://api.example.com/users/check-auth", {
  headers: { "x-api-key": "YOUR_API_KEY" },
  withCredentials: true
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`,
    response: `{
  "success": true,
  "message": "Authenticated user details.",
  "data": {
    "id": "64f1a2b5e9f1e",
    "email": "test@example.com"
  }
}`,
  },
};

export default docsData;
