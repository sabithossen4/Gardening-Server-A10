#  Gardening Community & Resource Hub

A full-stack MERN application for garden lovers! Share tips, discover expert gardeners, ask plant care questions, and explore upcoming gardening events.


---

## 🔗 Live Site

👉 [Live Website](https://assignment-10-server-tau-peach.vercel.app/)


---

## ✨ Key Features

- 🔐 **Authentication (Firebase)**
  - Email/password & Google login system
  - Password strength validation on register
  - SweetAlert/toast notifications for feedback
  - User photo, tooltip name & logout from navbar

- 🌱 **CRUD Tips System**
  - Add, browse, edit, delete garden tips
  - Support for public/hidden tips
  - Dynamic difficulty, category, image URL, etc.
  - Tip details page with like functionality

- 🧑‍🌾 **Explore Gardeners**
  - See all gardener profiles with details: age, experience, tips count
  - Dynamic card view with responsive design

- 🏡 **Home Page Sections**
  - 🌄 Banner slider with 3 gardening events (SwiperJS)
  - 👩‍🌾 Featured Active Gardeners (6 shown from DB)
  - 📈 Top Trending Tips based on like count
  - 📝 Two additional custom gardening sections

- 🎯 **Challenge Features**
  - 🔘 Dark/Light theme toggle (daisyUI)
  - 🧠 Tip filtering by difficulty (easy/medium/hard)
  - 👍 Like button updates `totalLiked` in DB
  - 🔥 Integrations:
    - Lottie React (animated visuals)
    - React Awesome Reveal (scroll animations)
    - React Tooltip (hover info)
    - React Simple Typewriter (animated headers)

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, DaisyUI, React Router
- **Backend:** Node.js, Express.js, MongoDB Atlas
- **Auth & Hosting:** Firebase Authentication, Firebase Hosting
- **Other Libraries:** SwiperJS, Lottie React, Toastify, SweetAlert, Typewriter, Tooltip, Awesome Reveal

---

## 📱 Responsiveness

✅ 100% Responsive  
✅ Mobile-first design  
✅ Smooth experience on mobile, tablet, and desktop

---

## 🧠 Environment & Deployment

- **Client Hosted on:** Firebase  
- **Server Hosted on:** Vercel  
- **.env File Includes:**
  - Firebase Config
  - MongoDB URI
- ✅ All environment variables are secured and **not pushed to GitHub**

---

## 🧪 Extra Features

- ✅ Custom 404 Page
- ✅ Loader Spinner while fetching data
- ✅ SweetAlert confirmation before deletion
- ✅ Reload-safe private routes (using Firebase `onAuthStateChanged`)

---

## 🧭 Project Structure

