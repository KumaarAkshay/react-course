import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
// import Wrapper from "./components/Helper/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUser) => {
      return [
        ...prevUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    // <Wrapper>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
    // </Wrapper>
  );
}

export default App;
