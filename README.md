# 🛒 E-Commerce API

مشروع متجر إلكتروني باستخدام Node.js + Express + MongoDB، تم تصميمه بطريقة موديولية قابلة للتوسّع، بهدف التعلم والتطبيق العملي الكامل على RESTful API.

---

## 🚀 Features

- 🧑 User Register/Login + JWT Auth
- 🛒 Cart Module (Add / Remove / View)
- 💳 Order Module (Place Order from Cart)
- 📦 Product Management
- 🏷️ Categories / Subcategories
- 🔐 Authentication Middleware
- ✅ Input Validation using Joi + RegExp
- 🔄 Modular Structure for Scalability

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- Joi
- Nodemon

---

## 📁 Project Structure
E-commerce/
├── config/
├── middlewares/
├── modules/
│ ├── user/
│ ├── category/
│ ├── subcategory/
│ ├── product/
│ ├── cart/
│ ├── order/
│ ├── brand/
│ └── review/
├── validations/
├── bootstrap.js
└── index.js

---


## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt (Password Hashing)
- Joi (Validation)

---

## 🔐 Authentication

All protected routes require a valid JWT token in the `Authorization` header:

---

## ✅ Coming Soon

- [x] order.validation.js
- [ ] Brand CRUD
- [ ] Review system for products
- [ ] Admin Dashboard
- [ ] Payment Gateway

---

## 📦 Run Locally

```bash
git clone https://github.com/your-username/E-commerce.git
cd E-commerce
npm install
npm run dev
