import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sales from "./Sales";
import CreateSale from "./CreateSale";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sales />}></Route>
          <Route path="/create" element={<CreateSale />}></Route>
          <Route path="/update" element={<UpdateSale />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
