import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChatePage from "./pages/ChatePage/ChatePage";
import Slider from "./pages/Slider/Slider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<ChatePage />} />
      <Route path="/slider" element={<Slider />} />
    </Routes>
  );
}

export default App;
