// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Configure VA', () => {
    it('Configure va correctly', () => {
        cy.visit_va();
        cy.configure_va();
    })
})