"use client";
import React from "react";

const page = () => {
  function handleclick() {
    console.log("hi");
  }
  return (
    <div>
      <button onClick={() => handleclick()}>Add task</button>
    </div>
  );
};

export default page;
