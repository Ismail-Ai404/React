/** @format */
import { useState } from "react";

export default function Players({ scoreEnd, numPlayers }) {
	// initialize players with 0 scores
	const [scores, setScores] = useState(new Array(numPlayers).fill(0));
	const [winner, setWinner] = useState(null); // store winner index

	// increment score of a specific player
	function incrementScore(index) {
		// stop game if there's already a winner
		if (winner !== null) return;

		setScores((prevScores) => {
			const newScores = prevScores.map((s, i) =>
				i === index && s < scoreEnd ? s + 1 : s
			);

			// check if this player reached the scoreEnd
			if (newScores[index] === scoreEnd) {
				setWinner(index);
			}

			return newScores;
		});
	}

	// reset all scores to 0
	function reset() {
		setScores(new Array(numPlayers).fill(0));
		setWinner(null);
	}

	return (
		<>
			<ul>
				{scores.map((score, index) => (
					<li key={index}>
						Player {index + 1}{" "}
						<span>
							Score: {score}{" "}
							<button
								onClick={() => incrementScore(index)}
							>
								+1
							</button>
						</span>
						{/* show winning message only for the player who reached scoreEnd */}
						{winner === index && (
							<strong>
								{" "}
								🎉 Player {index + 1} Wins! 🎉{" "}
							</strong>
						)}
					</li>
				))}
			</ul>
			<button onClick={reset}>Reset</button>
		</>
	);
}
