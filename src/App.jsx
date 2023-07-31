import { Route, Router } from "wouter";
import {TopScorers} from "./pages/TopScorers"; // Asegúrate de importar correctamente
import {FairPlay} from "./pages/FairPlay"; // Asegúrate de importar correctamente
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="body">
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/goleadores">
          <TopScorers />
        </Route>

        <Route path="/fair-play">
          <FairPlay />
        </Route>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
