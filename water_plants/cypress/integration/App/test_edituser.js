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
        cy.get('button#editUserBtn')
            .should('be.disabled');
    })
});

describe('Edit user form has proper validation', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');
        cy.url().should('include', 'localhost');
    })

    it('gets username error message', () => {
        cy.get('#editUsername')
            .type('user')
            .clear()
        cy.get('body')
            .contains('Must include a name.');
    })

    it('gets firstname error message', () => {
        cy.get('#editFirst')
            .type('first')
            .clear();
        cy.get('body')
            .contains('Must include a first name.');
    })

    it('gets lastname error message', () => {
        cy.get('#editLast')
            .type('last')
            .clear();
        cy.get('body')
            .contains('Must include a last name.');
    })

    it('gets email error message', () => {
        cy.get('#editEmail')
            .type('email@gmail.com')
            .clear();
        cy.get('body')
            .contains('Must include an email address');
    })

    it('gets phone error message', () => {
        cy.get('#editPhone')
            .type('734-555-5555')
            .clear();
        cy.get('body')
            .contains('Must include a phone number');
    })
})

describe('Edit user for can enter data and submit', () => {
    it('navigates to page', () => {
        cy.visit('http://localhost:3000/');
        cy.url().should('include', 'localhost');
    })

    it('enters data into form and submit button is disabled until all fields are filled out', () => {
        cy.get('#editUsername')
            .type('username')
            .should('have.value', 'username');
        cy.get('button#editUserBtn')
            .should('be.disabled');

        cy.get('#editFirst')
            .type('first')
            .should('have.value', 'first');
        cy.get('button#editUserBtn')
            .should('be.disabled');

        cy.get('#editLast')
            .type('last')
            .should('have.value', 'last');
        cy.get('button#editUserBtn')
            .should('be.disabled');

        cy.get('#editEmail')
            .type('something@gmail.com')
            .should('have.value', 'something@gmail.com');
        cy.get('button#editUserBtn')
            .should('be.disabled');
            
        cy.get('#editPhone')
            .type('777-777-7777')
            .should('have.value', '777-777-7777');
    });

    it('submits the form and is directed to user profile', () => {
        cy.get('button#editUserBtn')
            .should('not.be.disabled')
            .click();
    })
})