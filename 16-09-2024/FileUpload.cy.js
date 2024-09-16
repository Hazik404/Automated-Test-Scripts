describe('Radiobox Test', () => {
  it('It check the box', () => {
    cy.visit('https://practice.expandtesting.com/upload')
    cy.get('#fileSubmit').click()
    cy.get('input[id="fileInput"]').selectFile('D:\\Icreativez Intership\\signature.png')
    //cy.get('input[id="fileInput"]').selectFile('D:\\Icreativez Intership\\test.png')
    cy.get('#fileSubmit').click()
  })
})