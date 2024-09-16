describe('Mouse Trigger', () => {
  it('Trigger the mouse', () => {
    cy.visit('https://www.yatra.com/', {headers:{"Accept-Encoding": "gzip, deflate"}});
    cy.get('.more-arr').realHover();
    //cy.get('.more-arr').trigger('mouseover');
    //cy.get('.moreOption').invoke('show');
    //cy.get('#booking_engine_cruise > :nth-child(2)').click()
    //cy.get('#booking_engine_homestays > :nth-child(2)').click({force:true})
    
    




  })
})