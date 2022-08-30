import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App'
import './index.css'
import Login from './routes/login';
import PaginaTabela from './routes/paginaTabela'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="paginatabelas" element={<PaginaTabela />} />
    </Routes>
    {/* <App /> */}
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
