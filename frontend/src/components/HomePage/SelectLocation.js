import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

// States
import locationAtom from "recoil/location";

// Components
import { Text } from "components/Presentation";
import { IoIosArrowDown } from "react-icons/io";

// Data
import { stateNames } from "data/data";
import { formatStateName } from "utils/dataHelpers";

function SelectLocation() {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [selectedLocation, setSelectedLocation] = useState(
    location.length ? location : "Select A State"
  );
  const [isRedirected, setIsRedirected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLocation !== "Select A State") {
      setLocation(selectedLocation);
      setIsRedirected(true);
    }
  };

  const handleSelection = (name) => {
    setSelectedLocation(name);
    setIsExpanded(false);
  };

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  if (isRedirected) {
    return <Redirect push to={`locations/${selectedLocation}`} />;
  } else {
    return (
      <form onSubmit={handleSubmit} className="flex">
        <div className="z-40 mr-4">
          <div
            onClick={handleExpand}
            className="h-14 w-60 flex items-center justify-between px-4 bg-gray-100"
          >
            <Text type="p" className="font-bold mr-8">
              {formatStateName(selectedLocation)}
            </Text>
            <IoIosArrowDown />
          </div>
          {isExpanded && (
            <div className="absolute w-60 h-60 overflow-y-scroll bg-gray-100 ">
              <ul className="list-none">
                {stateNames.map((name) => {
                  return (
                    <li
                      onClick={() => handleSelection(name)}
                      className="w-full px-4 py-2 hover:bg-gray-200"
                    >
                      <Text type="p" className="font-bold mr-8">
                        {formatStateName(name)}
                      </Text>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default SelectLocation;
