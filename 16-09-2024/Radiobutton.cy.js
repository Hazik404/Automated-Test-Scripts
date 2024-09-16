describe('Radiobox Test', () => {
  it('It check the box', () => {
    cy.visit('https://practice.expandtesting.com/radio-buttons')
    cy.get('[type="radio"]').check({force:true})
    cy.get('input[value="yellow"]').check()
    cy.get('input[value="football"]').check()
    
  })
})