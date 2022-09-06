///<reference types="Cypress"/>


describe("Contacto de prueba fórmulario",()=>{

    /*
     beforeEach(() => {
         cy.visit('http://www.webdriveruniversity.com')
    })
   */

    //*[starts-with(text(),'Con')]/following-sibling::ul/li . Referencia para encontrar elemento que permita interactuar
    ////a[contains(@href, 'contact')]
    //button[title='Submit']
    //Your enquiry has been successfully sent to the store owner!


     
     it.only("Ingresar correctamente al fórmulario de contacto",()=>{
     
         //código cypress
         //cy.visit('/')
         //cy.visit('index.php')
         cy.visit('https://automationteststore.com/')
         cy.visit({
             url:'/index.php?rt=content/contact',
             method:'GET',
         })

         
         //cy.get('.info_links_footer > :nth-child(5) > a').click()
         //cy.xpath("//a[contains(@href,'/contact')]");
         cy.get("a[href$='contact']").then(function(linkText){
            cy.log("Interacctuar con botón contact-Us " +linkText.text());
         });
         cy.get('#ContactUsFrm_first_name').type("Jhon");
         cy.get('#ContactUsFrm_email')/*.should('have.attr','name','email')*/.type("kratenku@gmail.com");
         cy.get('#ContactUsFrm_enquiry').type("Cotización de una laptop para programar");
         cy.xpath ("//button[contains(@class, 'click')]").click();
         cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
         cy.log("prueba completa");
     
     });

     it("Enviar fórmulario",()=>{
        //cy.get('.col-md-1 > .btn').click()
       
     })
 
 })
 
 