import React, { Fragment, useEffect } from "react";
import Header from "./components/Header";
import Personas from "./components/Personas";
import NuevaPersona from "./components/NuevaPersona";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";


function App() {
  
  
  return (
    <Fragment>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <Provider store={store}>
          <Header />

          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Personas />} />
              <Route path="/persona/nuevo" element={<NuevaPersona />} />
              <Route path="/persona/editar/:id" element={<NuevaPersona/>} />
            </Routes>
          </div>
        </Provider>
      </Router>
    </Fragment>
  );
}

export default App;
