import { Route, Router } from "wouter";
import {TopScorers} from "./pages/TopScorers"; // Asegúrate de importar correctamente
import {FairPlay} from "./pages/FairPlay"; // Asegúrate de importar correctamente
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar.jsx";
import { Calendar } from "./pages/Calendar";
import { Interviews } from "./pages/Interviews";
import { Galery } from "./pages/Galery";
import { Seleccion } from "./pages/Seleccion";
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="body">

          <Route path="/">
            <HomePage />
          </Route>

          <Route path="/noticias">
            <HomePage />
          </Route>

          <Route path="/goleadores">
            <TopScorers />
          </Route>

          <Route path="/fair-play">
            <FairPlay />
          </Route>

          <Route path="/calendario">
            <Calendar />
          </Route>

          <Route path="/entrevistas">
            <Interviews />
          </Route>

          <Route path="/galeria">
            <Galery />
          </Route>

          <Route path="/seleccion">
            <Seleccion />
          </Route>

        </div>
        
      </Router>
    </div>
  );
}

export default App;
