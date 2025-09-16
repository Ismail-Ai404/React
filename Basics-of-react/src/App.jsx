/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import Place from "./Place";
import Clicker from "./Clicker";
import Boxes from "./Boxes";

import Game from "./Game";
const data = [
	{
		id: 1,
		name: "Urban Loft in Downtown",
		amount: 950,
		rating: 4.2,
		imageUrl:
			"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
		location: "San Francisco, CA",
		type: "Apartment",
		bedrooms: 1,
		bathrooms: 1,
		size: "800 sq ft",
		description:
			"A stylish loft with exposed brick walls and large windows, offering a spacious living area in the heart of the city.",
	},
	{
		id: 2,
		name: "Suburban Family Home",
		amount: 2200,
		rating: 4.5,
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		location: "Austin, TX",
		type: "House",
		bedrooms: 3,
		bathrooms: 2,
		size: "2,000 sq ft",
		description:
			"A charming home featuring a large backyard, perfect for family gatherings and outdoor activities.",
	},
	{
		id: 3,
		name: "Beachfront Condo",
		amount: 1800,
		rating: 4.7,
		imageUrl:
			"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
		location: "Miami, FL",
		type: "Condo",
		bedrooms: 2,
		bathrooms: 2,
		size: "1,200 sq ft",
		description:
			"A modern condo with panoramic ocean views, offering luxury amenities and direct beach access.",
	},
	{
		id: 4,
		name: "Mountain Retreat Cabin",
		amount: 1500,
		rating: 4.6,
		imageUrl:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
		location: "Denver, CO",
		type: "Cabin",
		bedrooms: 2,
		bathrooms: 1,
		size: "1,000 sq ft",
		description:
			"A cozy cabin nestled in the mountains, ideal for weekend getaways and nature enthusiasts.",
	},
	{
		id: 5,
		name: "Luxury Penthouse Suite",
		amount: 3500,
		rating: 4.9,
		imageUrl:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
		location: "New York, NY",
		type: "Penthouse",
		bedrooms: 3,
		bathrooms: 3,
		size: "3,000 sq ft",
		description:
			"An opulent penthouse offering breathtaking city views, state-of-the-art appliances, and unparalleled luxury.",
	},
];
const palette = [
	"#FF6B6B", // Coral Red
	"#FFD93D", // Sun Yellow
	"#6BCB77", // Mint Green
	"#4D96FF", // Sky Blue
	"#845EC2", // Violet
	"#FF9671", // Soft Orange
	"#2C73D2", // Royal Blue
	"#008E9B", // Teal
	"#FF61A6", // Hot Pink
	"#00C9A7", // Turquoise

	"#FFB5A7", // Blush Pink
	"#FCD5CE", // Soft Peach
	"#F8EDEB", // Cream White
	"#CDB4DB", // Lilac Purple
	"#FFC8DD", // Light Pink
	"#B5E48C", // Lime Green
	"#99D98C", // Spring Green
	"#76C893", // Emerald Green
	"#34A0A4", // Deep Teal
	"#1A759F", // Ocean Blue
];

function App() {
	return (
		<>
			<Boxes colorArr={palette} />
			<Clicker message={"You clicked it"} buttontext={"Click me"} />
			<Clicker
				message={"nice"}
				buttontext={"Do something nice and Click me"}
			/>

			<Place info={data} />
		</>
	);
}
// function App() {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<>
// 			<div>
// 				<a href="https://vite.dev" target="_blank">
// 					<img src={viteLogo} className="logo" alt="Vite logo" />
// 				</a>
// 				<a href="https://react.dev" target="_blank">
// 					<img
// 						src={reactLogo}
// 						className="logo react"
// 						alt="React logo"
// 					/>
// 				</a>
// 			</div>
// 			<h1>Vite + React</h1>
// 			<Greeter person="Tom" />
// 			<Die numSide={20} />
// 			<Die numSide={6} />
// 			<Die numSide={10} />
// 			<Game />
// 			<Game />
// 			<Game />

// 			<div className="card">
// 				<button onClick={() => setCount((count) => count + 1)}>
// 					count is {count}
// 				</button>
// 				<p>
// 					Edit <code>src/App.jsx</code> and save to test HMR
// 				</p>
// 			</div>
// 			<p className="read-the-docs">
// 				Click on the Vite and React logos to learn more
// 			</p>
// 			<p>hahahahhahah</p>
// 		</>
// 	);
// }

export default App;
