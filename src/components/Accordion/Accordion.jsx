import React, { useState } from 'react';

function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item mt-3 bg-[#6e48aa] px-7 py-3 rounded-xl">
      <div className="accordion-title text-white flex justify-between " onClick={handleClick}>
        <span className='text-xl font-semibold'>{props.title}</span>
        {isOpen ? <span className='text-xl cursor-pointer hover:font-bold transition-all active:scale-75'>-</span> : <span className='text-xl cursor-pointer hover:font-bold transition-all active:scale-75'>+</span>}
      </div>
      {isOpen && <div className="accordion-content text-white font-semibold mt-3 text-base">{props.content}</div>}
    </div>
  );
}

export default AccordionItem;
