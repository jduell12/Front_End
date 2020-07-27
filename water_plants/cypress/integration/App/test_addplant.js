

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

    
})