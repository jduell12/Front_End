describe('App renders without errors', () => {
    it('navigates to the side', () => {
        cy.visit('http://localhost:3000/');

        cy.url().should('include', 'localhost');
    })
})