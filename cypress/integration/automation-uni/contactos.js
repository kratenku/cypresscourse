///<reference types="Cypress"/>


describe("Contacto de prueba fórmulario",()=>{

   /*
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com')
   })
  */
    
    it("Ingresar correctamente al fórmulario de contacto",()=>{
    
        //código cypress
        /*cy.visit('/')
        cy.visit('index.html')
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit({
            url:'/Contact-Us/contactus.html',
            method:'GET',
        })*/

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');

        cy.url().should('include','contactus');
        cy.document().should('have.property','charset').and('eq', 'UTF-8');
        cy.title().should('include', '|')
    });

    it("Diligenciar el fórmulario con los datos completos",()=>{
        cy.get('[name="first_name"]').type('Jhon')
        cy.get('[name="last_name"]').type('Salazar')
        cy.get('[name="email"]').type('kratenku@gmail.com')
        cy.get('textarea.feedback-input').type('Estoy realizando una prueba para validar conocimientos')
    })

    it("Enviar el fórmulario de respuesta",()=>{
        cy.get('[type="submit"]').click()
        cy.xpath("//h1[contains(text(),'Thank You for your Message!')]").should('have.text','Thank You for your Message!');
    })

    it ("Error de assersion",()=>{
        cy.xpath("//h1[contains(text(),'Thank You for your Message!')]").should('have.text','Thank You for your Messae!');
    })

    it("Ingresar datos que no correspondan a la descripcción de los campos ",()=>{
        //cypress code 
        cy.get('[name="first_name"]').type('Jhon')
        cy.get('[name="last_name"]').type('Salazar')
        cy.get('textarea.feedback-input').type('Estoy realizando una prueba para validar conocimientos')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error:kjsdksdkjsdkjj')


    })
})

