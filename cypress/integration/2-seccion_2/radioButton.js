/// <reference types="Cypress" /> 

require('cypress-xpath')

describe ("Nueva Sección Checkbox", () => {

    it("Radio Button", () => {
        cy.visit("https://demoqa.com/radio-button")
        cy.title("eq","ToolsQA")
        cy.wait(1000)

        //Permite seleccionar un check
        
        cy.get(".col-md-6 > :nth-child(1) > :nth-child(3)").click()


        //Permite dejar de seleccionar un check que previamente se había seleccionado
        //cy.get("[type='checkbox]").uncheck().should("not.be.checked")
    })




})// Cierre de describe