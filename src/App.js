import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App"> 
        
       <Router>  
          <Switch> 

             <Route exact path="/search"> 
             <SearchPage />
            </Route>

            <Route exact path="/"> 
             <Home /> 
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
