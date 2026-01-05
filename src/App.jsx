import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Writing from "./pages/Writing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* HOME must be an index route */}
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="writing" element={<Writing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
