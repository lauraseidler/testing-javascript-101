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

    it('hides third party library content based on prop', () => {
        const { queryByText, rerender } = render(<App />);

        expect(queryByText(/third party/)).not.toBeNull();

        rerender(<App hide={true} />);

        expect(queryByText(/third party/)).toBeNull();
    });
});
