import React, { useState } from "react";
import Jennie from "./Jennie";
import CreateJennie from "./CreateJennie";

function App() {
  const [jennie, setJennie] = useState([]);
  function addJennie(newJennie) {
    setJennie((prevJennie) => {
      return [...prevJennie, newJennie];
    });
  }
  function deleteNote(id) {
    setJennie((prevJennie) => {
      return prevJennie.filter((jennie, index) => {
        return index !== id;
      });
    });
  }
  console.log(jennie);
  return (
    <div>
      <div className="flex">
        <CreateJennie onAdd={addJennie} />
      </div>

      {jennie.map((jennie, index) => {
        return <Jennie key={index} id={index} onDelete={deleteNote} />;
      })}
    </div>
  );
}

export default App;
