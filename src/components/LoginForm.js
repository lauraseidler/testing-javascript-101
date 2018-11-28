import React from 'react';
import Button from './Button';

class LoginForm extends React.Component {
    state = {
        isSubmitButtonDisabled: false,
        isLoaderVisible: false,
    };

    submit = e => {
        this.setState({
            isSubmitButtonDisabled: true,
            isLoaderVisible: true,
        });

        this.props.onSubmit(e);
    };

    render = () => (
        <form>
            {this.state.isLoaderVisible && <p>Loading...</p>}

            <label>
                Username
                <input name="username" type="text" />
            </label>

            <label>
                Password
                <input name="password" type="pasword" />
            </label>

            <Button
                type="submit"
                onClick={this.submit}
                disabled={this.state.isSubmitButtonDisabled}
            >
                Login
            </Button>
        </form>
    );
}

export default LoginForm;
