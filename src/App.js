import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Women from './components/Women';
import Men from './components/Men';
import mainHome from './components/mainHome';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Switch>
            mainHome
            <Route exact path='/' component={mainHome} />
            <Route exact path='/men' component={Men} />
            <Route exact path='/women' component={Women} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
