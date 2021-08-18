import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/Home';
import Landing from './components/LandingPage/Landing';
import DogDetail from './components/DogDetail';
import CreateBreed from './components/CreateBreed';
// import LazyLoad from 'react-lazyload';


// switch - browser
// // React.fragment: permite retornar elementos múltiples en un método de render() sin crear un elemento DOM adicional (o sea sin un div)
// // mismo que poner <>.

function App() {
  return (
    
    <React.Fragment>
     

      <Route exact path='/' component={Landing}/>
      <Route  path='/home' component={Home}/>
      <Route path='/dogs/:id' component={DogDetail}/>
      <Route path='/createBreed' component={CreateBreed}/>
      
            

    </React.Fragment>
  );
}

export default App;