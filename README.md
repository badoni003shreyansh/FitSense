# 🏋️‍♂️ TrainWise – AI-Powered Fitness Schedule Generator

**TrainWise** is a full-stack web application that generates personalized fitness schedules using **Gemini AI**, tailored to user goals, time availability, and workout preferences. Designed for both beginners and regular gym-goers, TrainWise makes your fitness planning smarter, faster, and fully customized.

---

## ✨ Features

- 🤖 **AI-Generated Fitness Plans** via Gemini AI
- 🧠 Personalized scheduling based on user inputs
- 🔐 User Authentication (Signup/Login) with Firebase Auth
- 📦 Real-time data storage using Firebase Firestore
- 📝 Input forms handled using React Hook Form with live validation
- 📄 AI responses formatted using React Markdown
- 🎨 Fully responsive and accessible UI styled with TailwindCSS

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS, React Hook Form, React Markdown
- **Backend/AI**: Gemini AI API
- **Auth & Database**: Firebase (Auth + Firestore)
- **Deployment**: Vercel (or any hosting platform of your choice)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/trainwise.git
cd trainwise
npm install
```
### 2. Create a <code>.env</code> file in the root directory and add:
<code>VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key</code>

### 3. Run the app locally
```bash
npm run dev
```

## Author
Shreyansh Badoni | Btech CSE@LNMIIT



