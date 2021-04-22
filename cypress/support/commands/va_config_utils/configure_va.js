Cypress.Commands.add('configure_va', ()=> {
    cy.click_lets_do_this_button();
    cy.select_attached_storage_type();
    cy.click_storage_continue_button();
    cy.get('#button-1').click();
    cy.type_storage_password();
    cy.click_settings_continue_button();
    //cy.configure_external_database();
    cy.click_database_continue_button();

});