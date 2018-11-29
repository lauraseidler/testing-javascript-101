import React from 'react';
import App from '../App';
import { mount, shallow } from 'enzyme';

describe('The App', () => {
    it('renders without crashing', () => {
        mount(<App />);
    });

    it('shows "Submitted!" message after login form submit', () => {
        const app = shallow(<App />);

        expect(app.find('LoginForm')).not.toBeNull();
        expect(app.contains('Submitted!')).toBe(false);

        app.instance().submitLoginForm({ preventDefault: () => null });

        expect(app.contains('Submitted!')).toBe(true);
    });
});
