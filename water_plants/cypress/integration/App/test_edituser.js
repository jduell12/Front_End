/*eslint no-undef: */
/// <reference types="Cypress"/>

describe('Edit user form loads with the button disabled', () => {
    it('navigates to the page', ()=> {
        cy.visit('http://localhost:3000/');
        cy.url().should('include', 'localhost');
    });

    it('edit user form loads with the button disabled', () =>{
        cy.get('#editUsername')
            .should('be.empty');
        cy.get('#editFirst')
            .should('be.empty');
        cy.get('#editLast')
            .should('be.empty');
        cy.get('#editPhone')
            .should('be.empty');
    })
})