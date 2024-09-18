describe('QUEST Contact Us', () => {
  it('Fill the Forum', () => {
    cy.visit('https://quest-alumni.pk/registration/', {headers:{"Accept-Encoding": "gzip, deflate"}});
    cy.get('#forminator-field-first-name-1_66cc1272c1ff9').type("Hazik");
    cy.get('#forminator-field-last-name-1_66cc1272c1ff9').type("Ahmed");
    cy.get('#forminator-field-email-1_66cc1272c1ff9').type("Demo@demo.com")
    cy.get('#forminator-field-phone-1_66cc1272c1ff9').type("11111111111")
    cy.get('#select2-forminator-form-6093__field--select-1_66cc1272c1ff9-container').click()
    cy.get('ul[role="listbox"]').contains("Department of Computer Systems Engineering").click()
    cy.get('#forminator-field-text-1_66cc1272c1ff9').type("2022")
    cy.get('#forminator-field-date-1-day_66cc1272c1ff9').type('23')
    cy.get('#forminator-field-date-1-month_66cc1272c1ff9').type("05")
    cy.get('#forminator-field-date-1-year_66cc1272c1ff9').type("2001")
    cy.get('input[value="two"]').check({force:true})
    cy.get('#forminator-field-text-2_66cc1272c1ff9').type("Automation Engineer")
    cy.get('#forminator-field-address-1-street_address_66cc1272c1ff9').type("Location Goes Here")
    cy.get('#forminator-field-address-1-address_line_66cc1272c1ff9').type("Secomd Location Goes Here")
    cy.get('#forminator-field-address-1-city_66cc1272c1ff9').type("HYD")
    cy.get('#forminator-field-address-1-state_66cc1272c1ff9').type("SINDH")
    cy.get('#forminator-field-address-1-zip_66cc1272c1ff9').type("71000")
    cy.get('#select2-forminator-field-6093__field--address-1-country_66cc1272c1ff9-container').click()
    cy.get('.select2-search__field').click().type('Pakistan{enter}',{delay: 500,})
    cy.get('#forminator-field-textarea-1_66cc1272c1ff9').type("Very Dark Path, i have turn into the life of regert and shame")
    cy.get('#forminator-field-textarea-2_66cc1272c1ff9').type("I have alzhemir, so i don't find one")
    
    cy.get('.elementor-element-811f28b > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > #forminator-module-6093 > .forminator-row-last > .forminator-col > .forminator-field > .forminator-button').click()
    
    

    




  })
})