describe ('Exploring Wowhead', () => {
    it('visit', () =>{
      cy.viewport(1200, 800)
        cy.log('visit home page');
        cy.visit ('https://www.wowhead.com/wow'); 
        cy.url().should('include', '/wow');

        cy.get('#onetrust-group-container', { timeout: 10000 }).should('be.visible').then((cookie) => {
            if (cookie) {
            cy.get('#onetrust-reject-all-handler').click();
            } else {

            cy.log('Cookie not found within the specified timeout');
        }
    });

    cy.get('.header-nav-classes > span').should('be.visible').should('contain', 'Classes').click();
    
    cy.log('The classes on classes page');

    cy.get('.heading-size-1 > .c6').should('be.visible').should('contain', 'Death Knight').click();

    cy.log('The DK class');
    cy.url().should('include', '/death-knight');
    cy.get('h1', { timeout: 10000 }).should('be.visible').should('contain', 'Death Knight Guides');
    cy.get('.heading-size-2').should('be.visible').should('contain', 'Class Overview');
    cy.get('.heading-size-2').should('be.visible').should('contain', 'Talent Trees');
    cy.get('.heading-size-2').should('be.visible').should('contain', 'Rotation');
    
    cy.get('.guide-list-featured-guides-links').should('be.visible').should('contain', 'Blood Death Knight', 'Frost Death Knight', 'Unholy Death Knight');

    cy.log('The choosing of random class and assertion');
    cy.get('.listview-band-top > .listview-note').should('be.visible')

    const randomIndex = Math.floor(Math.random() * 13) + 1;

    const selector = `.listview-note > :nth-child(${randomIndex}) > a`;

    cy.get(selector).click();
    cy.contains('span', 'All').click(); 
    
    cy.get(selector).invoke('text').then((selectedElementText) => {

      const expectedUrlPart = selectedElementText.trim().toLowerCase();

      cy.url().should('include', expectedUrlPart);

      })
  })
})
