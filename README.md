# ClickMe Game Project

## Description
This is a simple and interactive **ClickMe Game** built using HTML, CSS, and JavaScript. The goal of the game is to pop bubbles with the correct number matching the target number before the timer runs out. 

## Features
- Dynamic bubble generation with random numbers
- Countdown timer for a challenging gameplay experience
- Score counter to track player progress
- Target number that changes dynamically
- Game over message displayed when time runs out

## Technologies Used
- HTML (for the structure)
- CSS (for styling and layout)
- JavaScript (for game logic and interactivity)

## File Structure
```
/ (root)
│── index.html   # Main HTML structure
│── style.css    # Styles for the game
│── script.js    # JavaScript for game logic
```

## How to Play
1. Open `index.html` in a browser.
2. The game starts with a **60-second timer**.
3. A **target number** is displayed at the top.
4. Click on the bubbles that match the target number.
5. Each correct bubble increases your **score by 10 points**.
6. A new target number appears after every correct selection.
7. The game ends when the **timer reaches 0**.
8. A "Game Over" message will be displayed at the end.

## Game Mechanics
- **Bubble Generation:** Random numbers (0-9) are assigned to 160 bubbles.
- **Timer:** Countdown starts from 60 seconds and decreases every second.
- **Score Calculation:** Each correct selection adds 10 points to the score.
- **Game Over Condition:** When time reaches 0, bubbles disappear, and a message is shown.

## Future Enhancements
- Add different difficulty levels (e.g., easy, medium, hard)
- Introduce power-ups or bonus points
- Include sound effects for better user engagement
- Make the game responsive for mobile devices

## License
This project is open-source and free to use.

