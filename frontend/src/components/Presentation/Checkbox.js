import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const Checkbox = ({ value, checked, handleClick, className }) => {
  if (checked) {
    return (
      <span className={className} onClick={handleClick}>
        <MdCheckBox className="text-3xl mt-1 text-secondary" />
        <input type="checkbox" className="hidden" defaultChecked={checked} />
      </span>
    );
  } else {
    return (
      <span className={className} onClick={handleClick}>
        <MdCheckBoxOutlineBlank className="text-3xl mt-1 text-gray-300" />
        <input type="checkbox" className="hidden" defaultChecked={checked} />
      </span>
    );
  }
};

export default Checkbox;
