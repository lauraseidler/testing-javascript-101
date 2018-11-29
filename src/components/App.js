import React from 'react';
import { getQueryParam } from '../helpers';
import LoginForm from './LoginForm';

const user = getQueryParam(window.location.search, 'user') || 'everyone';

class App extends React.Component {
    state = {
        wasFormSubmitted: false,
    };

    submitForm = e => {
        e.preventDefault();

        this.setState({
            wasFormSubmitted: true,
        });
    };

    render() {
        return (
            <React.Fragment>
                <h1>Welcome to JavaScript testing, {user}!</h1>
                <h2>Login</h2>
                <LoginForm submitHandler={this.submitForm} />

                {this.state.wasFormSubmitted && <p>Submitted!</p>}
            </React.Fragment>
        );
    }
}

export default App;
