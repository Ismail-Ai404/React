/** @format */

export default function Die({ numSide }) {
	const roll = Math.floor(Math.random() * numSide) + 1;
	return (
		<h2>
			{numSide}-sided Die roll: {roll}
		</h2>
	);
}
