/** @format */

export default function RenderI({ url }) {
	return (
		<img
			src={url}
			alt="Place"
			style={{ width: "200px", height: "150px", objectFit: "cover" }}
		/>
	);
}
