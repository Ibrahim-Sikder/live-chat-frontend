/* eslint-disable no-unused-vars */
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import SideDrawer from "../../components/miscellaneous/SideDrawer";
import MyChats from "../../components/MyChats";
import Chatbox from "../../components/Chatbox";
const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div className="homePage">
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
          
        </Box>
      </div>
    </div>
  );
};

export default Chatpage;
