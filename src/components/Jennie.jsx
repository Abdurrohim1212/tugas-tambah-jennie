import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

function Jennie(props) {
  function hanldeDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>Jennie {props.id + 1}</h1>
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
      <button onClick={hanldeDelete}>Hapus Jennie</button>
    </div>
  );
}

export default Jennie;
