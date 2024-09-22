import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
// import SmoothProvider from "./components/shared/SmoothProvider";
import Loading from "./components/shared/Loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      {/* <SmoothProvider> */}

      <RouterProvider router={router} fallbackElement={<Loading />} />
      {/* </SmoothProvider> */}
   </React.StrictMode>,
);
