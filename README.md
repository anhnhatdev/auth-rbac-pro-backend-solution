# 🔐 Authentication Pro & RBAC Solution (Backend) 🚀

![Authentication](https://img.shields.io/badge/Status-Production--Ready-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-v18+-blue)
![RBAC](https://img.shields.io/badge/Security-RBAC%20Implementation-blueviolet)

This project is a high-performance **Authentication and Role-Based Access Control (RBAC)** backend solution. Built with Express and Node.js, it demonstrates industry-standard security patterns for modern web apps.

---

## ✨ Features

- 🔑 **Secure Authentication**: User registration and login powered by JWT (JSON Web Tokens).
- 🔒 **RBAC Implementation**: Role-based routing (USER vs ADMIN permissions).
- 🛡️ **JWT Middleware**: Centralized authentication middleware for securing private endpoints.
- 🚦 **Health Check**: Native uptime monitoring and status checking.
- 📦 **Clean Architecture**: Decoupled controllers, routes, and middleware.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **Express.js** | Core Web Framework |
| **JSONWebToken** | Stateless Authentication |
| **Bcrypt.js** | Advanced Password Hashing |
| **Morgan** | High-performance Request Logging |
| **Dotenv** | Managed Environment Configuration |

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Configure environment
Create a `.env` file based on the provided configuration:
```env
PORT=5000
JWT_SECRET=your_jwt_secret
```

### 3. Running the Server
```bash
# Development Mode
npm run dev

# Production Mode
npm start
```

---

## 🛣️ API Endpoints

### Authentication
- `POST /api/auth/register` - Create a new account.
- `POST /api/auth/login` - Identity verification & Token issuance.

### Protected Resources
- `GET /api/users/profile` - User-only resource (Requires Token).
- `GET /api/users/admin` - Admin-only dashboard (Requires ADMIN Role).

---

## 📂 Project Structure

```text
src/
├── controllers/    # API Logic
├── middleware/     # Auth & RBAC checks
├── models/         # Data schemas (Mock)
├── routes/         # Endpoint definitions
└── utils/          # Helper functions & Mock DB
```

---

Developed with ❤️ as a secure, scalable authentication template.
