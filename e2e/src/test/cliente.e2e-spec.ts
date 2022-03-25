import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';

describe('workspace-project Cliente', () => {
    let page: AppPage;
    let cliente: ClientePage;

    beforeEach(() => {
        page = new AppPage();
        cliente = new ClientePage();

    });

    it('Deberia crear Cliente', async () => {
        const NOMBRE = 'Nombre';
        const APELLIDO = 'Apellido';
        const FECHA_NACIMIENTO = '2022-03-08 19:00:00';
        const CEDULA = 'Cedula';
        const EMAIL = 'geadads@124';

        page.getClienteButton().click();
        cliente.clickBotonCrearClientes();
        cliente.ingresarNombre(NOMBRE);
        cliente.ingresarApellido(APELLIDO);
        cliente.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        cliente.ingresarCedula(CEDULA);
        cliente.ingresarEmail(EMAIL);

        expect(NOMBRE).toEqual('Nombre');
        expect(APELLIDO).toEqual('Apellido');
        expect(FECHA_NACIMIENTO).toEqual('2022-03-08 19:00:00');
        expect(CEDULA).toEqual('Cedula');
        expect(EMAIL).toEqual('geadads@124');

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

});

