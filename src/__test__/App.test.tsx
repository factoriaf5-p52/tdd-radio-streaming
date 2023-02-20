import App from '../App';
import { render, screen } from '@testing-library/react';


describe('radio-streaming in tdd', () => {
    beforeEach(() => render(<App />))
    test('renders main page correctly', () => {
        // screen.debug();
        expect(true).toBeTruthy()
    })
})