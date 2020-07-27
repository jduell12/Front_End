/*eslint no-undef: */
/// <reference types="Cypress" />

describe('Add Plant form loads with no data and the button disabled', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');

        cy.url().should('include', 'localhost');
    });

    it('form loads and is blank', () => {
        cy.get('#nickname')
          .should('be.empty');
    
        cy.get('#species')
            .should('be.empty');
        
        cy.get('#water')
            .should('be.empty');

        cy.get('button#submit')
            .should('be.disabled');
    });
    
});

describe('Form has proper validation', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');

        cy.url().should('include', 'localhost');
    });

    it('enters data into the form and gets appropiate error messages', () => {
        cy.get('#nickname')
            .type('nickname')
            .should('have.value', 'nickname');

        //types into species input and then clears input to get error message
        cy.get('#species')
            .type('species')
            .should('have.value', 'species')
            .clear();

        //checks that error message is there
        cy.get('body')
            .contains('Must include a plant species')

        //types into water input and then clears input to get error message
        cy.get('#water')
            .type('1 hour')
            .should('have.value', '1 hour')
            .clear();

        cy.get('body').contains('Must include watering schedule for plant');
    })


});

describe('Can enter data into form and submit button is disabled until all required fields have input', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');

        cy.url().should('include', 'localhost');
    });

    it('submit button is disabled', () => {
        cy.get('#submit')
            .should('be.disabled')
    })

    it('enters data into nickname input and submit button is still disabled', () => {
        cy.get('#nickname')
            .type('Franky')
            .should('have.value', 'Franky');

        cy.get('#submit')
            .should('be.disabled');
    })

    it('enters data into species input and submit button is still disabled', () => {
        cy.get('#species')
            .type('Aeonium')
            .should('have.value', 'Aeonium');

        cy.get('#submit')
            .should('be.disabled');
    })

    it('enters data into water input and submit button is not disabled', () => {
        cy.get('#water')
            .type('1 hour')
            .should('have.value', '1 hour');
        
        cy.get('#submit')
            .should('not.be.disabled');
    })
});

describe('Enters valid data into form, submit data and is directed to user plant page', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');

        cy.url().should('include', 'localhost');
    });

    it('enters data into form input fields and submits the form', () => {
        cy.get('#nickname')
            .type('Franky');

        cy.get('#species')
            .type('Aeonium');

        cy.get('#water')
            .type('1x month');

        cy.get('#submit').click();
    })

    // it('redirects to user plant page', () => {
    //     cy.url().should('include', 'userplant');
    // });
});