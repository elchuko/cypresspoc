Cypress.Commands.add('configure_external_database',()=>{
    cy.get('#databaseType').select('external');
    cy.get('#HOST').should('be.visible');
    cy.enter_external_db_information();//enter_external_db_information
    cy.get('#action-button').should('be.visible').click();
    while (cy.get('label.header.form-label').contains('connection')){

        if (cy.get('label.header.form-label').contains('failed')){
            cy.enter_external_db_information();
        }
    }
});