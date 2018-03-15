import { FormTest1Page } from './app.po';

describe('form-test1 App', function() {
  let page: FormTest1Page;

  beforeEach(() => {
    page = new FormTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
