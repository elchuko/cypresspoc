Cypress.Commands.add('click_database_continue_button',()=>{
    cy.get('#nav-forward').click();
    cy.get('div.main-header.text-center').should('be.visible').and('contain.text','Success!')
});