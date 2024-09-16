

describe('espn Scroll', () => {
  it('It should yk', () => {
    cy.visit('https://www.espncricinfo.com/', {headers:{"Accept-Encoding": "gzip, deflate"}})
    cy.scrollTo('bottom');
    cy.get('body > div:nth-child(1) > section:nth-child(3) > section:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3) > span:nth-child(1)').scrollIntoView()
    cy.get('body > div:nth-child(1) > section:nth-child(3) > section:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > a:nth-child(1) > div:nth-child(1)').scrollIntoView()
    cy.get('body > div:nth-child(1) > section:nth-child(3) > section:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)').scrollIntoView()
    cy.scrollTo('top');

    
  })
})