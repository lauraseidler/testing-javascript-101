import React from 'react';
import Button from './Button';

class LoginForm extends React.Component {
    state = {
        isSubmitting: false,
    };

    submit = e => {
        this.setState({
            isSubmitting: true,
        });

        this.props.onSubmit(e);
    };

    render = () => (
        <form>
            {this.state.isSubmitting && <p>Loading...</p>}

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
                disabled={this.state.isSubmitting}
            >
                Login
            </Button>
        </form>
    );
}

export default LoginForm;
