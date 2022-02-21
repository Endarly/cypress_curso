// Se mueve por medio del tabulador, toma elementos de una lista
/// <reference types="Cypress" /> 

require('cypress-xpath')
require('cypress-plugin-tab')

describe ("Segundo Reto", () => {

    it("Probando la aplicación", () => {
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        //Buscando
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        //add
        cy.get("#add").should("be.visible").click()
        cy.get("[name='name']").should("be.visible").type("cypress")
        cy.get("#introduced").should("be.visible").type("2021-03-15").tab().type("2025-03-15")

        //Combo
        //validamos que ese elemento realmente tiene el valor 16, es un assert
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get(".primary").should("be.visible").click()

        //Buscando
        cy.xpath("//input[contains(@id,'searchbox')]").type("cypress")
        cy.get("#searchsubmit").should("be.visible").click()
    })


})// Cierre de describe