describe('QUEST Contact Us', () => {
  it('Fill the Forum', () => {
    cy.visit('https://thesplendourevents.com/contact-us/', {headers:{"Accept-Encoding": "gzip, deflate"}});
    cy.get('#forminator-field-name-1_66e54b767ffd2').type('DB Cooper')
    cy.get('#forminator-field-email-1_66e54b767ffd2').type('checkreference@namefield.com')
    cy.get('#forminator-field-phone-2_66e54b767ffd2').type('11111111111')
    cy.get('#select2-forminator-form-43__field--select-1_66e54b767ffd2-container').click()
    cy.get('ul[role="listbox"]').contains('Mehndi').click()
    cy.get('#select2-forminator-form-43__field--select-1_66e54b767ffd2-container').click()
    cy.get('ul[role="listbox"]').contains('Valima Reception').click()
    cy.get('#select2-forminator-form-43__field--select-1_66e54b767ffd2-container').click()
    cy.get('ul[role="listbox"]').contains('Bridal Shower').click()
    cy.get('[title="Mehndi"] > .select2-selection__choice__remove > span').click()
    cy.get('#forminator-module-43').click()
    cy.get('#forminator-field-textarea-1_66e54b767ffd2').type('i don/t want to but i am getting hitch so yeah let whats the budget for this?')
    cy.get('#forminator-module-43 > .forminator-row-last > .forminator-col > .forminator-field > .forminator-button').click()
    cy.log("Forum is filled")

    




  })
})