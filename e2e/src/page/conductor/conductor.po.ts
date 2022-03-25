import { by, element } from 'protractor';

export class ConductorPage {
    private linkCrearConductor = element(by.id('linkCrearConductor'));
    private linkConsultaCedula = element(by.id('linkConsultaCedula'));
    private linkConsultarServicio =  element(by.id('linkConsultarServicio'));


    private inputNombreConductor = element(by.id('nombre'));
    private inputApellidoConductor = element(by.id('apellido'));
    private inputFechaNacimientoConductor = element(by.id('fechaNacimiento'));
    private inputCedulaConductor = element(by.id('cedula'));
    private inputEmailConductor = element(by.id('email'));
    private inputTelefonoConductor = element(by.id('telefono'));
    private inputFotoConductor = element(by.id('foto'));



    async clickBotonCrearConductor() {
        await this.linkCrearConductor.click();
    }
    async clickBotonConsultarServicio() {
        await this.linkConsultarServicio.click();
    }
    async clickBotonConsultaCedula() {
        await this.linkConsultaCedula.click();
    }

    async ingresarNombre(nombreConductor) {
        await this.inputNombreConductor.sendKeys(nombreConductor);
    }

    async ingresarApellido(apellidoConductor) {
        await this.inputApellidoConductor.sendKeys(apellidoConductor);
    }

    async ingresarFechaNacimiento(fechaNacimientoConductor) {
        await this.inputFechaNacimientoConductor.sendKeys(fechaNacimientoConductor);
    }

    async ingresarCedula(cedulaConductor) {
        await this.inputCedulaConductor.sendKeys(cedulaConductor);
    }

    async ingresarEmail(emailConductor) {
        await this.inputEmailConductor.sendKeys(emailConductor);
    }

    async ingresarTelefono(telefonoConductor) {
        await this.inputTelefonoConductor.sendKeys(telefonoConductor);
    }

    async ingresarFoto(fotoConductor) {
        await this.inputFotoConductor.sendKeys(fotoConductor);
    }
}
