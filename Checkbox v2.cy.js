describe('Test the checkbox', () => {
  it('check the chockbox', () => {
    cy.visit('https://www.zoho.com/books/accounting-software-demo/#/home/dashboard', {headers:{"Accept-Encoding": "gzip, deflate"}});
    cy.get('.font-small > .nav-link').click();
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').uncheck();
    
    
    




  })
})