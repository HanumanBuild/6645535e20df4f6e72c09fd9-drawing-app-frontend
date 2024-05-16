import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default App;