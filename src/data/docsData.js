const API_URL = process.env.REACT_APP_API_URL;

const docsData = {
  register: {
    title: "Registration",
    description:
      "Use this endpoint to register a new user under your application. You must include your `x-api-key` in the headers to authenticate the request.",
    method: "POST",
    path: "/api/v1/users/register",
    jsCode: `
fetch("${API_URL}/users/register", {
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
    tsCode: `
interface ClientAppUser {
  id: string;
  appId: string;
  appName: string;
  email: string;
  updatedAt: string;
  createdAt: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
  data: ClientAppUser;
  errors: string[] | null;
}

export async function registerUser(
  email: string,
  password: string
): Promise<RegisterResponse> {
  const res = await fetch("${API_URL}/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "YOUR_API_KEY",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to register user");
  }

  return res.json() as Promise<RegisterResponse>;
}`,
    response: `{
  "success": true,
  "message": "User registered successfully.",
  "data": {
    "id": "64f1a2b5e9f1e",
    "appId": "a1b2c3d4e5",
    "appName": "My Client App",
    "email": "test@example.com",
    "updatedAt": "2025-09-05T10:15:30Z",
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
    jsCode: `
fetch("${API_URL}/users/login", {
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
    tsCode: `
interface LoginResponse {
  success: boolean;
  message: string;
  data: ClientAppUser;
  errors: string[] | null;
}

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  const res = await fetch("${API_URL}/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "YOUR_API_KEY",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to login");
  }

  return res.json() as Promise<LoginResponse>;
}`,
    response: `{
  "success": true,
  "message": "Login successful.",
  "data": {
    "id": "64f1a2b5e9f1e",
    "appId": "a1b2c3d4e5",
    "appName": "My Client App",
    "email": "test@example.com",
    "updatedAt": "2025-09-07T09:00:00Z",
    "createdAt": "2025-09-05T10:15:30Z"
  },
  "errors": null
}`,
  },

  logout: {
    title: "Logout",
    description:
      "Clears the user’s authentication cookies, effectively logging them out.",
    method: "POST",
    path: "/api/v1/users/logout",
    jsCode: `
fetch("${API_URL}/users/logout", {
  method: "POST",
  headers: { "x-api-key": "YOUR_API_KEY" },
  credentials: "include"
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    tsCode: `
interface LogoutResponse {
  success: boolean;
  message: string;
  data: null;
  errors: string[] | null;
}

export async function logoutUser(): Promise<LogoutResponse> {
  const res = await fetch("${API_URL}/users/logout", {
    method: "POST",
    headers: { "x-api-key": "YOUR_API_KEY" },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to logout");
  }

  return res.json() as Promise<LogoutResponse>;
}`,
    response: `{
  "success": true,
  "message": "Logged out successfully",
  "data": null,
  "errors": null
}`,
  },

  auth: {
    title: "Check Authentication",
    description:
      "Verify if the current user is authenticated using the access token stored in the cookie.",
    method: "POST",
    path: "/api/v1/users/authenticated",
    jsCode: `
fetch("${API_URL}/users/authenticated", {
  method: "POST",
  headers: { "x-api-key": "YOUR_API_KEY" },
  credentials: "include"
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    tsCode: `
interface AuthResponse {
  success: boolean;
  message: string;
  data: ClientAppUser | null;
  errors: string[] | string | null;
}

export async function checkAuth(): Promise<AuthResponse> {
  const res = await fetch("${API_URL}/users/authenticated", {
    method: "POST",
    headers: { "x-api-key": "YOUR_API_KEY" },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to check auth");
  }

  return res.json() as Promise<AuthResponse>;
}`,
    response: `{
  "success": true,
  "message": "Authorized",
  "data": {
    "id": "64f1a2b5e9f1e",
    "appId": "a1b2c3d4e5",
    "appName": "My Client App",
    "email": "test@example.com",
    "updatedAt": "2025-09-07T09:00:00Z",
    "createdAt": "2025-09-05T10:15:30Z"
  },
  "errors": null
}`,
  },
};

export default docsData;
