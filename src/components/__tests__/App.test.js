import React from 'react';
import App from '../App';
import { render, fireEvent, within } from 'react-testing-library';

describe('The App', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it('shows "Submitted!" message after login form submit', () => {
        const { container, queryByText } = render(<App />);

        const loginForm = container.querySelector('form');
        expect(loginForm).not.toBeNull();

        expect(queryByText('Submitted!')).toBeNull();

        const submitButton = within(loginForm).getByText('Login');
        fireEvent.click(submitButton);

        expect(queryByText('Submitted!')).not.toBeNull();
    });
});
