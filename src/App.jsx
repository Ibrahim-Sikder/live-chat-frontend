import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChatePage from "./pages/ChatePage/ChatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<ChatePage />} />
    </Routes>
  );
}

export default App;
