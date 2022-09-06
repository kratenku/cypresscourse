///<reference types="Cypress"/>


describe("Inspect Automation Test store items usinf chain of commands",()=>{

    /*
     beforeEach(() => {
         cy.visit('http://www.webdriveruniversity.com')
    })
   */

    //*[starts-with(text(),'Con')]/following-sibling::ul/li . Referencia para encontrar elemento que permita interactuar
    ////a[contains(@href, 'contact')]
    //button[title='Submit']
    //Your enquiry has been successfully sent to the store owner!


     
     it.only("Click on the firts item using item chain of commands  ",()=>{
     
         //código cypress
         //cy.visit('/')
         //cy.visit('index.php')
         cy.visit('https://automationteststore.com/')
        /* cy.visit({
             url:'/index.php?rt=content/contact',
             method:'GET',
         })*/

         cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selecciona el siguiente item: "+itemHeaderText);
         });

         console.log('Prueba promise nodeJS')
    });

    it("",()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
})