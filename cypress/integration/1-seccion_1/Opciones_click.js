/// <reference types="Cypress" /> 

describe ("Opciones de Click", () => {

    it("Click Sencillo", () => {
        cy.visit("https://www.phptravels.net/")
        cy.title().should('eq','PHPTRAVELS - PHPTRAVELS')
        cy.wait(1000)

        cy.get(".theme-btn-transparent").should("be.visible").click()
        cy.get("nav > :nth-child(1) > :nth-child(1) > .waves-effect").should("be.visible").click()  

    })

    // cuando se desea hacer click a un elemento por ejemplo en la barra, una imagen, se estima las coordenas 
    it.only("Click Sencillo", () => {
        cy.visit("https://www.phptravels.net/")
        cy.title().should('eq','PHPTRAVELS - PHPTRAVELS')
        cy.wait(1000)

        cy.get(".theme-btn-transparent").should("be.visible").click(50,5)
    

    })


})// Cierre de describe