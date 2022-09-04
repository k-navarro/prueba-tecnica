import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import NuevaPersona from "./components/NuevaPersona";
import Personas from "./components/Personas";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store";

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