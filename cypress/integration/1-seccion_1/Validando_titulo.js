/// <reference types="Cypress" /> 
//Para que funciones los comandos de cypress

describe ("Sección 1 Validando el Título", () => {

    it("Test Validar el Titulo", () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','ToolsQA')

        cy.log("Ok la función title funcionó correctamente")
    })


})// Cierre de describe