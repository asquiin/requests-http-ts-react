import React from "react";
import UserInfoForm from "./components/UserTable";
import Get from "./components/Get";
import Post from "./components/Post";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="App">
      <UserInfoForm />
      <Get/>
      <Post/>
      <Delete/>
    </div>
  );
}

export default App;
