/** @format */
import { useState } from "react";
import "./Box.css";

export default function Box({ pallete }) {
	function rand() {
		return Math.floor(Math.random() * pallete.length);
	}

	const [design, setDesign] = useState(pallete[rand()]);

	function changeColor() {
		setDesign(pallete[rand()]);
	}

	return (
		<div className="container">
			<div
				onClick={changeColor}
				style={{
					backgroundColor: design,
					width: "200px",
					height: "200px",
					borderRadius: "12px",
					cursor: "pointer",
					display: "flex",
				}}
			></div>
		</div>
	);
}
