Cypress.Commands.add('enter_external_db_information',()=>{
    cy.get('#HOST').clear().type('someConfigurationcvzcvdfgadf\dc\\');//find actual configuration
    cy.get('#USERNAME').clear().type('username');//find actual user
    cy.get('#PASSWORD').clear().type('passowrd');//find actual password
});