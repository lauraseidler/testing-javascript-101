import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

describe('The App', () => {
    it('renders without crashing', () => {
        mount(<App />);
    });
});
