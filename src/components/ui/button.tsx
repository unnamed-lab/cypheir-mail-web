"use client";

export default function button({ className, type, customStyles, children }) {
  return (
    <button
      type={!type ? "button" : type}
      className={`btn  ${className}`}
      style={customStyles ? customStyles : {}}
    >
      {children}
    </button>
  );
}
