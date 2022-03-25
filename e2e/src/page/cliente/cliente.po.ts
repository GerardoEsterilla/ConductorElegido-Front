import { by, element } from 'protractor';

export class ClientePage {
    private linkCrearCliente = element(by.id('linkCrearCliente'));
    private linkSolicitarServicio = element(by.id('linkSolicitarServicio'));
    private linkConsultaCedula = element(by.id('linkConsultaCedula'));
    private linkConsultarServicio = element(by.id('linkConsultarServicio'));

    private linkListarClientes = element(by.id('linkListarCliente'));

    private inputNombreCliente = element(by.id('nombre'));
    private inputApellidoCliente = element(by.id('apellido'));
    private inputFechaNacimientoCliente = element(by.id('fechaNacimiento'));
    private inputCedulaCliente = element(by.id('cedula'));
    private inputEmailCliente = element(by.id('email'));

    private listaClientes = element.all(by.css('ul.clientes li'));

    async clickBotonCrearClientes() {
        await this.linkCrearCliente.click();
    }

    async clickBotonSolicitarServicio() {
        await this.linkSolicitarServicio.click();
    }

    async clickBotonConsultarServicio() {
        await this.linkConsultarServicio.click();
    }

    async clickBotonConsultaCedula() {
        await this.linkConsultaCedula.click();
    }

    async clickBotonListarClientes() {
        await this.linkListarClientes.click();
    }

    async ingresarNombre(nombreCliente) {
        await this.inputNombreCliente.sendKeys(nombreCliente);
    }

    async ingresarApellido(apellidoCliente) {
        await this.inputApellidoCliente.sendKeys(apellidoCliente);
    }

    async ingresarFechaNacimiento(fechaNacimientoCliente) {
        await this.inputFechaNacimientoCliente.sendKeys(fechaNacimientoCliente);
    }

    async ingresarCedula(cedulaCliente) {
        await this.inputCedulaCliente.sendKeys(cedulaCliente);
    }

    async ingresarEmail(emailCliente) {
        await this.inputEmailCliente.sendKeys(emailCliente);
    }

    async contarClientes() {
        return this.listaClientes.count();
    }
}
