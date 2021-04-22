Cypress.Commands.add('click_lets_do_this_button',()=>{
    cy.get('#full-page-button').should('be.visible').click();
    cy.get('div.header.col').should('be.visible').and('have.text', 'Configure Storage');
});