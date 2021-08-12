import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/Landing';
import Home from './components/Home/Home';
import DogCards from './components/DogCards/DogCards';
import CreateDog from './components/CreateDog/CreateDog';
import NavBar from './components/NavBar/Nav';



// React.fragment: permite retornar elementos múltiples en un método de render() sin crear un elemento DOM adicional (o sea sin un div)
// mismo que poner <>.

function App() {
  return (
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
          <Route>
          <NavBar path="/home" component={NavBar}/>
          <Route exact path="/home" component={Home}  />
          <Route exact path="/home/:id" render={({ match }) => <DogCards id={match.params.id} />}></Route>
          <Route exact path="/createDog" component={CreateDog} />
          </Route>

    {/* <div className="App">
      <h1>Henry Dogs</h1>
    </div> */}
      </React.Fragment>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import {Route} from 'react-router-dom'
// import Home from './components/Home';
// import Landing from './components/Landing';
// import DogDetail from './components/DogDetail';
// import CreateBreed from './components/CreateBreed';
// // import LazyLoad from 'react-lazyload';

// function App() {
//   return (
    
//     <React.Fragment>
     

//       <Route exact path='/' component={Landing}/>
//       <Route  path='/home' component={Home}/>
//       <Route path='/dogs/:id' component={DogDetail}/>
//       <Route path='/createBreed' component={CreateBreed}/>
      
            

//     </React.Fragment>
//   );
// }