/*eslint no-undef: */
/// <reference types="Cypress" />

describe('Edit Plant form loads with the button disabled', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');
        cy.url().should('include', 'localhost');
    });

    it('edit form loads with the button disabled', () => {
        cy.get('#editname')
            .should('be.empty');
        cy.get('#editSpecies')
            .should('be.empty');
        cy.get('#editWater_frequency')
            .should('be.empty');
        cy.get('button#edit')
            .should('be.disabled');
    });


});

describe('Edit plant form has proper validation', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');

        cy.url().should('include', 'localhost');
    });

    it('enters data into the form and gets appropiate error messages', () => {
        cy.get('#editname')
            .type('nickname')
            .should('have.value', 'nickname')
            .clear();
        cy.get('body')
            .contains('Must include a name.');

        cy.get('#editSpecies')
            .type('species')
            .should('have.value', 'species')
            .clear();
        cy.get('body')
            .contains('Must include a plant species.');

        cy.get('#editWater_frequency')
            .type('1 week')
            .should('have.value', '1 week')
            .clear();
        cy.get('body')
            .contains('Must include watering schedule for plant.');
            
    })

    it('submit button is disabled', () => {
        cy.get('button#edit')
            .should('be.disabled');
    })
});

describe('Can add data to form and submit', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:3000/');
        cy.url().should('include', 'localhost');
    });

    it('enters data into name field and button is disabled', () => {
        cy.get('#editname')
            .type('name')
            .should('have.value', 'name');
        
        cy.get('button#edit')
            .should('be.disabled');
    })

    it('enters data into species field and button is disabled', () => {
        cy.get('#editSpecies')
            .type('species')
            .should('have.value', 'species');

        cy.get('button#edit')
            .should('be.disabled');
    })

    it('enters data into water frequency and button is enabled', () => {
        cy.get('#editWater_frequency')
            .type('1 day')
            .should('have.value', '1 day');

        cy.get('button#edit')
            .should('not.be.disabled');
    })

    it('clicks button is routed to another page', () => {
        cy.get('button#edit')
            .click();
    })
})