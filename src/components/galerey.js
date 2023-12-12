import React from "react";

export default function GalleryFC(prop) {
	const image = prop.images;
	return (
		<div class="container">

			<div class="image-gallery grid-container">
				{image.map(item => (
					<div key={item} class="column">

						<img src={item} />

					</div>
				))}
			</div>

		</div>
	)
}
