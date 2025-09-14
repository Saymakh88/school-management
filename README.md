<<<<<<< HEAD
# school-management
A mini Next.js + MySQL project to add, display, and manage school records with a simple two-page interface.
=======
# 🏫 School Management Mini Project

This is a mini full-stack project built using **Next.js (App Router)** and **MySQL**.  
It has two main pages:

- **Add School** → Form to input and save school details
- **Show Schools** → Fetch and display schools from the database

---

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MySQL

---

## 📂 Project Structure

app/
├─ layout.js # Root layout with navbar
├─ globals.css # Global styles (Tailwind)
├─ add-school/
│ └─ page.js # AddSchool form page
├─ schools/
│ └─ page.js # ShowSchools page
└─ api/
├─ AddSchool/
│ └─ route.js # API route for adding schools
└─ Schools/
└─ route.js # API route for fetching/deleting schools
lib/
└─ db.js # Database connection helper
>>>>>>> 7b68905 (Initial commit)
