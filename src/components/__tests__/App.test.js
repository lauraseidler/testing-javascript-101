import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

describe('The App', () => {
    it('renders without crashing', () => {
        mount(<App />);
    });

    it('shows "Submitted!" message after login form submit', () => {
        const app = mount(<App />);

        const loginForm = app.find('LoginForm');
        expect(loginForm).not.toBeNull();
        expect(app.contains('Submitted!')).toBe(false);

        app.find('button').simulate('click');

        expect(app.contains('Submitted!')).toBe(true);
    });
});
