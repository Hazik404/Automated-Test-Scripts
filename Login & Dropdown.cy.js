describe('Log into the account', () => {
  it('Select from dropdown', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get(':nth-child(2) > .input').type("kk124")
    cy.get(':nth-child(4) > .input').type("kk124")
    cy.get(':nth-child(5) > .button').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('#month').select(2);
    cy.get('#transactionType').select('All');
    cy.get('input.button[value="Go"').click()
    




  })
})