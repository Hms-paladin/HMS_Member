import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../../component/Dashboard/dashboard';

export default class Routes extends Component {
    render() {
        return (
            <Router basename="Hms/?/">
                <Route path="/Home" component={Dashboard} render={(props)=> <Dashboard {...props} />}/>
            </Router>
        );
    }
}
