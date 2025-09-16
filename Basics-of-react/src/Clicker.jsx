/** @format */

export default function Clicker({ message, buttontext }) {
	function print() {
		console.log(message);
	}
	return <button onClick={print}>{buttontext}</button>;
}
