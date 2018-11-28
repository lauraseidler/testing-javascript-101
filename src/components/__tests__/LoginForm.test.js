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

        render(<LoginForm onSubmit={submitHandler} />, container);

        const submitButton = container.querySelector('button');
        expect(submitButton.disabled).toBe(false);

        Simulate.click(submitButton);

        expect(submitButton.disabled).toBe(true);
    });

    it('shows a loader on submit', () => {
        const container = document.createElement('div');
        const submitHandler = jest.fn(e => e.preventDefault());

        render(<LoginForm onSubmit={submitHandler} />, container);

        const getByText = (el, text) => {
            for (let i = 0; i < el.childNodes.length; i++) {
                if (el.childNodes[i].textContent === text) {
                    return el.childNodes[i];
                }
            }

            return null;
        };

        expect(getByText(container.firstChild, 'Loading...')).toBeNull();

        const submitButton = container.querySelector('button');
        Simulate.click(submitButton);

        expect(getByText(container.firstChild, 'Loading...')).not.toBeNull();
    });
});
