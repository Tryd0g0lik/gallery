import React, { StrictMode } from 'react';
import './App.css';
import GalleryFC from './components/Galerey';
import n_200 from "./img/d_200.jpg";
import codystretch from "./img/codystretch.jpg";
import dia from "./img/dia.jpg";
import emi_haze from "./img/emi_haze.jpg";
import mon from "./img/mon.jpg";
import place200_1 from "./img/place200x290_1.png";
import place200_2 from "./img/place200x290_2.png";
import place200_3 from "./img/place200x290_3.png";
import place from "./img/place200x290.png";
import the_ninetys from "./img/the_ninetys_brand.jpg";
import transmission from "./img/transmission.jpg";
import triangle from "./img/Triangle_003.jpg";
import triangle_350_1 from "./img/Triangle_350x197_1.jpg";
import triangle_350 from "./img/Triangle_350x197.jpg";
import MenuTop from './components/Menu';
import Toolbar from './components/toolbar';

const topMenu = ["ALL", "Websites", "Flayers", "Busines Carde"];
const images = [
  { img: n_200, category: "Websites" },
  { img: codystretch, category: "Flayers" },
  { img: dia, category: "Busines Carde" },
  { img: emi_haze, category: "Websites" },
  { img: mon, category: "Flayers" },
  { img: place200_1, category: "Busines Carde" },
  { img: place200_2, category: "Websites" },
  { img: place200_3, category: "Flayers" },
  { img: place, category: "Busines Carde" },
  { img: the_ninetys, category: "Websites" },
  { img: transmission, category: "Flayers" },
  { img: triangle, category: "Busines Carde" },
  { img: triangle_350_1, category: "Flayers" },
  { img: triangle_350, category: "Websites" }];

function AppFC() {
  const menu = { fun: MenuTop, menu: topMenu };
  return (
    <>
      <StrictMode>
        <MenuTop menu={topMenu} />

        <GalleryFC images={images} />
      </StrictMode>
    </>
  )

}

export default AppFC;
