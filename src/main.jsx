import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles/theme.css";
import "./styles/typography.css";
import "./styles/layout.css";
import "./styles/article.css";
import "./styles/home.css";
import "./styles/speaking.css";
import "./styles/about.css";
import "./styles/book.css";
import "./styles/writing.css";
import "./styles/essay.css";
import "./styles/credentials.css";

// Use hydrateRoot if SSR content exists, createRoot otherwise (dev mode)
const rootElement = document.getElementById("root");
const hasSSRContent = rootElement.hasChildNodes();

if (hasSSRContent) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
