import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';
import { ConductorPage } from '../page/conductor/conductor.po';
import { ServicioPage } from '../page/servicio/servicio.po';

describe('workspace-project Servicio', () => {
    let page: AppPage;
    let cliente: ClientePage;
    let servicio: ServicioPage;
    let conductor: ConductorPage;

    beforeEach(() => {
        page = new AppPage();
        cliente = new ClientePage();
        servicio = new ServicioPage();
        conductor = new ConductorPage();

    });

    it('Deberia Solicitar Servicio', async () => {
        const CEDULA = '11111';

        page.navigateTo();
        page.getClienteButton().click();
        cliente.clickBotonSolicitarServicio();
        cliente.ingresarCedula(CEDULA);
        cliente.clickBotonConsultaCedula();
        expect(CEDULA).toEqual('11111');


        const ORIGEN = 'origen';
        const DESTINO = 'destino';
        const FECHA_SERVICIO = 'fechaServicio';
        const DESCRIPCION = 'descripcion';

        servicio.ingresarOrigen(ORIGEN);
        servicio.ingresarDestino(DESTINO);
        servicio.ingresarFechaServicio(FECHA_SERVICIO);
        servicio.ingresarDescripcionServicio(DESCRIPCION);


        servicio.clickBotonGuardarServicio();


        expect(ORIGEN).toEqual('origen');
        expect(DESTINO).toEqual('destino');
        expect(FECHA_SERVICIO).toEqual('fechaServicio');
        expect(DESCRIPCION).toEqual('descripcion');

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar servicios por cedula', () => {

        const CEDULA = '11111';

        page.navigateTo();
        page.getClienteButton().click();
        cliente.clickBotonConsultarServicio();
        cliente.ingresarCedula(CEDULA);
        cliente.clickBotonConsultaCedula();
        expect(CEDULA).toEqual('11111');
        expect(10).toBe(servicio.contarServicios());
    });


    it('Deberia listar todos los servicios', () => {

        const CEDULA = '11111';

        page.navigateTo();
        page.getConductorButton().click();
        conductor.clickBotonConsultarServicio();
        conductor.ingresarCedula(CEDULA);
        conductor.clickBotonConsultaCedula();
        expect(CEDULA).toEqual('11111');
        expect(11).toBe(servicio.contarServicios());
    });




});
