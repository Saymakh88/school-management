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


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YourUsername/school-management.git
cd school-management

## Set up MySQL database

Create a database named schooldb

Create a table schools with columns:
id, name, address, city, state, contact, email_id, image

Configure database connection

Update lib/db.js with your MySQL credentials

Run the project

>>>>>>> 7b68905 (Initial commit)
