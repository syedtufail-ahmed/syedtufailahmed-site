import { HelmetProvider } from "react-helmet-async";
import "./styles/theme.css";
import "./styles/typography.css";
import "./styles/layout.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
