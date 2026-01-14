import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Writing from "./pages/Writing";
import HumanInTheLoop from "./pages/HumanInTheLoop";
import HumanInTheLoopAIGovernance from "./pages/writing/HumanInTheLoopAIGovernance";
import AnalyticsTracker from "./AnalyticsTracker";
import Book from "./pages/Book";

export default function App() {
  return (
    <>
      <AnalyticsTracker />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="writing" element={<Writing />} />
          <Route path="writing/human-in-the-loop" element={<HumanInTheLoop />} />
          <Route
            path="writing/human-in-the-loop-ai-governance"
            element={<HumanInTheLoopAIGovernance />}
          />
        </Route>
      </Routes>
    </>
  );
}
<Route path="/Book" element={<Book />} />
