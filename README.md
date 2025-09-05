🧠 Memory Game

A simple Memory Card Game built using React. The goal is to flip two cards at a time and match all pairs in the least amount of time.

<!-- (Optional: Add a screenshot of your UI) -->

🎯 Features

🎴 16 Cards arranged in a 4×4 grid.

❓ All cards are hidden at the start.

🖱️ Click a card → flip and reveal its value.

🔄 Match two cards → they stay visible, else flip back.

⏱️ Timer shows how long you’ve played.

🏆 Best score (lowest time) is saved in localStorage.

🔁 Restart button to reset the game anytime.

📜 Rules of the Game

At the start, all 16 cards are closed (?).

Each number appears exactly twice on the grid.

Click two cards:

✅ If they match → stay open.

❌ If not → flip back after a short delay.

Continue until all pairs are matched.

The time taken is your score.

Your best score is stored in the browser.

⚙️ Installation & Setup

⚠️ Before running, make sure you download node_modules (by installing dependencies).

Clone this repository

git clone https://github.com/your-username/memory-game.git
cd memory-game


Install dependencies (this will download node_modules)

npm install


Start the app

npm start


Open in your browser:

http://localhost:3000

📂 Project Structure
memory-game/
│── src/
│   ├── MemoryGame.jsx   # Main game logic
│   ├── MemoryGame.css   # Styles
│   └── index.js         # React entry point
│
│── public/
│   └── index.html
│
│── package.json
│── README.md

📸 Example Gameplay

Start: all cards are hidden.

Flip → reveal two cards.

Match or mismatch logic applied.

Continue until all pairs are matched.

🚀 Future Improvements

Use images or emojis instead of numbers.

Add difficulty levels (easy, medium, hard).

Add sound effects for flips/matches.

Mobile responsive design.

👨‍💻 Author

Babulu Digamarti
🎓 AI & Data Science Student | 💻 Full Stack Developer

✨ Enjoy the game and test your memory skills!