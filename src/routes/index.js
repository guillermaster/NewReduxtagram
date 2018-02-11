import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import App from '../components/App';
import PhotoGrid from '../components/PhotoGrid';
import Single from '../components/Single';

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={(props) => <App {...props}><PhotoGrid /></App>} />
                <Route path="/view/:postId" exact render={(props) => <App {...props}><Single /></App>} />
            </Switch>
        </BrowserRouter>
    </Provider>
);