describe ('Finding the Leeeeroy Achievement', () => {
    it('visit', () =>{
    cy.viewport(1200, 800)
        cy.log('visit home page');
        cy.visit ('https://www.wowhead.com/wow'); 
        cy.url().should('include', '/wow');

        //cy.get('#onetrust-reject-all-handler').should('be.visible').click()
        cy.get('#onetrust-group-container', { timeout: 10000 }).should('be.visible').then((cookie) => {
            if (cookie) {
            cy.get('#onetrust-reject-all-handler').click();
            } else {

            cy.log('Cookie not found within the specified timeout');
        }
    });  

    cy.get('.notifications-dialog', { timeout: 10000 }).should('be.visible').then((cookie) => {
        if (cookie) {
            cy.get('.notifications-dialog-buttons-decline').click();
        } else {

        cy.log('Desktop notification not found within the specified timeout');
    }
}); 

    cy.log('Redirect to Achievements page');
    cy.get('.header-search > form > input').should('have.attr', 'placeholder', 'Search guides, news, database…')
        .should('be.visible')
        .click()
        .type('achievements {Enter}');
    cy.url().should('match', /achievements/i);

    cy.get(':nth-child(3) > .indicator-mode > a')
        .should('be.visible')
        .should('contain', 'Character Achievements')
        .click();

    cy.get('.listview-note > a') 
        .should('be.visible')
        .should('contain', 'Filter these results')
        .click();  

    cy.get('#filter-facet-name')
        .clear()
        .click()
        .type('Leeeeeeeeeeeeeroy! {Enter}');

    cy.get('#lv-achievements')
    .should('contain', 'Leeeeeeeeeeeeeroy...?')
    .should('contain', 'Leeeeeeeeeeeeeroy!')

    cy.get(':nth-child(2) > [style="text-align: left; border-left: none;"] > .listview-cleartext')
        .should('contain', 'Leeeeeeeeeeeeeroy!')
        .click();

    cy.url().should('match', /leeeeeeeeeeeeeroy/i);
    cy.get('h1').should('contain', 'Leeeeeeeeeeeeeroy!');
    }); 
}); 
