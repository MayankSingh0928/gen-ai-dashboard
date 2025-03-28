Gen AI Dashboard

🚀 Overview

Gen AI Dashboard is a React-based Data Query Dashboard that allows non-technical users to ask complex business questions in natural language and receive instant, AI-generated insights. The project is built using React, Redux, Tailwind CSS, and Vite for a seamless and efficient user experience.

🌟 Features

Natural Language Query Input: Users can type business-related queries to fetch insights.

Query History: Keeps track of user queries for easy reference.

Results Display: Presents AI-generated responses in an intuitive format.

State Management: Utilizes Redux Toolkit for efficient query state handling.

Mock Query Processing: Simulates AI query execution for demonstration purposes.

Responsive Design: Ensures optimal display on various devices.

🛠️ Tech Stack

Frontend: React.js (Vite)

State Management: Redux Toolkit

Styling: Tailwind CSS

Data Visualization: Recharts / Chart.js (future scope)

Deployment: Vercel / Netlify

📂 Project Structure

├── src

│   ├── components

│   │   ├── QueryInput.jsx

│   │   ├── QueryHistory.jsx

│   │   ├── QueryResults.jsx

│   ├── store

│   │   ├── querySlice.js

│   ├── App.jsx

│   ├── main.jsx

│   ├── index.css

├── public

├── vite.config.js

├── tailwind.config.js

├── package.json

├── README.md

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/MayankSingh0928/gen-ai-dashboard.git
cd gen-ai-dashboard

2️⃣ Install Dependencies

npm install

3️⃣ Run the Development Server

npm run dev

🔥 Deployment

The project is deployed at: https://gen-ai-dashboard1.onrender.com

📌 Approach Summary

1️⃣ Component Structure & State Management

Used Redux Toolkit for managing query states (loading, success, failure).

Implemented three main UI components:

QueryInput (handles user queries & dispatches actions)

QueryHistory (displays past queries)

QueryResults (shows query responses)

2️⃣ AI Query Simulation

Simulated AI query responses using setTimeout() in Redux actions.

Processed query input, stored in history, and displayed mock AI responses.

3️⃣ UI & Styling

Designed a minimalist interface with Tailwind CSS.

Integrated Vite for fast builds and efficient development.

4️⃣ Handling Errors & Edge Cases

Added loading states for better user experience.

Implemented error handling for query failures.

🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

📜 License

This project is open-source and available under the MIT License.

🔗 Connect with Me

GitHub: https://github.com/MayankSingh0928

LinkedIn: https://www.linkedin.com/in/mayanksingh28/
