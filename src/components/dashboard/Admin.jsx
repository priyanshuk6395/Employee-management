import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const Admin = (props) => {
  return (
    <div className="bg-zinc-900 h-screen p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default Admin;
