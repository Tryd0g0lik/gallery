import React from "react";

export default function GalleryFC(prop) {
  const images = prop.images;
	return (
    <div className="container">

      <div className="image-gallery grid-container">
        {images.map(item => (
          <div key={item.img} className="column">
            <img src={item.img} />
					</div>
				))}
      </div>
		</div>
	)
}
