"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";

const ButtonInTable = ({buttonText, size, popupMessage}) => {
  let buttonSize = "h-12 w-28"; // Default size
  if (size == "small") {
    buttonSize = "h-8 w-20"; // Small size
  } else if (size == "large") {
    buttonSize = "h-16 w-36";
  }

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="mx-2 my-8 rounded-3xl border border-black button_bg ${buttonSize} transition-all font-inter
    hover:bg-yellow hover:text-white text-center text-xl flex items-center justify-center">
        <button onClick={handleClick}>{buttonText}</button>
        {showPopup && <Popup message={popupMessage} />}
    </div>
    
  )
}

export default ButtonInTable;