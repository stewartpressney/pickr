import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Grid from './grid/grid';
import AdminTable from './adminTable/adminTable';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/admin" component={AdminTable} />
      <Route exact path="/grid" component={Grid} />
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
