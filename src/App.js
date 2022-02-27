import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/navbar/nav-bar";
import LeftSideBar from "./components/left-sidebar/leftsidebar";
import RightSideBar from "./components/right-sidebar/rightsidebar";

function App() {
  return (
    <>
      <Topbar />
      <div>
        <div className="row">
          <div className="col">
            <LeftSideBar />
          </div>
          <div className="col-6">ksdfdskf</div>
          <div className="col">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
