import { useEffect, useState } from "react";
import TotalStarships from "./components/TotalStarhips/TotalStarships";
import { Starships } from "./data/types";
import { ApiResponse } from "./hooks/types";
import getShips from "./hooks/useApi";

const App = (): JSX.Element => {
  const [totalStarships, setTotalStarships] = useState<number>(0);
  const starships: Starships = [];

  getShips(starships, 1);

  console.log(starships);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_URL_API}`);
      const responseApi: ApiResponse = await response.json();
      setTotalStarships(responseApi.count);
    })();
  }, []);

  return (
    <div className="app">
      <div id="background-container">
        <header id="header-title">Star Wars Test</header>
        <main id="main-container">
          <h2>Starships:</h2>
          <p id="total-ships">
            Total ships: <TotalStarships totalStarships={totalStarships} />
          </p>
          <h2>Starships by class: </h2>
        </main>
      </div>
    </div>
  );
};

export default App;
