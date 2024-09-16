describe('Checkbox Test', () => {
  it('It check the box', () => {
    cy.visit('https://practice.expandtesting.com/checkboxes')
    cy.get('[type="checkbox"]').uncheck()
    cy.get('#checkbox1').check()
  })
})