
import "./App.css"
import Card2 from "./component/card2/Card2";
import Navbar from "./component/navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Traders from "./component/traders/Traders";
import Card from "./component/cards/Card";
import Win from "./component/Win";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
             <Win/>

          }
          />

          <Route path="card" element={
            <Card2 />

          }
          />
          <Route path="trade" element={
            <Card/>

          }
          />
          <Route path="win" element={
            <Win/>

          }
          />

        </Routes>


      </BrowserRouter>




    </div>
  );
}

export default App;
