import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
const root = createRoot(document.getElementById("root"));
function Page() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}
root.render(<Page />);