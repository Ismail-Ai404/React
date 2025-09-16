/** @format */
import Box from "./Box";

export default function Boxes({ colorArr }) {
	return (
		<div style={{ display: "flex" }}>
			<Box pallete={colorArr} />
			<Box pallete={colorArr} />
			<Box pallete={colorArr} />
			<Box pallete={colorArr} />
			<Box pallete={colorArr} />
			<Box pallete={colorArr} />
			<Box pallete={colorArr} />
			<Box pallete={colorArr} />
		</div>
	);
}
