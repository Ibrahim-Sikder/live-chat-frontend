import { createBrowserRouter } from "react-router-dom";
import ChatePage from "../pages/ChatePage/ChatePage";
import Home from "../pages/Home/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/chats",
      element: <ChatePage/>,
    },
  ]);


  export default router