Cypress.Commands.add('type_storage_password',()=>{
    cy.get('#SHARED-STORAGE-PASSWORD').clear().type('password');
});