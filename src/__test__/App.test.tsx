import App from '../App';
import { render, screen } from '@testing-library/react';


describe('radio-streaming in tdd', () => {
    beforeEach(() => render(<App />))
    test('renders main page correctly', () => {
        // screen.debug();
        expect(true).toBeTruthy()
    })

    describe('El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA"', () => {
        test('El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA"', () => {
            const texto = screen.getByText('RADIO FACTORIA');
            expect(texto).toBeInTheDocument()
        })
    })
})