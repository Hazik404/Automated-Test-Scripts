

describe('icreativez website test', () => {
  it('Pass the first test', () => {
    cy.visit('https://www.icreativez.com/')

    cy.get('.navbar-header > .navbar-brand').click();

    
  })
})