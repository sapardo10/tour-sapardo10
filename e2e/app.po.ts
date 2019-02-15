import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToTopHero() {
    element(by.css('.module .hero')).click();
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHeroes(search: string) {
    element(by.id('search-box')).sendKeys(search);
    element(by.css('.search-result')).click();
  }

  searchHeroWithoutClick(search: string) {
    element(by.id('search-box')).sendKeys(search);
  }

  getFirstHeroResult(){
    return element(by.css('.search-result')).getText();
  }

  getHeroNameDetails(){
    return element(by.tagName('h2')).getText();
  }

  pressDelete(){
    element(by.css('.delete')).click();
  }

  pressFirstHero(){
    element(by.css('.badge')).click();
  }

  getNameHeroPressed(){
    return element.all(by.tagName('h2')).get(1).getText();
  }

  editNameHero(name: string){
    element(by.css('.ng-pristine')).sendKeys(name);
    element.all(by.tagName('button')).get(1).click();
  }
}
