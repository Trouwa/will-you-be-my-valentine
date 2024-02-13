"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
    "No",
    "Are you sure love? :(",
    "Please my love",
    "Why not my love??",
    "ik Im not there but still :c",
    "PLSPLSPLSPLSPLSPLSPLSPLSPLSPLS",
    "You broke my heart...",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://imgur.com/a/U28jEOv" />
          <div className="my-4 text-4xl font-bold">Thank you my love, you make me so happy!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://imgur.com/a/CMQIYuf"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine Nathania?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
