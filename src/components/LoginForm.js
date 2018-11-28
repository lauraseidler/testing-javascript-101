import React from 'react';
import Button from './Button';

const LoginForm = ({ onSubmit }) => (
    <form>
        <label>
            Username
            <input name="username" type="text" />
        </label>

        <label>
            Password
            <input name="password" type="pasword" />
        </label>

        <Button type="submit" onClick={onSubmit}>
            Login
        </Button>
    </form>
);

export default LoginForm;
