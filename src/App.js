import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    fetch("https://pluga.co/ferramentas_search.json")
      .then((response) => response.json())
      .then((response) => setData(response));
  };
  const searchedNames = data.filter(({ name }) => {
    return name.includes(search);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <input
        type="search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        placeholder="Buscar"
      />
      <div
        style={{
          backgroundColor: "blue",
        }}
      >
        {searchedNames.map((item) => (
          <div
            style={{
              maxHeight: 200,
              maxWidth: 300,
              backgroundColor: "#01321A",
              justifyContent: "space-around",
            }}
            key={item.app_id}
          >
            <a href={item.link} style={{}}>
              <p>{item.name}</p>
              <img src={item.icon} alt="Teste" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
