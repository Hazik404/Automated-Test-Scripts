describe('Log into the account', () => {
  it('Select from dropdown', () => {
    cy.visit('https://www.yatra.com/', {headers:{"Accept-Encoding": "gzip, deflate"}});
    cy.get('#BE_flight_origin_city').click().clear().type("New", {delay:400});
    cy.get('.viewport span:last-child').each(($el, index, $list)=>{
      cy.log($el.text());
      if($el.text()==='JFK'){
        cy.wrap($el).click();
      }
    })
    
    




  })
})