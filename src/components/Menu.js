import React from "react";


export default function MenuTop(prop) {
  const { topmenu, toggle } = prop.menu;
  return (
    <nav>
      {
        topmenu.map(item => (
          <div onClick={(item) => {
            toggle(item.target.innerHTML);
          }} key={item.name}><span>{item.name}</span></div>
        ))
      }
    </nav>
  )
}
