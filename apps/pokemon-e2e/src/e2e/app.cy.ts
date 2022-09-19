import {
  getPokemonList,
  getFirstPokemonFromList,
  getPreviousButton,
  getNextButton,
  getSearchInput,
  getPokemonDetailName,
  getPokemonDetailSprites,
  getPokemonDetailMoves,
  getPokemonDetailType,
  getPokemonDetailWeight,
} from '../support/app.po';

const baseUrl = 'https://pokeapi.co/api/v2/'

describe('pokemon', () => {
  before(() => {
    cy.fixture('pokemonList').as('pokemonList')
    cy.fixture('pokemon/bulbasaur').as('bulbasaur')
    cy.fixture('pokemon/ivysaur').as('ivysaur')
    cy.fixture('pokemon/venusaur').as('venusaur')
    cy.fixture('pokemon/charmander').as('charmander')
    cy.fixture('pokemon/charmeleon').as('charmeleon')
    cy.fixture('pokemon/charizard').as('charizard')
    cy.fixture('pokemon/squirtle').as('squirtle')
  });

  it('should list 4 pokemon by default', () => {
    getPokemonList().should((t) => expect(t.length).equal(4));
  });

  it('should show detailed information of each pokemon in the dashboard page', () => {
    getFirstPokemonFromList().should('have.data')
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
