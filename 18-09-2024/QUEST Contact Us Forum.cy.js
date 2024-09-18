describe('QUEST Contact Us', () => {
  it('Fill the Forum', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      return false;
    });
    cy.visit('https://quest.petskon.com/contact-us/', {headers:{"Accept-Encoding": "gzip, deflate"}}, );
    cy.get('#forminator-field-name-1_66e8059a0e766').type("Hazik");
    cy.get('#forminator-field-email-1_66e8059a0e766').type("Test@Email.com");
    cy.get('#forminator-field-phone-1_66e8059a0e766').type('11111111111')
    cy.get('#forminator-field-textarea-1_66e8059a0e766').type('yeah, this is an demo message, i am tryin make it more read worthy yeah sad!')
    cy.get('.forminator-button').click()

    




  })
})