# Authentication

A **secure user authentication system** built with **Node.js, Express, and MongoDB**, featuring **hashed passwords, JWT tokens, and OTP verification**.

---

## 🔑 Features

- **User Registration & Login**
  - Hashes passwords using **bcrypt** for security
  - Checks for existing users to prevent duplicates
- **OTP Verification**
  - Sends email verification codes to confirm user identity
- **JWT Authentication**
  - Issues **Access** and **Refresh Tokens**
  - Protects routes and resources
- **Secure Storage**
  - Stores hashed passwords, OTPs, and tokens safely in **MongoDB**
- **Error Handling**
  - Handles duplicate users and server errors gracefully

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT (JSON Web Tokens)  
- **Security:** bcrypt, OTP email verification  
- **Email:** Nodemailer  

---

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/RaoUmair55/UserAuthentication.git
```
##Create .env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

##Start server

npm run start

