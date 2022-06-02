import React from "react";

export function Cards({ appName, appLink, appIcon }) {
  return (
    <div>
      <div
        style={{
          display: "block",
          backgroundColor: "#01321A",
          width: 200,
          height: 200,
          justifyContent: "space-around",
        }}
      >
        <a href={appLink} style={{}}>
          <span>{appName}</span>
          <img src={appIcon} alt="Teste" />
        </a>
        {/* <button style={{ height: 200, width: 200 }}>
              <span>{item.name}</span>
              <img src={item.icon} alt="Teste" />
            </button> */}
      </div>
    </div>
  );
}
