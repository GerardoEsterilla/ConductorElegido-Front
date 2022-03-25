import { AppPage } from '../app.po';
import { ConductorPage } from '../page/conductor/conductor.po';

describe('workspace-project Conductor', () => {
    let page: AppPage;
    let conductor: ConductorPage;

    beforeEach(() => {
        page = new AppPage();
        conductor = new ConductorPage();

    });

    it('Deberia crear Conductor', async () => {
        const NOMBRE = 'Nombre Conductor';
        const APELLIDO = 'Apellido Conductor';
        const FECHA_NACIMIENTO = '2022-03-08 19:00:00';
        const CEDULA = 'Cedula';
        const EMAIL = 'geadads@124';
        const TELEFONO = 'telefono';
        const FOTO = 'foto';

        page.navigateTo();
        page.getConductorButton().click();
        conductor.clickBotonCrearConductor();
        conductor.ingresarNombre(NOMBRE);
        conductor.ingresarApellido(APELLIDO);
        conductor.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        conductor.ingresarCedula(CEDULA);
        conductor.ingresarEmail(EMAIL);
        conductor.ingresarTelefono(TELEFONO);
        conductor.ingresarFoto(FOTO);


        expect(NOMBRE).toEqual('Nombre Conductor');
        expect(APELLIDO).toEqual('Apellido Conductor');
        expect(FECHA_NACIMIENTO).toEqual('2022-03-08 19:00:00');
        expect(CEDULA).toEqual('Cedula');
        expect(EMAIL).toEqual('geadads@124');
        expect(TELEFONO).toEqual('telefono');
        expect(FOTO).toEqual('foto');

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });


});
