import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
