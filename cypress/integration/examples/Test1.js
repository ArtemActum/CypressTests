/// <reference types="Cypress" />

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.product').should('have.length', 5) // celkem vidi 5 produktu, 1 neviditelny
        cy.get('.product:visible').should('have.length', 4) // pouze viditelné produkty 4
        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4) //.product nachazi pod .products
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
            console.log('sf')
        })

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text() // h4 - tag name, 4 elements
            if (textVeg.includes('Cashews')) {
                //$el.find('button').click()
                cy.wrap($el).find('button').click()
            }
        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())

        })
        //const logo=cy.get('.brand')
        //cy.log(cy.get('.brand').text())
        // cy.log(logo.text())











        //fixture

    })



})
