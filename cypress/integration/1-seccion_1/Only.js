/// <reference types="Cypress" /> 

//Esta función permite ejecutar sólo las que tengan la sentencia only

describe ("Ejemplo de Type pageUp, pageDown", () => {


    it.only("Type pageUp Primera ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pageup}')
        cy.wait(1000)
    })
    it("Type pageUp ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pageup}')
        cy.wait(1000)
    })

    it("Type pageDown ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(1000)
    })
    
    it.only("Type pageDown ÚLTIMA ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type('{pagedown}')
        cy.wait(1000)
    })



})// Cierre de describe