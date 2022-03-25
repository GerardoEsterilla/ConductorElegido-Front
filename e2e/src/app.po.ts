import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }
  getTitleText() {
    return element(by.css('app-home h1')).getText() as Promise<string>;
  }
  getClienteButton() {
    return element(by.css('[routerlink="/cliente"]'));
  }
  getConductorButton() {
    return element(by.css('[routerlink="/conductor"]'));
  }

  getServicio() {
    return element(by.css('[routerlink="/servicio"]'));
  }
}
