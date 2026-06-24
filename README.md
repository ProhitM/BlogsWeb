# 📝 MyBlogs - Full Stack Blogging Platform

Live Demo: https://blogs-web-rho.vercel.app/

MyBlogs is a full-stack blogging platform built with Node.js, Express.js, MongoDB Atlas, EJS, Multer, and Cloudinary. Users can create, publish, and read blogs with image upload support. Images are stored securely on Cloudinary while blog data is managed using MongoDB Atlas.

---

## 🚀 Features

* User Authentication (Signup/Login)
* Create and Publish Blogs
* Upload Blog Cover Images
* Cloudinary Image Storage
* MongoDB Atlas Database
* Responsive UI with Bootstrap
* Dynamic Blog Rendering using EJS
* Secure Environment Variables
* Deployed on Vercel

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### File Upload & Storage

* Multer
* Cloudinary

### Deployment

* Vercel

---

## 📂 Project Structure

```bash
Blogify/
│
├── models/
│   ├── user.js
│   └── blog.js
│
├── routes/
│   ├── user.js
│   └── blog.js
│
├── middlewares/
│
├── services/
│
├── views/
│   ├── partials/
│   ├── home.ejs
│   ├── signin.ejs
│   ├── signup.ejs
│   └── addBlog.ejs
│
├── public/
│
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/blogify.git
cd blogify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000

MONGO_URL=your_mongodb_atlas_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

JWT_SECRET=your_secret_key
```

### 4. Start Application

```bash
npm start
```

or

```bash
npm run dev
```

---

## ☁️ MongoDB Atlas Setup

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Whitelist IP Address.
5. Copy the connection string.
6. Add it to your `.env` file.

Example:

```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/blogify
```

---

## ☁️ Cloudinary Setup

1. Create a Cloudinary account.

2. Navigate to Dashboard.

3. Copy:

   * Cloud Name
   * API Key
   * API Secret

4. Add them to `.env`.

```env
CLOUDINARY_CLOUD_NAME=xxxxx
CLOUDINARY_API_KEY=xxxxx
CLOUDINARY_API_SECRET=xxxxx
```

---

## 🖼️ Image Upload Flow

```text
User Uploads Image
        │
        ▼
      Multer
        │
        ▼
   Cloudinary
        │
        ▼
 secure_url Generated
        │
        ▼
 MongoDB Stores URL
        │
        ▼
 Image Displayed in Blog
```

---

## 🌐 Deployment on Vercel

1. Push project to GitHub.
2. Import repository into Vercel.
3. Add Environment Variables in Vercel Settings.
4. Redeploy the project.

Required Environment Variables:

```env
MONGO_URL
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
JWT_SECRET
```

---

## 📸 Screenshots

### Home Page

* Displays all published blogs.

### Authentication

* User Signup
* User Login

### Create Blog

* Add title, content, and cover image.

### Blog Details

* View complete blog post.

---

## 🔒 Security Features

* Password Hashing
* JWT Authentication
* Secure Environment Variables
* Protected Routes

---

## 🎯 Future Improvements

* Blog Categories
* Search Functionality
* User Profiles
* Comments System
* Like & Share Features
* Rich Text Editor
* Admin Dashboard

---

## 📚 Learning Outcomes

Through this project, I learned:

* Node.js Fundamentals
* Express.js Routing
* MongoDB Atlas Integration
* Authentication & Authorization
* Cloudinary Image Uploads
* Multer Middleware
* MVC Architecture
* Vercel Deployment
* Environment Variable Management

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Rohit Kumar Mishra

If you liked this project, don't forget to ⭐ the repository.
