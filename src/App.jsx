import { useState } from "react";

import "./App.css";
import { router } from "./Rooters/Router";
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
