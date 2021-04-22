Cypress.Commands.add('select_attached_storage_type', ()=>{
    cy.get('#storageType').select('vdisk');
    cy.wait(2000);
    cy.get('label.header.form-label')
        .should('be.visible')
        .and('have.text','Attached disk is ready');
    //cy.get('#action-button').should('be.visible').click();
    //cy.get('#loadingProgressG').should('not.be.visible');
    cy.get('#nav-forward').should('be.visible');
});