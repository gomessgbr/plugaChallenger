import React, { useEffect, useState } from "react";
import { AppsCards, Cards } from "./components/AppsCards";
import { Pagination } from "./components/Pagination";
import Modal from "./components/Modal";
import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [itensPerPage, setItensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [itemClicked, setItemClicked] = useState({});

  const pages = Math.ceil(data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItem = data.slice(startIndex, endIndex);

  const matchNames = currentItem.filter(({ name }) => {
    return name.includes(search);
  });

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
      <div className="container">
        <h1 className="title">Desafio Pluga</h1>
        <input
          type="search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
          placeholder="Buscar"
          className="search"
        />
        <div className="container-apps">
          {matchNames.map((item) => (
            <AppsCards
              key={item.app_id}
              appIcon={item.icon}
              appId={item.app_id}
              appName={item.name}
              setItemClicked={() => {
                setItemClicked(item);
              }}
              setShowModal={() => {
                setShowModal(true);
              }}
            />
          ))}
        </div>
        <Pagination setCurrentPage={setCurrentPage} pages={pages} />
      </div>

      {showModal && (
        <Modal
          itemClicked={itemClicked}
          onClickEsc={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default App;
