import React from 'react';
import Button from './Button';

class LoginForm extends React.Component {
    state = {
        isSubmitButtonDisabled: false,
    };

    submit = e => {
        this.setState({
            isSubmitButtonDisabled: true,
        });

        this.props.onSubmit(e);
    };

    render = () => (
        <form>
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
