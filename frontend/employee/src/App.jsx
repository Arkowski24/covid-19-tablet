import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import FormsList from './views/forms/FormsList';
import FormView from './views/form/FormView';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/patient/:token">
        <FormView />
      </Route>
      <Route path="/">
        <FormsList />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default App;