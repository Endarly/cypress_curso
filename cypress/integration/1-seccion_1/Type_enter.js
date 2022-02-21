/// <reference types="Cypress" /> 

//Para que funciones los comandos de cypress

describe ("Sección 1 Validando el Título", () => {

    it("Type --> ENTER", () => {
        cy.visit("https://google.com/")
        cy.title().should('eq','Google')
        cy.wait(1500)

        cy.get("[name='q']").type("cypress io {enter}")
        cy.wait(1000)
        cy.get("#tads").click()

        cy.log("Ok la función Type funcionó correctamente")
    })


})// Cierre de describe