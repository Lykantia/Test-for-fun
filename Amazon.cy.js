describe ('Exploring Amazon', () => {
    it('go through page', () =>{
    cy.viewport(1200, 800)
        cy.log('visit home page');
        cy.visit ('https://www.amazon.com'); 
        cy.url().should('include', 'amazon'); 
        cy.get('#nav-hamburger-menu').should('be.visible').click()
        cy.get('[data-menu-id').then(($hmenu) => {
        //cy.get('.hmenu-item').then(($hmenu) => {
            // Get a random index within the range of the number of <li> elements
            if ($hmenu.length >= 8) {
            const randomIndex = Math.floor(Math.random() * 8);

            // Select the element at the random index
            const randomhmenu = $hmenu.eq(randomIndex);

            cy.wrap(randomhmenu).click({force: true});

            cy.log(`Clicked on element with class: ${randomhmenu.attr('class')}`);
        } else {

            cy.log('No elements with the class .hmenu-item found.');
        }
    })
    cy.get('#twotabsearchtextbox').should('be.visible').click()
    .type('pokemon')
    .should('have.value', 'pokemon')
    cy.get('#nav-search-submit-button')
    .should('be.visible')
    .should('be.enabled')
    .click()
    cy.get('[aria-posinset="2"]').should('exist').click()

    cy.get('.a-section aok-relative s-image-square-aspect').then(($pok) => {
        //cy.get('.hmenu-item').then(($hmenu) => {
            // Get a random index within the range of the number of <li> elements
            if ($pok.length >= 6) {
            const randomIndex = Math.floor(Math.random() * 6);

            // Select the element at the random index
            const randompok = $pok.eq(randomIndex);

            cy.wrap(randompok).click({force: true});

            cy.log(`Clicked on element with name: ${randompok}`);
        } else {

            cy.log('No elements with the name aria-posinset found.');
        }
    })
    //cy.get('[data-uuid="34352090-4a01-41d4-bdda-d3fda179f593"]').should('exist')
})
})

        /*cy.get('#nav-bb-search').should('be.visible').click()
        .type('pokemon').should('have.value', 'pokemon')
        cy.get('#nav-search-submit-button').should('be.visible').should('be.enabled').click()
        cy.get('[data-uuid="34352090-4a01-41d4-bdda-d3fda179f593"]').should('exist')
        cy.get('.a-carousel-card s-visual-card-navigation-carousel-card').then(($card) => {
            // Get a random index within the range of the number of <li> elements
            if ($card.length > 0) {
            const randomIndex = Math.floor(Math.random() * $card.length);

            // Select the element at the random index
            const randomcard = $card.eq(randomIndex);

            cy.wrap(randomcard).click({force: true});

            cy.log(`Clicked on element with class: ${randomcard.attr('class')}`);
        } else {

            cy.log('No elements with the class .a-carousel-card s-visual-card-navigation-carousel-card found.');
        }
    })*/
