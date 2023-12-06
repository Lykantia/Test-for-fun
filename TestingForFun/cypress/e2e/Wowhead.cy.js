describe ('Exploring Wowhead', () => {
    it('visit', () =>{
        cy.log('visit home page');
        cy.visit ('https://www.wowhead.com/wow'); 

        cy.getCookie('#onetrust-group-container', { timeout: 10000 })//.then((cookie) => {//cy.getCookie('.ot-sdk-row', { timeout: 10000 }).then((cookie) => {
        //cy.getCookie('weCareAboutYourPrivacy', { timeout: 10000 }).then((cookie) => {
            //if (cookie) {
            //cy.log(`Cookie Content: ${cookie.value}`);
            cy.get('#onetrust-reject-all-handler').click();
            //} else {

           // cy.log('Cookie not found within the specified timeout');
           // }
    //});
        cy.log('click on classes on main page')

        //hub-img
        
        cy.get('.header-nav-classes').click()

        cy.get('.class-list clear').its('length').should('be.gte', 1).then((len) => {

            const randomIndex = Cypress._.random(0, len - 1);
        
            // Click on the randomly selected list item
            cy.get('.list-item').eq(randomIndex).should('be.visible').click();
        });
        //Cy.get('.dropdown-item').its('length').then((len) => {
        //const randomIndex = Cypress._.random(0, len - 1);

  // Click on the randomly selected item
//cy.get('.dropdown-item').eq(randomIndex).click();
//});
        //cy.get('.tile-list-item').should('have.length.greater.then', 0)
//*/
})
})