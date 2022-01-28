import React from 'react';
import './App.css';


import Header from './components/views/header/Header';
import Footer from './components/views/footer/Footer';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import ShoppingCart from './components/pages/ShoppingCart';

const App = (props) => {

  

 // console.log("App-props", props);
  let componentRendered = '';

  switch (props.pageName) {
    case "Home":
      componentRendered = <Home {...props} />;
      break;
    case "ShoppingCart":
      componentRendered = <ShoppingCart {...props} />;
      break;
    default:
      componentRendered = <PageNotFound {...props} />;
  };



  return (
    <div className="App">
      
      <Header />

      {componentRendered}

      <Footer />
    </div>
  );
}


export default App;

