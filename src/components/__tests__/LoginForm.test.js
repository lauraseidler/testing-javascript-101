import React from 'react';
import { render } from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import LoginForm from '../LoginForm';

describe('The LoginForm component', () => {
    it('renders two inputs and a submit button', () => {
        const container = document.createElement('div');
        const submitHandler = jest.fn(e => e.preventDefault());

        render(<LoginForm onSubmit={submitHandler} />, container);

        const inputs = container.querySelectorAll('input');
        const submitButton = container.querySelector('button');

        expect(inputs).toHaveLength(2);
        expect(submitButton).not.toBeNull();

        Simulate.click(submitButton);

        expect(submitHandler).toHaveBeenCalled();
    });

    it('disables the button on submit', () => {
        const container = document.createElement('div');
        const submitHandler = jest.fn(e => e.preventDefault());

        const loginForm = render(
            <LoginForm onSubmit={submitHandler} />,
            container
        );

        expect(loginForm.state.isSubmitButtonDisabled).toBe(false);

        const submitButton = container.querySelector('button');
        Simulate.click(submitButton);

        expect(loginForm.state.isSubmitButtonDisabled).toBe(true);
    });

    it('shows a loader on submit', () => {
        const container = document.createElement('div');
        const submitHandler = jest.fn(e => e.preventDefault());

        const loginForm = render(
            <LoginForm onSubmit={submitHandler} />,
            container
        );

        expect(loginForm.state.isLoaderVisible).toBe(false);

        const submitButton = container.querySelector('button');
        Simulate.click(submitButton);

        expect(loginForm.state.isLoaderVisible).toBe(true);
    });
});
