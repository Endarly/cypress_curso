/// <reference types="Cypress" /> 

describe ("Introducción a los asserts", () => {

    it("Demo de los Asserts", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("Endarly")
        cy.get("#lastName").should("be.visible").type("Betancourt")
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("endarly@gmail.com")
    })


})// Cierre de describe