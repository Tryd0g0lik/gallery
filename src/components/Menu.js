import React from "react";


export default function MenuTop(prop) {
  const menu = prop.menu;
  return (
    <nav>
      {
        menu.map(item => (
          <div onClick={item => { console.log(item) }} key={item}><span>{item}</span></div>
        ))
      }
    </nav>
  )
}
