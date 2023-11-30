import ReactDOM from "react-dom/client";
import { CallingAComponent } from "./components/WaysToWriteComponets";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CallingAComponent />
    {CallingAComponent()}
  </>
);
