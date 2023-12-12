import React from "react";

export default function GalleryFC(prop) {
	const image = prop.images;
	return (
    <div className="container">

      <div className="image-gallery grid-container">
				{image.map(item => (
          <div key={item.img} className="column">
            <img src={item.img} />
					</div>
				))}
      </div>
		</div>
	)
}
