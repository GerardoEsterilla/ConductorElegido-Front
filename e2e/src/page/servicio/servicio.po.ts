import { by, element } from 'protractor';

export class ServicioPage {

    private linkSolicitarServicio = element(by.id('linkSolicitarServicio'));
    private linkConsultaCedula = element(by.id('linkConsultaCedula'));
    private linkGuardarServicio = element(by.id('linkGuardarServicio'));
    


    private inputOrigenServicio = element(by.id('origen'));
    private inputDestinoServicio = element(by.id('destino'));
    private inputFechaServicio = element(by.id('fechaServicio'));
    private inputDescripcionServicio = element(by.id('descripcion'));

    private listaServicios = element.all(by.css('tr.columnas'));


    async clickBotonSolicitarServicio() {
        await this.linkSolicitarServicio.click();
    }

    async clickBotonConsultaCedula() {
        await this.linkConsultaCedula.click();
    }


    async clickBotonGuardarServicio() {
        await this.linkGuardarServicio.click();
    }

    async ingresarOrigen(origenServicio) {
        await this.inputOrigenServicio.sendKeys(origenServicio);
    }

    async ingresarDestino(destinoServicio) {
        await this.inputDestinoServicio.sendKeys(destinoServicio);
    }

    async ingresarFechaServicio(fechaServicio) {
        await this.inputFechaServicio.sendKeys(fechaServicio);
    }

    async ingresarDescripcionServicio(descripcionServicio) {
        await this.inputDescripcionServicio.sendKeys(descripcionServicio);
    }


    async contarServicios() {
        return this.listaServicios.count();
    }
    

}
