Cypress.Commands.add('click_settings_continue_button',()=>{
    cy.get('#nav-forward').click();
    cy.get('div.header.col').should('be.visible').and('have.text', 'Setup Database');
});