/// <reference types="Cypress" /> 

require('cypress-xpath')

describe ("Nueva Sección Checkbox", () => {

    it("check uno", () => {
        cy.visit("https://demoqa.com/checkbox")
        cy.title("eq","Cypress_curso_2021")
        cy.wait(1000)

        //Permite seleccionar un check
        
        cy.get("[type='checkbox]").check().should("be.checked")
        cy.wait(1500)

        //Permite dejar de seleccionar un check que previamente se había seleccionado
        cy.get("[type='checkbox]").uncheck().should("not.be.checked")
    })


    
    it("check por selección", () => {
        cy.visit("https://demoqa.com/checkbox")
        cy.title("eq","Cypress_curso_2021")
        cy.wait(1000)

        //Permite dejar de seleccionar un check que previamente se había seleccionado
        cy.get("#isAgeSelected").click()
        cy.xpath("//input[contains(@type,'checkbox)])[5]").click()
    })


})// Cierre de describe