import React, { forwardRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const AccordionMenu = forwardRef(function AccordionMenu(
  { items, getFilters },
  ref
) {
  const allOptions = {};

  for (const item of items) {
    allOptions[item.title] = [];
  }

  const [openIndex, setOpenIndex] = useState(0);
  const [allCheckedOptions, setAllCheckedOptions] = useState(allOptions);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  const handleCheckboxChange = (event, item) => {
    const { checked, value } = event.target;
  
    setAllCheckedOptions((prevCheckedOptions) => {
      const updatedCheckedOptions = { ...prevCheckedOptions };
      if (checked) {
        if (item.type === 'checkbox') {
          updatedCheckedOptions[item.title] = [
            ...updatedCheckedOptions[item.title],
            value,
          ];
        } else {
          updatedCheckedOptions[item.title] = [value];
        }
      } else {
        updatedCheckedOptions[item.title] = updatedCheckedOptions[
          item.title
        ].filter((opt) => opt !== value);
      }
      getFilters(updatedCheckedOptions);
      return updatedCheckedOptions;
    });
  };
  

  const handleCheckboxChangeByParent = (value) => {
    setAllCheckedOptions((prevCheckedOptions) => {
      const updatedCheckedOptions = { ...prevCheckedOptions };
      let title;

      for (const key in updatedCheckedOptions) {
        if (updatedCheckedOptions[key].includes(value)) title = key;
      }

      updatedCheckedOptions[title] = updatedCheckedOptions[title].filter(
        (opt) => opt !== value
      );

      getFilters(updatedCheckedOptions);
      return updatedCheckedOptions;
    });
  };

  const removeAllFilters = () => {
    setAllCheckedOptions((prevCheckedOptions) => {
      const updatedCheckedOptions = { ...prevCheckedOptions };

      for (const key in updatedCheckedOptions) updatedCheckedOptions[key] = [];

      getFilters(updatedCheckedOptions);
      return updatedCheckedOptions;
    });
  };

  React.useImperativeHandle(ref, () => ({
    handleCheckboxChangeByParent,
    removeAllFilters,
  }));

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="accordion-item mt-4">
          <button
            className="accordion-header font-semibold text-white text-lg flex justify-between w-full"
            onClick={() => handleItemClick(index)}
          >
            <p>{item.title}</p>
            <p>{openIndex === index ? <FaAngleUp /> : <FaAngleDown />}</p>
          </button>
          <CSSTransition
            in={openIndex === index}
            timeout={300}
            classNames="accordion-content"
            unmountOnExit
          >
            <div className="accordion-content">
              <form>
                <ul className="text-white font-semibold text-[18px]">
                  {item.menu.map((opt) => (
                    <li className="flex gap-3 ml-3 mt-4 items-center" key={opt}>
                      <input
                        type={item.type === 'radio' ? 'radio' : 'checkbox'}
                        value={opt}
                        className="h-5 w-5"
                        onChange={(event) => handleCheckboxChange(event, item)}
                        checked={allCheckedOptions[item.title].includes(opt)}
                      />
                      {opt}
                    </li>
                  ))}
                </ul>
              </form>
            </div>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
});

export default AccordionMenu;
