import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext"

import Top from "../src/components/Top";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Top />
        <Header />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
