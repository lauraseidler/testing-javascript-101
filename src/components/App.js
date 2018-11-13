import React from 'react';
import { getQueryParam } from '../helpers';

const user = getQueryParam(window.location.search, 'user') || 'everyone';

const App = () => <h1>Welcome to JavaScript testing, {user}!</h1>;

export default App;
