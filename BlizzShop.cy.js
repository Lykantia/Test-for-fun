describe ('Exploring Blizzard Shop', () => {
    it('visit', () => {
        cy.viewport(1200, 800)
        cy.log('Visit main page');
        cy.visit ('https://gear.blizzard.com/collections/world-of-warcraft'); 
        cy.url().should('include', 'gear.blizzard');

        cy.get('.ot-sdk-container', { timeout: 10000 }).should('be.visible').then((cookie) => {
            if (cookie) {
            cy.get('#onetrust-close-btn-container').click();
            } else {

            cy.log('Cookie not found within the specified timeout');
            }       
        })
    })
})

        /*cy.get('modal-header', { timeout: 10000 }).should('be.visible').then((mh) => {
            if (mh) {
            cy.get('#eu-geolocation').click();
            } else {

            cy.log('modal header not found within the specified timeout');
        }  */
        /*
        cy.get('[data-testid="klaviyo-form-X63Dnb"]', { timeout: 10000 }).should('be.visible').then((pop) => {
            if (pop) {
            cy.get('#title-Close dialog 1').click();
            } else {

            cy.log('Cookie not found within the specified timeout');
        }   
    cy.get('.dropdown-toggle').should('be.visible')
        cy.get('.dropdown-item').should('eq', 'EUR' ).click()*/ 