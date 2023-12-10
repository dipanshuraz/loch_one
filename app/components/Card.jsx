import React from "react";

export const CardBase = ({ children }) => {
  return (
    <div className="rounded-lg bg-white shadow-dropdown p-4 mb-4 mx-2">
      {children}
    </div>
  );
};

function Card({ title, subtitle, description }) {
  return (
    <CardBase>
      <div className="flex justify-start items-end mb-2 w-80">
        <h2 className="button-label">{title}</h2>
        <h3 className="caption text-[#96979A] pl-2">{subtitle}</h3>
      </div>
      <p className="body text-[#1D2129] pr-4 pt-4">{description}</p>
    </CardBase>
  );
}

export default Card;
