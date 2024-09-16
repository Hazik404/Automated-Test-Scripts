describe('Automate the Registration Forum', () => {
  it('Fill the pass', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get('input[name="customer.firstName"]').type('Demo')
    cy.get('input[name="customer.lastName"]').type('Test')
    cy.get('input[name="customer.address.street"]').type('Latifabad')
    cy.get('input[name="customer.address.city"]').type('Hyderabad')
    cy.get('input[name="customer.address.state"]').type('Sindh')
    cy.get('input[name="customer.address.zipCode"]').type('7100')
    cy.get('input[name="customer.phoneNumber"]').type('11111111111')
    cy.get('input[name="customer.ssn"]').type('0123')
    cy.get('input[name="customer.username"]').type('kk124')
    cy.get('input[name="customer.password"]').type('kk124')
    cy.get('input[name="repeatedPassword"]').type('kk124')
    cy.get('input[value="Register"]').click()
    cy.get('span.error').should('have.text', 'This username already exists.');
    cy.get('span.error').contains('This username already exists.')





  })
})