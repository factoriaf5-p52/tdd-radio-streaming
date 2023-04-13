import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('radio-streaming in tdd', () => {
    beforeEach(() => render(<App />))
    test('renders main page correctly', () => {
        // screen.debug();
        expect(true).toBeTruthy()
    })

    describe('El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA"', () => {
        test('El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA"', () => {
            const texto = screen.getByRole('heading', { name: 'RADIO FACTORIA' });
            expect(texto).toBeInTheDocument()
        })
    })

    describe('Debemos poder buscar radios por nombre', () => {
        test('La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la emisora"', () => {
            const input = screen.getByPlaceholderText('Escribe el nombre de la emisora');

            expect(input).toBeInTheDocument();

        })
        test('La aplicación debe tener un botón de búsqueda => Texto "Buscar"', () => {
            const button = screen.getByRole('button', { name: 'buscar' })
        })
        test('Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez', async () => {
            const buscarMock = jest.fn();
            const buscarButton = screen.getByRole('button', { name: 'buscar' })

            buscarButton.addEventListener('click', buscarMock);

            await userEvent.click(buscarButton);

            expect(buscarMock).toHaveBeenCalledTimes(1);

        })
    })
    describe('Listado de emisoras', () => {
        test('Debe existir un listado de emisoras', () => {
            const lista = screen.getByRole('list');
            expect(lista).toBeInTheDocument();
        })
        test('El listado debe inicializar vacío', () => {
            // const listItem = screen.queryByRole('listitem');
            // expect(listItem).not.toBeInTheDocument();
            const lista = screen.getByLabelText('radio-list');
            expect(lista.childElementCount).toBe(0);

        })
        test('Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado', async () => {
            const input = screen.getByPlaceholderText('Escribe el nombre de la emisora');
            const buscarButon = screen.getByRole('button', { name: 'buscar' });
            await userEvent.type(input, 'los 40');
            await userEvent.click(buscarButon);

            // await waitFor(() => {
            //     expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(1);
            //   })
            await waitFor(() => {
                expect(screen.getByLabelText('radio-list').childElementCount).toBeGreaterThan(0)
            })
        })
        test('Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda"', async () => {
            const input = screen.getByPlaceholderText('Escribe el nombre de la emisora');
            const buscarButon = screen.getByRole('button', { name: 'buscar' });
            await userEvent.type(input, 'no valid');
            await userEvent.click(buscarButon);

            await waitFor(() => {
                expect(screen.getByRole('listitem').textContent).toBe("No se han encontrado emisoras para esta búsqueda");
            })

        })
    })
})
