/// <reference types="Cypress" /> 
require('cypress-plugin-tab')

//Esta función permite desplazarse con el tabulador
//Se descarga un plugins de la página https://www.npmjs.com/package/cypress-plugin-tab
// npm install -D cypress-plugin-tab

describe ("Ejemplo función Tab", () => {

    it("Type con Tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#firstName").type("Endarly").tab().
        type("Betancourt").tab().
        type("endarly@gmail.com")

    })



})// Cierre de describe