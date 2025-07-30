import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "./context/ConfigContext.jsx";

createRoot(document.getElementById("root")).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
