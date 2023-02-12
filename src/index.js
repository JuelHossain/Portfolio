import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
axios.defaults.baseURL = "https://juel-hossain-server.vercel.app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider resetCSS>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
