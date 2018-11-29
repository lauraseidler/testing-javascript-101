import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    static propTypes = {
        submitHandler: PropTypes.func,
    };

    state = {
        isSubmitting: false,
    };

    submit = e => {
        this.setState({
            isSubmitting: true,
        });

        if (this.props.submitHandler) {
            this.props.submitHandler(e);
        }
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
