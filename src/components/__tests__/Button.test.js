import React from 'react';
import { render } from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import Button from '../Button';

describe('The Button component', () => {
    it('renders a button', () => {
        const container = document.createElement('div');

        render(<Button>Click me!</Button>, container);

        const button = container.querySelector('button');
        expect(button).not.toBeNull();
        expect(button).toHaveProperty('textContent', 'Click me!');
    });

    it('calls the onClick handler on click', () => {
        const container = document.createElement('div');
        const onClickHandler = jest.fn();

        render(<Button onClick={onClickHandler}>Click me!</Button>, container);

        const button = container.querySelector('button');
        Simulate.click(button);

        expect(onClickHandler).toHaveBeenCalled();
    });
});
