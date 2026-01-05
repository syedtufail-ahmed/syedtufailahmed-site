import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Writing from "./pages/Writing";
import HumanInTheLoop from "./pages/HumanInTheLoop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="writing" element={<Writing />} />
          <Route
            path="writing/human-in-the-loop"
            element={<HumanInTheLoop />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
