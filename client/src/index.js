import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/test' component={() => <h1>Testing</h1>}/>
            <Route component={() => <h1>404: Page not found</h1>} />
        </Switch>
    </Router>,
    document.getElementById('root'));