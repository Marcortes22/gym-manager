# 🏋️‍♂️ Gym Manager – Gym Management Software

**Gym Manager** is a web platform designed for the complete management of gyms in Costa Rica, from small training centers to large chains.  
It allows managing staff, workout plans, clients, and payments in one place, improving the user experience and making gym operations more efficient.

---

## 🚀 Key Features

- 📊 **Client and staff management**
- 🏋️ **Workout plans and training routines**
- 💳 **Payment and membership management**
- 🌐 **Public landing page for client acquisition**
- 🔐 **Protected admin dashboard for gym owners/trainers**
- 📱 **Scalable, modern, and user-friendly design**

---

## 🛠️ Tech Stack

- **Frontend**: Next.js + React
- **State & Data**: TanStack Query, Axios
- **UI/Styling**: TailwindCSS, shadcn/ui
- **Backend (BaaS)**: Supabase
- **Database**: PostgreSQL (managed by Supabase)
- **Infrastructure**: Supabase Hosting + Vercel

---

## 🔀 Branching Workflow

- **`main`** → Primary branch, stable and protected (production).
- **`develop`** → Default development branch.
- **`feature/*`** → Feature branches for new functionality.

> ⚠️ Direct pushes to `main` are not allowed.  
> All changes must be merged through Pull Requests from `develop`.

---

## 📌 Roadmap

- [ ] Initial project setup with Next.js
- [ ] Supabase integration (auth + database)
- [ ] Basic landing page implementation
- [ ] Authentication with Supabase Auth
- [ ] Admin dashboard development
- [ ] Client, staff, and workout management
- [ ] Payment gateway integration
