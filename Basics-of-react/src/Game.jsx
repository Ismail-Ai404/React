/** @format */

export default function Game() {
	const labels = ["AA", "BB", "CC"];

	// generate 3 random elements
	const element = Array.from({ length: 3 }, () => {
		const randIndex = Math.floor(Math.random() * labels.length);
		return labels[randIndex];
	});

	// check win condition
	const isWin = element[0] === element[1] && element[1] === element[2];

	// color style for result message
	const color = { color: isWin ? "blue" : "red" };

	return (
		<div>
			{element.map((e, idx) => (
				<span
					key={idx}
					style={{
						color: isWin ? "magenta" : "purple", // each slot label color
						fontSize: "80px", // correct inline style
						margin: "0 8px",
					}}
				>
					{e}
				</span>
			))}
			{isWin && <h2 style={color}>Congrats</h2>}
			<h3 style={color}>{isWin ? "You win" : "Take the L"}</h3>
		</div>
	);
}
