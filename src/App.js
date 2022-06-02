import React, { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
function App() {
  let tamanhoPage = 12;
  let page = 0;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [itensPerPage, setItensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItem = data.slice(startIndex, endIndex);

  const searchedNames = currentItem.filter(({ name }) => {
    return name.includes(search);
  });

  const sliceData = () => {};

  const fetchData = () => {
    fetch("https://pluga.co/ferramentas_search.json")
      .then((response) => response.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              onClick={(event) => setCurrentPage(Number(event.target.value))}
            >
              {index}
            </button>
          );
        })}
      </div>
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
          justifyContent: "space-between",
        }}
      >
        {searchedNames.map((item) => (
          <Cards
            appIcon={item.icon}
            appLink={item.link}
            appName={item.name}
            key={item.app_id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
