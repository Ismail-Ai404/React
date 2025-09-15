/** @format */
import Details from "./Details";

export default function Place({ info }) {
	return (
		<div
			style={{
				display: "flex", // align children in a row
				flexWrap: "wrap", // wrap to next line if needed
				gap: "20px", // space between cards
			}}
		>
			{info.map((item) => (
				<Details key={item.id} {...item} />
			))}
		</div>
	);
}
