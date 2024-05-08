import ReactDOM from "react-dom/client";
import { EmailEditor } from "./EmailEditor";
import React from "react";

const mountEditor = (id) => {
  const ele = document.getElementById(id);
  ReactDOM.createRoot(ele).render(<EmailEditor />);
};

export { mountEditor };
