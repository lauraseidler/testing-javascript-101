import React from 'react';
import { getQueryParam } from '../helpers';
import LoginForm from './LoginForm';

const user = getQueryParam(window.location.search, 'user') || 'everyone';

const App = () => (
    <React.Fragment>
        <h1>Welcome to JavaScript testing, {user}!</h1>
        <h2>Login</h2>
        <LoginForm onSubmit={e => e.preventDefault()} />
    </React.Fragment>
);

export default App;
