Cypress.Commands.add('visit_va', () => {
    cy.visit('http://172.17.102.235:8080/');
    cy.verify_main_heading();
});