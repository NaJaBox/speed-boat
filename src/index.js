import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import BoatContextProvider from "./components/BoatContext/BoatContext.jsx";
import reportWebVitals from './reportWebVitals';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BoatContextProvider>
    <App />
  </BoatContextProvider>
);
reportWebVitals();
