import React from "react";
import "./App.css";
import { MyForm } from "./MyForm";

const App: React.FC = () => {
  return (
    <header className="App-header">
      <div style={{ textAlign: "center" }}>
        <MyForm
          onSubmit={({ email, firstName, lastName }) =>
            console.log(firstName, lastName, email)
          }
        />
      </div>
    </header>
  );
};

export default App;
