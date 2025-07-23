
---

## 📁 `backend/README.md`

```md
# 🛒 Elevate Mart – Backend

This is the **Node.js + Express backend** for Elevate Mart, a full-stack eCommerce application. It handles user authentication, product management, order processing, and admin operations.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie-based session
- Cloudinary (image upload)
- Stripe or Razorpay (payment)

---

## 📁 Folder Structure

backend/
├── controllers/ # Business logic
├── middleware/ # Auth & error handling
├── models/ # Mongoose schemas
├── routes/ # API routes
├── utils/ # JWT/token utils
├── server.js # Main entry point
└── README.md


---

## ✨ Key Features

- User login and registration
- JWT token generation with cookie storage
- Auto logout after 10 minutes (JWT expiry + cookie maxAge)
- Product CRUD APIs
- Cart and Order APIs
- Admin routes with role-based protection

---

## 🧑‍💻 Getting Started

### 1️⃣ Install Dependencies
```bash
cd backend
npm install

2️⃣ Create .env File
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

3️⃣ Run the Server
npm run dev
