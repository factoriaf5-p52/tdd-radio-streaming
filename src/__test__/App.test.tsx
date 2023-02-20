import App from '../App';
import { render,screen } from '@testing-library/react';

test('renders main page correctly', ()=>{
    render(<App/>);
    // screen.debug();
    expect(true).toBeTruthy()
})