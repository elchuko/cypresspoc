Cypress.Commands.add('verify_main_heading',() => {
    cy.get('div.main-header.text-center').should('be.visible').and('have.text', "Welcome to PrinterLogic!")
});