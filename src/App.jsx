import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./views/authcontext/AuthContext.jsx";
import Index from "./views/Index.jsx";

function App() {
  const {login} = React.useContext(AuthContext);

  return (
    <Routes>
        <Route index path="/" element={<Index />} />
        {/* <Route path="/home" element={(!login) ? <Navigate replace to="/" /> : <HomeView />} />
        <Route path="/home/usuario" element={(!login) ? <Navigate replace to="/" /> : <UsuarioView />} /> */}
    </Routes>
  );
}

export default App;
