import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Grid from './grid/grid';
import LandingPage from './landingPage/landingPage';
import AdminTable from './adminTable/adminTable';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/search" component={App} />
      <Route exact path="/admin" component={AdminTable} />
      <Route exact path="/explore" component={Grid} />
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
