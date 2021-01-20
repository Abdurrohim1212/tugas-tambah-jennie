import React, { useState } from "react";

import "antd/dist/antd.css";
import { Card } from "antd";

function CreateJennie(props) {
  function handleJennie() {
    props.onAdd();
  }

  return (
    <div>
      <h1>Tambah Jennie</h1>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={
              "https://filmdaily.co/wp-content/uploads/2020/03/Blackpink-Jennie-lede.jpg"
            }
          />
        }
      ></Card>

      <button onClick={handleJennie}>Tambah Jennie</button>
    </div>
  );
}

export default CreateJennie;
