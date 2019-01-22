import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Search}/>
            <Route exact path='/saved' component={Saved}/>
            <Route component={() => <h1>404: Page not found</h1>} />
        </Switch>
    </Router>,
    document.getElementById('root'));