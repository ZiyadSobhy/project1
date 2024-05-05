import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductDetailPage from './components/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products/:id" component={ProductDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
