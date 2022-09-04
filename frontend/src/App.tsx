import NavBar from "@Modules/Shared/Components/Layout/Navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
//import NavBar from "./Modules/Shared/Components/Layout/Navbar/NavBar";
//import NavBar from "@/Modules/Shared/Components/Layout/Navbar/NavBar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}
