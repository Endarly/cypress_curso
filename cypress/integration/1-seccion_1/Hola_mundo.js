describe ("Bienvenido al curso de Cypress módulo sección 1", () => {

    it("Mi primer Test -> Hola mundo", () => {
        cy.log ("Hola mundo")
        cy.wait (1500)
    })

    it ("Segundo test -> campo name", () =>{
        cy.visit("https://demoqa.com/text-box")
        
        cy.get("#userName").type("Endarly")
        cy.wait(4000)
    })

})// Cierre de describe