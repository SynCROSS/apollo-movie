import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </BrowserRouter>
  );
};

export default App;
