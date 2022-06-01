import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleTeste = () => {};

  useEffect(() => {
    fetch("https://pluga.co/ferramentas_search.json")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  return (
    <>
      {data.map((item) => (
        <div style={{ height: 200, width: 200 }}>
          <a href={item.link}>
            <text>{item.name}</text>
            <img src={item.icon} alt="Teste" />
          </a>
        </div>
      ))}
    </>
  );
}

export default App;
