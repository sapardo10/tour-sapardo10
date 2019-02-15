import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('Should search hero', () => {
    page.navigateTo();
    page.searchHeroWithoutClick('Narco');
    expect(page.getFirstHeroResult()).toBe('Narco');
  });

  it('Should search and go to hero', () => {
    page.navigateTo();
    page.searchHeroes('Narco');
    expect(page.getHeroNameDetails()).toBe('Narco details!');
  });

  it('Should edit a heroe', () => {
    page.navigateTo();
    page.searchHeroes('Magneta');
    page.editNameHero('Hola');
    page.searchHeroes('MagnetaHola');
    expect(page.getHeroNameDetails()).toBe('MagnetaHola details!');
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
  
  it('should go to hero details', () => {
    page.pressFirstHero();
    expect(page.getNameHeroPressed()).toBe('ZERO is my hero');
  });

  it('should delete hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.pressDelete();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });



});
