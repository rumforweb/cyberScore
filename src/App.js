import React, {Component} from 'react';
import MainLayout from './hoc/MainLayout/Layout';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={MainLayout}/>
                </Switch>
            </>
        );
    }
}

export default App;
