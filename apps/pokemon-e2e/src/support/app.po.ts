export const getPokemonList = () => cy.get('[data-cy="pokemon"]');
export const getNextButton = () => cy.get('[data-cy="next"]').first();
export const getPreviousButton = () => cy.get('[data-cy="prev"]').first();
export const getSearchInput = () => cy.get('[data-cy="search-input"]').first();
export const getPokemonDetail = () => cy.get('[data-cy="detail"]').first();
