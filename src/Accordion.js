import React, { useState } from 'react';
import './App.css';
import './Accordion.css';


function Accordion({ items }) {
   const [activeIndex, setActiveIndex] = useState(-1);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
   };
   return (
      <div>
         {items.map((item, index) => (
            <div key={item.title}>
               <button onClick={() =>handleClick(index)}>{item.title}</button>
               {index === activeIndex && <p>{item.content}</p>}
            </div>
         ))}
      </div>
   );
}
export default Accordion;