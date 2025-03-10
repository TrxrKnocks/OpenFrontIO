// Leaderboard.ts - Handles leaderboard logic and UI integration

class Leaderboard {
    constructor() {
        this.scores = this.loadScores();
    }

    // Load scores from local storage or default to empty
    loadScores() {
        return JSON.parse(localStorage.getItem('leaderboard')) || [];
    }

    // Save scores to local storage
    saveScores() {
        localStorage.setItem('leaderboard', JSON.stringify(this.scores));
    }

    // Add a new score
    addScore(player: string, score: number) {
        this.scores.push({ player, score });
        this.scores.sort((a, b) => b.score - a.score); // Sort descending
        this.scores = this.scores.slice(0, 10); // Keep top 10
        this.saveScores();
    }

    // Get top scores
    getTopScores() {
        return this.scores;
    }
}

const leaderboard = new Leaderboard();

export default leaderboard;
