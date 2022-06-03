import React from "react";

import "./styles.css";
export default function Modal({ itemClicked, onClickEsc }) {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-icons">
            <img src={itemClicked.icon} alt="logo app" />
          </div>
          <div className="modal-txt">
            <span className=".modal-name">{itemClicked.name}</span>

            <a href={itemClicked.link} className="btn-acess">
              Acessar
            </a>
          </div>
        </div>

        <div className="esc">
          <button className="xbtn" onClick={onClickEsc}>
            x
          </button>
        </div>
      </div>
    </>
  );
}
