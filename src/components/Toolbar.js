
import React, { useState } from 'react';
import MenuTop from './Menu';
import GalleryFC from './galerey';

export default function Toolbar_(prop) {
  const { filters, images } = prop.data;
  const [active, setActive] = useState("ALL");
  let result = [];

  const toggle = (currentState) => {
    setActive(currentState)
  }

  const topmenu = { topmenu: filters, toggle: toggle }
  return (
    <>

      <MenuTop menu={topmenu} />

      {
        /**
         * От представленного ниже фильтра на экране появляется число 1
         */
        active !== "ALL" ? (
          result.unshift(images.filter(item => item.category === active))
        ) : (
          result.unshift(images)
        )

      }
      <GalleryFC images={result[0]} />



    </>
  )

}
