/// <reference types="Cypress" /> 

require('cypress-xpath')

describe ("Tipos de Selectores", () => {

    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#userName").should("be.visible").type("Carlos")
        cy.get("#userEmail").should("be.visible").type("endarly@gmail.com")

    })

    
    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Endarly Betancourt")
        cy.xpath("//*[@id='userName]").should("be.visible").type("Endarly Betancourt")
    })

    
    
    it("Selector por xpath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)    
        cy.xpath("//*[@id='userName']").should("be.visible").type("Endarly Betancourt")
        cy.wait(1000)
        cy.xpath("//input[@placeholder='name@example.com']").should("be.visible").type("demo@gamil.com")
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Demo de la Dirección")


    })

    
    it("Selector por contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()

    })

    it.only("Selector por contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("43543456")


    })


})// Cierre de describe