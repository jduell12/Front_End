/*eslint no-undef: */
/// <reference types="Cypress"/>

describe('Edit user form loads with the button disabled', () => {
    it('navigates to the page', ()=> {
        cy.visit('http://localhost:3000/');
        cy.url().should('include', 'localhost');
    })
})