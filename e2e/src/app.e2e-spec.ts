import { AppPage } from './app.po';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Conductor Elegido');
  });

  it('should display Cliente Button ', () => {
    page.navigateTo();
    expect(page.getClienteButton().getText()).toEqual('Soy Cliente');

  });
  it('should display Conductor Button ', () => {
    page.navigateTo();
    expect(page.getConductorButton().getText()).toEqual('Soy Conductor');
  });
});
