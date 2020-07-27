describe('Add Plant form loads with no data and the button disabled', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000/');

        cy.url().should('include', 'localhost');
    })

    
})