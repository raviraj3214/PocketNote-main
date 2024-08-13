import React, { useState, useEffect, useRef } from 'react';
import "./MobilePopup.css";

function MobilePopup({ onClose, groupNamesParent, setGroupNamesParent }) {
  const defaultColor = "rgb(179, 139, 250)"; // Default to the first color
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState(defaultColor);
  const modalRef = useRef(null);

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="mobile__popup">
      <div ref={modalRef} className="mobile__popup__content">
        <div className="mobile__popup__title">Create New Group</div>
        <div className="mobile__popup__input">
          <span>Group Name</span>
          <input
            value={groupName}
            onChange={handleGroupName}
            type="text"
            placeholder="Enter Group Name..."
          />
        </div>
        <div className="mobile__popup__color__input">
          <span>Choose colour</span>
          <div className="mobile__popup__color__input__color">
            <div
              className={`mobile__popup__color__input__color__1 ${
                bgColor === defaultColor ? `highlight` : null
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`mobile__popup__color__input__color__2 ${
                bgColor === "rgb(255, 121, 242)" ? `highlight` : null
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`mobile__popup__color__input__color__3 ${
                bgColor === "rgb(67, 230, 252)" ? `highlight` : null
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`mobile__popup__color__input__color__4 ${
                bgColor === "rgb(241, 149, 118)" ? `highlight` : null
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`mobile__popup__color__input__color__5 ${
                bgColor === "rgb(0, 71, 255)" ? `highlight` : null
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`mobile__popup__color__input__color__6 ${
                bgColor === "rgb(102, 145, 255)" ? `highlight` : null
              }`}
              onClick={handleColor}
            ></div>
          </div>
        </div>
        <div className="mobile__popup__close">
          <button onClick={saveName} disabled={groupName.length === 0}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobilePopup;




