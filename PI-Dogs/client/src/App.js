import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/LandingPage/Landing';
import Home from './components/Home/Home';
import DogCards from './components/DogCards/DogCards';
import CreateDog from './components/CreateDog/CreateDog';
import NavBar from './components/NavBar/Nav';



// React.fragment: permite retornar elementos múltiples en un método de render() sin crear un elemento DOM adicional (o sea sin un div)
// mismo que poner <>.

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route>
          <NavBar path="/home" component={NavBar}/>
          <Route exact path="/home" component={Home}  />
          <Route exact path="/home/:id" render={({ match }) => <DogCards id={match.params.id} />}></Route>
          <Route exact path="/createDog" component={CreateDog} />
          </Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;