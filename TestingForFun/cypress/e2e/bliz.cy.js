const EMAIL = 'genn.greymane@gmail.com'
const FIRST_NAME = 'Genn';
const LAST_NAME = 'Greymane';
const ADDRESS1 = 'Greymane Court 3' ;
const ADDRESS2 = 'Lordaeron';
const CITY = 'Gilneas';
const POST_CODE = 73911;
const PHONE = '123456789';

describe('Exploring Blizzard Shop', () => {
    it('Look at the page', () => {
        cy.viewport(1200, 800);

    cy.visit('https://gear.blizzard.com');
    cy.url().should('include', 'gear.blizzard');

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    cy.log('Cookie pop up')
    cy.get('.ot-sdk-container > .ot-sdk-row', { timeout: 10000 }).should('be.visible').then((cookie) => {
            if (cookie) {
            cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler').click();
            } else {

            cy.log('Cookie not found within the specified timeout');
            }       
        });

    cy.log('Another pop up')
        cy.get('[data-testid="klaviyo-form-X63Dnb"]', { timeout: 10000 }).should('be.visible').then((pop) => {
            if (pop) {
                cy.get('circle')
                .should('have.attr', 'cx', '10')
                .should('have.attr', 'cy', '10')
                .should('have.attr', 'r', '9.5')
                .click( {force: true} );
            } else {
            cy.log('pop not found within the specified timeout');
            }  
        });

    cy.get('.brands-block')
        .should('be.visible');

    cy.log('Redirection to World of Warcraft merchandise')  

        cy.get('a[aria-label="World of Warcraft"]').click();
        cy.url().should('match', /world-of-warcraft/i);  

        cy.get('[data-index="2"]')
        .should('be.visible')


        cy.get('[data-index="2"] > .widget-content > .list-tags > :nth-child(6) > .facet-checkbox').click();

    cy.log('Redirection to books-worgen') 
        cy.get('.product-bottom')
        .filter(':contains("World of Warcraft: Curse of the Worgen")')
        .click();
        
    cy.log('Ordering Curse of Worgen book') 
        cy.get('.product-shop > .product-title > span').should(($element) => {
            const text = $element.text();
            expect(text).to.match(/Curse of the Worgen/i);
        });

        cy.get('#product-add-to-cart')
            .should('be.visible')
            .click();

        cy.get('.btn-checkout')
            .should('be.visible')
            .click();

    cy.log('Checkout filling inputs') 

        cy.get('#checkout_email').type(EMAIL).then( () => {
            cy.get('#checkout_email').should('have.value',EMAIL)
        })

        cy.get('#checkout_shipping_address_first_name').type(FIRST_NAME).then( () => {
            cy.get('#checkout_shipping_address_first_name').should('have.value',FIRST_NAME)
        })

        cy.get('#checkout_shipping_address_last_name').type(LAST_NAME).then( () => {
            cy.get('#checkout_shipping_address_last_name').should('have.value',LAST_NAME)
        })

        cy.get('#checkout_shipping_address_address1').type(ADDRESS1).then( () => {
            cy.get('#checkout_shipping_address_address1').should('have.value',ADDRESS1)
        })

        cy.get('#checkout_shipping_address_address2').type(ADDRESS2).then( () => {
            cy.get('#checkout_shipping_address_address2').should('have.value',ADDRESS2)
        })

        cy.get('#checkout_shipping_address_city').type(CITY).then( () => {
            cy.get('#checkout_shipping_address_city').should('have.value',CITY )
        })

        cy.get('#checkout_shipping_address_zip')
        .type(POST_CODE)
        .invoke('val', POST_CODE)
        .should('have.value', POST_CODE);

    cy.log('Postal code validation')
        cy.get('.ui-dialog-buttons', { timeout: 10000 }).should('be.visible').then((validation) => {
            if (validation) {
                cy.get(':nth-child(2) > .ui-button-text').click();
            } else {

            cy.log('Postal code validation not found within the specified timeout');
            }       
        });

        cy.get('#checkout_shipping_address_phone').type(PHONE).then( () => {
            cy.get('#checkout_shipping_address_phone').should('have.value',PHONE)
        })


        cy.get('#continue_button')
            .should('be.visible')
            .click();
        
        cy.url().should('match', /checkout/i);
        cy.get('#continue_button')
            .should('be.visible')
            .click();

    });
});
