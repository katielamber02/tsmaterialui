import React from "react";
import "./App.css";
import MyForm from "./MyForm";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm onSubmit={() => console.log("onsubmit")} />
    </div>
  );
};

export default App;
