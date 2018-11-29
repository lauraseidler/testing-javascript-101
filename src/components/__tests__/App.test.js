import React from 'react';
import App from '../App';
import { render } from 'react-testing-library';

describe('The App', () => {
    it('renders without crashing', () => {
        render(<App />);
    });
});
