import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList/BookList';
import Person from './Components/Person/Person';
import Counter from './Components/Counter/Counter';
import UseEffectExample from './Components/UseEffectExample/UseEffectExample';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Product } from './Components/Product/Product';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" children={Product} />
        <Route path="/bookList" component={BookList} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

