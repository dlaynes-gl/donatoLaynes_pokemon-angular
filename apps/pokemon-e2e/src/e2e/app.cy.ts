import {
  getPokemonList,
  getPreviousButton,
  getNextButton,
  getSearchInput,
  getPokemonDetailName,
  getPokemonDetailSprites,
  getPokemonDetailMoves,
  getPokemonDetailType,
  getPokemonDetailWeight,
} from '../support/app.po';

describe('pokemon', () => {
  beforeEach(() => cy.visit('/'));

  it('should list 4 pokemon by default', () => {
    getPokemonList().should((t) => expect(t.length).equal(4));
  });

  it('should navigate to the next page', () => {
    getNextButton().click();
    getPokemonList().should((t) => expect(t.length).equal(3));
  });

  it('should navigate to the previous page', () => {
    getNextButton().click();
    getPreviousButton().click();
    getPokemonList().should((t) => expect(t.length).equal(4));
  });

  it('should filter the pokemon list', () => {
    getSearchInput().type('char');
    getPokemonList().should((t) => expect(t.length).equal(3));
  });

  it('should show the detail of a pokemon when clicked in the pokemon list', () => {
    getPokemonList().first().click();
    getPokemonDetailName().should('have.data');
    getPokemonDetailType().should('have.data');
    getPokemonDetailWeight().should('have.data');
    getPokemonDetailSprites().should((t) => expect(t.length).least(1));
    getPokemonDetailMoves().should('have.data');
  });
});
