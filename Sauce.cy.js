const USER_NAME = 'standard_user'
const PASSWORD = 'secret_sauce'


describe ('Exploring Saucedemo', () => {
    it('Look at the page', () => {
        cy.viewport(1200, 800)
        cy.log('Visit main page')
        cy.visit('https://www.saucedemo.com')
        cy.url().should('include', 'saucedemo');

        cy.log('View Login')
        cy.get('[data-test="username"]').should('be.visible').should('have.attr', 'placeholder', 'Username');
        cy.get('[data-test="password"]').should('be.visible').should('have.attr', 'placeholder', 'Password');
        cy.get('[data-test="login-button"]').should('be.visible').should('have.value', 'Login');

        cy.log('Log in')
        cy.get('[data-test="username"]').click().type(USER_NAME).then( () => {
            cy.get('[data-test="username"]').should('have.value', USER_NAME )
        })
        cy.get('[data-test="password"]').click().type(PASSWORD).then( () => {
            cy.get('[data-test="password"]').should('have.value', PASSWORD )
        })
        cy.get('[data-test="login-button"]').should('be.visible').click()

        cy.log('Redirect to Inventory page')
        //cy.url().should('include', 'inventory');
        cy.get('.app_logo').should('be.visible').should('have.value', 'Swag Labs');
        cy.get('.shopping_cart_link').should('be.visible')
        cy.get('.tittle').should('be.visible').should('have.value', 'Products');
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('.bm-item-list').should('exist')
            .should('contain', 'All Items')
            .should('contain', 'About')
            .should('contain', 'Logout')
            .should('contain', 'Reset App State');

            cy.get('.inventory_item_name ').as('randomInv').then(($Inv) => {
                // Get a random index within the range of the number of <li> elements
                if ($Inv.length > 0) {
                const randomIndex = Math.floor(Math.random() * $Inv.length);
                // Select the element at the random index
                const randomInv = $Inv.eq(randomIndex);

                cy.wrap(randomInv).click({force: true});

                cy.log(`Clicked on element with class: ${randomInv.attr('class')}`);
            } else {

                cy.log('No elements with the class inventory_item_name found.');
            }
            });    


    })
})
