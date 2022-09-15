import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
// if (process.env.NODE_ENV === "development") {
//   axios.defaults.baseURL = 'http://localhost:3001/'
// } else {
axios.defaults.baseURL = 'https://api-prod.kelas-digital.id/'
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);