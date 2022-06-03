import React from "react";
import "./styles.css";
export function AppsCards({
  appName,
  appIcon,
  setItemClicked,
  setShowModal,
  appId,
}) {
  return (
    <div className="container-app">
      <div key={appId} className="container-appsItens">
        <button
          className="app-button"
          onClick={() => {
            setItemClicked(setItemClicked);
            setShowModal(setShowModal);
          }}
        >
          <img src={appIcon} alt="Icone" />
          <span className="app-name">{appName}</span>
        </button>
      </div>
    </div>
  );
}
