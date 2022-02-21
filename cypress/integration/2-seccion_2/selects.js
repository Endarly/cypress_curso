/// <reference types="Cypress" /> 

require('cypress-xpath')

describe ("Nueva Sección Selects", () => {

    it("check uno", () => {
        //cy.visit("http://computer-database.gatling.io/computers")
        //cy.title().should('eq','Computers database')
        //cy.wait(1500)

    })

    
    it("check uno", () => {
        cy.visit("http://seleniumeasy.com/test/basic-select-dropdown-demo-html")
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)
        //Selecciona primero en la lista el Friday y luego el Saturday
        cy.get("#select-demo").should("be.visible").select("Friday")
        cy.wait(4000)
        cy.get("#select-demo").should("be.visible").select("Saturday")

    })


})// Cierre de describe