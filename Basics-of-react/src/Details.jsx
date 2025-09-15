/** @format */
import RenderI from "./RenderI";
import RenderN from "./RenderN";
import RenderA from "./RenderA";
import RenderR from "./RenderR";

export default function Details({ name, amount, rating, imageUrl }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column", // stack content inside the card
				width: "250px", // fixed card width
				border: "1px solid #ccc",
				borderRadius: "8px",
				padding: "10px",
			}}
		>
			<RenderI url={imageUrl} />
			<RenderN name={name} />
			<RenderA amount={amount} />
			<RenderR rating={rating} />
		</div>
	);
}
