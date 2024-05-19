import React from "react";

export default function Child(props) {
  return (
    <div>
      <h1>{props.name} AOA</h1>
      <h1>{props.age}</h1>
    </div>
  );
}
