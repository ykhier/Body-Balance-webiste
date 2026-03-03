# 🌿 Body Balance – Nutrition & Wellness Website  

🔗 **Live Website:**  
https://barah-body-balance.vercel.app/

A modern full-stack web application built for a real business – my sister’s nutrition and wellness brand.

This platform represents a professional digital presence for a nutrition consultant, designed to support clients, manage inquiries, and provide a clean and modern user experience.

---

# 📌 About The Project  

This project was developed as a real-world business website for my sister’s nutrition brand.

The goal was to build:

- 🌿 A clean and professional landing page  
- 📱 Fully responsive design (mobile-first)  
- 🌙 Dark / Light mode support  
- 📥 Contact system with database storage  
- 🔐 Secure admin panel for managing submissions  
- 🚀 Production-ready deployment  

---

# ✨ Features  

- ⚡ Built with Next.js 14 (App Router)  
- 🎨 Modern UI using TailwindCSS + shadcn/ui  
- 🌙 Dark / Light mode with next-themes  
- 🔐 Secure admin authentication using Environment Variables  
- 📥 Contact form connected to database  
- 📊 Admin dashboard with filtering and management tools  
- 🚀 Deployed on Vercel  

---

# 🛠 Tech Stack  

- Next.js 14  
- TypeScript  
- TailwindCSS  
- shadcn/ui  
- next-themes  
- Prisma (if used)  
- PostgreSQL / Firebase (if used)  
- Vercel  

---

# 📂 Project Structure  

```bash
src/
 ├── app/
 │   ├── api/
 │   ├── admin/
 │   └── page.tsx
 ├── components/
 ├── lib/
 └── styles/
```

---

# ⚙️ Installation  

## 1️⃣ Clone the repository  

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

## 2️⃣ Install dependencies  

```bash
npm install
```

## 3️⃣ Run locally  

```bash
npm run dev
```

Application runs on:

```
http://localhost:3000
```

---

# 🔐 Environment Variables  

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_database_url
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_secure_password
```

⚠️ Never commit your `.env` file to GitHub.

---

# 🧑‍💻 Admin Panel  

Admin route:

```
/admin
```

Admin capabilities:

- 🔑 Secure login  
- 📥 View contact submissions  
- ✅ Mark as handled  
- 🗑 Delete records  
- 📊 Filter by date  

---

# 🌙 Dark Mode  

This project supports Dark / Light mode using:

- next-themes  
- Tailwind darkMode: "class"  

The selected theme is automatically stored in localStorage.

---

# 🚀 Deployment  

Optimized for Vercel deployment.

Steps:

1. Push project to GitHub  
2. Import repository into Vercel  
3. Add Environment Variables  
4. Deploy  

---

# 👨‍💻 Developer  

Developed by Yosef Khier  
Software Engineering Student  

Built as a real-world production project for a family business.
