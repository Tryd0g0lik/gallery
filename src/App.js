import React from 'react';
// import Portfolio from './components/Portfolio';
import './App.css';
import GalleryFC from './components/galerey';
// import { filters, q } from './components/date'
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

const images = [n_200, codystretch, dia, emi_haze, mon, place200_1, place200_2, place200_3, place, the_ninetys, transmission, triangle, triangle_350_1, triangle_350];
function AppFC() {

  return (
    // <Portfolio filters={filters} projects={projects} />
    <GalleryFC images={images} />
  )

}

export default AppFC;
