export const getPokemonList = () => cy.get('[data-cy="pokemon"]');
export const getNextButton = () => cy.get('[data-cy="next"]').first();
export const getPreviousButton = () => cy.get('[data-cy="prev"]').first();
export const getSearchInput = () => cy.get('[data-cy="search-input"]').first();
export const getPokemonDetailName = () => cy.get('[data-cy="detail-name"]').first();
export const getPokemonDetailType = () => cy.get('[data-cy="detail-type"]').first();
export const getPokemonDetailWeight= () => cy.get('[data-cy="detail-weight"]').first();
export const getPokemonDetailSprites = () => cy.get('[data-cy="detail-sprite"]');
export const getPokemonDetailMoves= () => cy.get('[data-cy="detail-moves"]').first();
