import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function refreshPage() {
  window.location.reload(false);
}

function App() {
  const [person, setPerson] = useState({});
  useEffect(() => {
    const url = "https://randomuser.me/api/";
    axios
      .get(url)
      .then(({ data }) => setPerson(data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card">
      <div className="image">
        <img src={person.picture?.large} />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            {`${person.name?.first} 
        ${person.name?.last}`}
          </h2>
          <h3>{`Pais:  ${person.location?.country}`}</h3>
          <h3>{`Ciudad: ${person.location?.city}`}</h3>
          <div className="button">
            <button
              type="button"
              className="insideButton"
              onClick={refreshPage}
            >
              Random Person
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
