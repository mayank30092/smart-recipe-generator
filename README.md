# 🍳 Smart Recipe Generator

A modern React-based web application that generates recipes based on available ingredients (text or image input), dietary preferences, and smart filtering.
Built as part of a Software Engineering technical assessment

---

## 🚀 Live Demo
🔗 Hosted URL: https://smart-recipe-generator-amber.vercel.app

📂 GitHub Repository: https://github.com/mayank30092/smart-recipe-generator

---

## ✨ Features
- 🔍 Search recipes by ingredients
- 🧠 Smart filtering & sorting system
- ❤️ Add recipes to favourites
- 🌾 Gluten-free recipe indicator
- 📱 Fully responsive layout (mobile-friendly)
- ⚡ Fast performance with optimized state management
- 📷 Ingredient classification by image
---
## 🛠 Tech Stack
### Frontend
- React.js
- React Router
- Tailwind CSS
- Local Storage

### AI Integration
Clarifai API (Image Classification) 

### Hosting
Deployed on Vercel

---

## 📂 Project Structure

```
smart-recipe-generator/
│
├── src/ # React frontend
├── server/ # Express backend
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/smart-recipe-generator.git
cd smart-recipe-generator
```
---

### 2️⃣ Setup Frontend

```
npm install
npm run dev
```
---

### 3️⃣ Setup Backend

```
cd server
npm install
node server.js
```
---

## 🔐 Environment Variables

Create a `.env` file inside the server folder:

```
PORT=8000
YOUR_API_KEY=your_api_key_here
```

---

## 🤖 Ingredient Recognition (Clarifai)
- User uploads an ingredient image.
- Image is sent to Clarifai API.
- Detected food labels are extracted.
- Matched with internal ingredient database.
- Used in recipe matching algorithm.
---

## 📊 Recipe Database
- 20+ predefined recipes
- Multiple cuisines
- Each recipe includes:
  - Ingredients
  - Instructions
  - Nutritional information
  - Difficulty level
  - Cooking time
  - Dietary category

---

## 💡 Future Improvements

- AI-based recipe recommendations
- User authentication system
- Save custom recipes
- Meal planning feature
- Dark mode

---

## 👨‍💻 Author

Mayank Mittal  
Frontend Developer | Full-Stack Enthusiast

---

## 📄 License

This project is built for educational and assignment purposes.
