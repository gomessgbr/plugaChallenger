import React from "react";
import "./styles.css";

export function Pagination({ pages, setCurrentPage }) {
  return (
    <>
      <div className="containerPagination">
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              onClick={(event) => setCurrentPage(Number(event.target.value))}
              className="btn"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
}
