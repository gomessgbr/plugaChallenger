import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://pluga.co/ferramentas_search.json")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  return <></>;
}

export default App;
